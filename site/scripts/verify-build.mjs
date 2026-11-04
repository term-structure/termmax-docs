// Verifies a finished build in .vitepress/dist:
//   1. every URL from SUMMARY.md (manifest) has an output HTML file
//   2. every internal <a href> / <img src> / <source src> resolves to a file in dist
//   3. no unconverted GitBook {% ... %} tags remain in the HTML
// Hash fragments pointing to missing ids are reported as warnings.
// Exit code 1 on any failure of 1-3. Uses DOCS_BASE like the config.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIST = path.join(SITE, '.vitepress', 'dist')
const base = process.env.DOCS_BASE || '/'
const manifest = JSON.parse(fs.readFileSync(path.join(SITE, '.cache', 'manifest.json'), 'utf8'))

const failures = { missingPages: [], brokenLinks: [], brokenAssets: [], gitbookTags: [] }
const warnings = { missingAnchors: [] }

function htmlFileForUrl(url) {
  const p = decodeURIComponent(url).replace(/^\/+|\/+$/g, '')
  const candidates = p === '' ? ['index.html'] : [`${p}.html`, `${p}/index.html`, p]
  return candidates.map((c) => path.join(DIST, c)).find((f) => fs.existsSync(f) && fs.statSync(f).isFile())
}

// 1. expected URLs
for (const { url, source } of manifest.urls) {
  if (!htmlFileForUrl(url)) failures.missingPages.push(`${url}  (from ${source})`)
}

// 2 + 3. scan HTML
const htmlFiles = []
;(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name)
    if (e.isDirectory()) walk(f)
    else if (e.name.endsWith('.html')) htmlFiles.push(f)
  }
})(DIST)

const idCache = new Map()
function idsOf(file) {
  if (!idCache.has(file)) {
    const html = fs.readFileSync(file, 'utf8')
    idCache.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => decodeEntities(m[1]))))
  }
  return idCache.get(file)
}

function decodeEntities(s) {
  return s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
}

let linkCount = 0
let assetCount = 0
for (const file of htmlFiles) {
  const rel = path.relative(DIST, file)
  const html = fs.readFileSync(file, 'utf8')

  // Only the page body; the shell's own assets/scripts are produced by Vite.
  for (const m of html.matchAll(/<(a|img|source)\b[^>]*?\s(href|src)="([^"]*)"/g)) {
    const [, tag, , rawUrl] = m
    const value = decodeEntities(rawUrl)
    if (!value || /^(https?:|mailto:|tel:|javascript:|data:|\/\/)/i.test(value)) continue
    if (value.startsWith('#')) continue
    if (!value.startsWith('/')) {
      // relative links are not expected after conversion
      ;(tag === 'a' ? failures.brokenLinks : failures.brokenAssets).push(`${rel} -> ${value} (relative)`)
      continue
    }
    if (!value.startsWith(base)) {
      ;(tag === 'a' ? failures.brokenLinks : failures.brokenAssets).push(`${rel} -> ${value} (missing base ${base})`)
      continue
    }
    const [pathPart, hash] = value.slice(base.length - 1).split('#')
    const clean = pathPart.split('?')[0]
    if (tag === 'a') {
      linkCount++
      const target = htmlFileForUrl(clean)
      if (!target) failures.brokenLinks.push(`${rel} -> ${value}`)
      else if (hash && target.endsWith('.html') && !idsOf(target).has(decodeURIComponent(hash)))
        warnings.missingAnchors.push(`${rel} -> ${value}`)
    } else {
      assetCount++
      const f = path.join(DIST, decodeURIComponent(clean))
      if (!fs.existsSync(f)) failures.brokenAssets.push(`${rel} -> ${value}`)
    }
  }

  for (const m of html.matchAll(/\{%[^]{0,80}|&#123;%[^]{0,80}/g)) {
    failures.gitbookTags.push(`${rel}: ${m[0].slice(0, 80)}`)
  }
}

const dedupe = (a) => [...new Set(a)]
console.log(`base: ${base}`)
console.log(`expected pages: ${manifest.urls.length}, HTML files: ${htmlFiles.length}`)
console.log(`internal links checked: ${linkCount}, internal assets checked: ${assetCount}`)
let failed = false
for (const [k, v] of Object.entries(failures)) {
  const list = dedupe(v)
  console.log(`${list.length ? '✗' : '✓'} ${k}: ${list.length}`)
  list.slice(0, 50).forEach((x) => console.log('    ' + x))
  if (list.length) failed = true
}
for (const [k, v] of Object.entries(warnings)) {
  const list = dedupe(v)
  console.log(`${list.length ? '!' : '✓'} ${k} (warning): ${list.length}`)
  list.slice(0, 50).forEach((x) => console.log('    ' + x))
}
process.exit(failed ? 1 : 0)

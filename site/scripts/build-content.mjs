// Copies the GitBook spaces into site/generated/ and converts GitBook-only
// syntax to VitePress. Source files are never modified.
//
// Outputs:
//   site/generated/                 VitePress srcDir (pages + public assets)
//   site/.cache/manifest.json       rewrites, sidebars, URL map (read by config)
//   site/.cache/conversion-report.json  everything that was not converted cleanly

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const REPO = path.resolve(SITE, '..')
const OUT = path.join(SITE, 'generated')
const CACHE = path.join(SITE, '.cache')

// Mirrors gitbook-docs.yaml: default space at "/", others under their path.
export const SPACES = [
  { dir: 'termmax', prefix: '', assetKey: 'en' },
  { dir: 'termmax-doc-cn', prefix: 'termmax-doc-cn', assetKey: 'cn' }
]

const HINT_TYPES = { info: 'info', success: 'tip', warning: 'warning', danger: 'danger' }
const ASSET_URL_BASE = '/gitbook-assets'

const report = { unsupported: [], repairedHtml: [], unresolvedLinks: [], missingAssets: [], gitbookAppLinks: [], absoluteSelfLinks: [] }

// ---------- SUMMARY.md ----------

function parseSummary(space) {
  const lines = fs.readFileSync(path.join(REPO, space.dir, 'SUMMARY.md'), 'utf8').split('\n')
  const groups = []
  let group = null
  const stack = []
  const pages = []
  for (const line of lines) {
    const heading = line.match(/^##\s+(.*)$/)
    if (heading) {
      group = { text: heading[1].trim(), items: [] }
      groups.push(group)
      stack.length = 0
      continue
    }
    if (/^\s*(\*\*\*|---)\s*$/.test(line)) {
      group = { text: '', items: [] }
      groups.push(group)
      stack.length = 0
      continue
    }
    const m = line.match(/^(\s*)\* \[(.*)\]\((.*)\)\s*$/)
    if (!m) continue
    if (!group) {
      group = { text: '', items: [] }
      groups.push(group)
    }
    const depth = Math.floor(m[1].length / 2)
    const node = { text: unescapeMd(m[2]), source: decodeURIComponent(m[3]), children: [] }
    pages.push(node)
    stack.length = depth
    if (depth === 0) group.items.push(node)
    else stack[depth - 1].children.push(node)
    stack[depth] = node
  }
  return { groups, pages }
}

function unescapeMd(s) {
  return s.replace(/\\([\\`*_{}\[\]()#+\-.!])/g, '$1')
}

// space-relative source path -> path inside srcDir before / after rewrites
function srcPath(space, source) {
  return space.prefix ? `${space.prefix}/${source}` : source
}

function rewrittenPath(space, source) {
  let p
  if (source === 'README.md') p = space.prefix ? `${space.prefix}.md` : 'index.md'
  else if (source.endsWith('/README.md')) p = srcPath(space, source.slice(0, -'/README.md'.length) + '.md')
  else p = srcPath(space, source)
  return p
}

function urlFor(rewritten) {
  if (rewritten === 'index.md') return '/'
  return '/' + rewritten.replace(/\.md$/, '')
}

// ---------- frontmatter ----------

function splitFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!m) return { fm: '', data: {}, body: text }
  return { fm: m[0], data: parseSimpleYaml(m[1]), body: text.slice(m[0].length) }
}

// Handles the subset GitBook writes: `key: value` and folded `key: >-` blocks.
function parseSimpleYaml(src) {
  const data = {}
  const lines = src.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^([A-Za-z_-]+):\s*(.*)$/)
    if (!m) continue
    let [, key, value] = m
    if (/^[>|]-?$/.test(value)) {
      const parts = []
      while (i + 1 < lines.length && /^\s+/.test(lines[i + 1])) parts.push(lines[++i].trim())
      value = parts.join(value.startsWith('>') ? ' ' : '\n')
    } else {
      value = value.replace(/^(['"])(.*)\1$/, '$2')
    }
    data[key] = value === 'true' ? true : value === 'false' ? false : value
  }
  return data
}

// ---------- assets ----------

const assetMaps = new Map() // space.dir -> Map(original filename -> safe filename)

function assetUrl(space, originalName, fromFile) {
  const srcFile = path.join(REPO, space.dir, '.gitbook', 'assets', originalName)
  if (!fs.existsSync(srcFile)) {
    report.missingAssets.push({ file: fromFile, asset: originalName })
    return null
  }
  let map = assetMaps.get(space.dir)
  if (!map) assetMaps.set(space.dir, (map = new Map()))
  if (!map.has(originalName)) {
    const ext = path.extname(originalName).toLowerCase()
    const stem = path.basename(originalName, path.extname(originalName))
      .replace(/[^A-Za-z0-9._-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'asset'
    const taken = new Set(map.values())
    let safe = stem + ext
    for (let n = 2; taken.has(safe); n++) safe = `${stem}-${n}${ext}`
    map.set(originalName, safe)
    const dest = path.join(OUT, 'public', ASSET_URL_BASE.slice(1), space.assetKey, safe)
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.copyFileSync(srcFile, dest)
  }
  return `${ASSET_URL_BASE}/${space.assetKey}/${map.get(originalName)}`
}

// Returns the asset filename if `ref` points into .gitbook/assets, else null.
function gitbookAssetName(ref) {
  const m = ref.match(/(?:^|\/)\.gitbook\/assets\/(.+)$/)
  if (!m) return null
  try { return decodeURIComponent(m[1]) } catch { return m[1] }
}

// ---------- links ----------

function resolveInternalLink(space, fileSource, target, lookup) {
  const [pathPart, hash = ''] = target.split(/(?=#)/)
  let rel
  try { rel = decodeURIComponent(pathPart) } catch { rel = pathPart }
  const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(fileSource), rel))
  const candidates = [resolved, resolved.replace(/\/$/, '') + '/README.md', resolved + '.md']
  for (const c of candidates) {
    const hit = lookup.get(c.replace(/^\.\//, ''))
    if (hit) return '/' + hit + hash
  }
  return null
}

// ---------- page conversion ----------

function convertPage(space, page, lookup) {
  const file = srcPath(space, page.source)
  const raw = fs.readFileSync(path.join(REPO, space.dir, page.source), 'utf8')
  const { fm, data, body } = splitFrontmatter(raw.replace(/\r\n/g, '\n'))
  page.hidden = data.hidden === true

  const lines = body.split('\n')
  const out = []
  let fence = null
  const tabStack = []
  let descriptionInserted = !data.description

  for (const line of lines) {
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/)
    if (fence) {
      out.push(line)
      if (fenceMatch && fenceMatch[1][0] === fence[0] && fenceMatch[1].length >= fence.length) fence = null
      continue
    }
    if (fenceMatch) {
      fence = fenceMatch[1]
      out.push(line)
      continue
    }

    const t = line.trim()
    let m

    if ((m = t.match(/^\{%\s*hint\s+style="(\w+)"\s*%\}$/))) {
      const type = HINT_TYPES[m[1]]
      if (!type) report.unsupported.push({ file, tag: t, fallback: 'rendered as ::: info' })
      out.push('', `::: ${type || 'info'}`)
      continue
    }
    if (/^\{%\s*endhint\s*%\}$/.test(t)) { out.push(':::', ''); continue }

    if (/^\{%\s*tabs\s*%\}$/.test(t)) {
      tabStack.push({ titles: [], at: out.length })
      out.push('') // placeholder, filled at endtabs
      continue
    }
    if ((m = t.match(/^\{%\s*tab\s+title="(.*)"\s*%\}$/)) && tabStack.length) {
      const tabs = tabStack.at(-1)
      out.push(`<template #tab-${tabs.titles.length}>`, '')
      tabs.titles.push(m[1])
      continue
    }
    if (/^\{%\s*endtab\s*%\}$/.test(t) && tabStack.length) { out.push('', '</template>'); continue }
    if (/^\{%\s*endtabs\s*%\}$/.test(t) && tabStack.length) {
      const tabs = tabStack.pop()
      const titles = JSON.stringify(tabs.titles).replace(/'/g, '\\u0027')
      out[tabs.at] = `<GbTabs :titles='${titles}'>`
      out.push('</GbTabs>', '')
      continue
    }

    if ((m = t.match(/^\{%\s*file\s+src="([^"]+)"\s*%\}$/))) {
      const name = gitbookAssetName(m[1])
      const url = name && assetUrl(space, name, file)
      if (url) {
        out.push('', `<div class="gb-file">\n\n[📎 ${name.replace(/[[\]]/g, '\\$&')}](${url})\n\n</div>`, '')
      } else {
        report.unsupported.push({ file, tag: t, fallback: 'kept as plain link text' })
        out.push('', `📎 ${m[1]}`, '')
      }
      continue
    }

    let l = convertInline(space, page, file, line, lookup)

    // GitBook leaves `&#x20;` (trailing space) on headings; it would leak into
    // the anchor slug (#x-token-xt-x20) and break GitBook-style anchor links.
    if (/^#{1,6}\s/.test(l)) l = l.replace(/(\s|&#x20;)+$/, '')

    // GitBook shows the frontmatter description as a lead paragraph under the H1.
    if (!descriptionInserted && /^#\s/.test(l)) {
      out.push(l, '', `<p class="gb-description">${escapeHtml(data.description)}</p>`)
      descriptionInserted = true
      continue
    }
    out.push(l)
  }

  if (tabStack.length) report.unsupported.push({ file, tag: '{% tabs %}', fallback: 'unterminated tabs block' })
  if (!descriptionInserted) out.unshift(`<p class="gb-description">${escapeHtml(data.description)}</p>`, '')

  let result = out.join('\n')

  // Anything still shaped like a GitBook block tag was not understood: keep it visible.
  result = result.replace(/\{%[\s\S]*?%\}/g, (tag) => {
    report.unsupported.push({ file, tag, fallback: 'shown verbatim in a gb-unsupported box' })
    return `<code class="gb-unsupported">${escapeHtml(tag)}</code>`
  })

  const dest = path.join(OUT, file)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.writeFileSync(dest, fm + result)
}

function convertInline(space, page, file, line, lookup) {
  let l = line

  // <img src="...gitbook/assets/..."> (incl. inside <figure>)
  l = l.replace(/(<img\b[^>]*?\bsrc=")([^"]+)(")/g, (all, a, src, b) => {
    const name = gitbookAssetName(src)
    if (!name) return all
    const url = assetUrl(space, name, file)
    return url ? a + url + b : all
  })

  // ![alt](<path>) and ![alt](path "title")
  l = l.replace(/(!\[[^\]]*\]\()(<[^>]+>|[^)\s]+)((?:\s+"[^"]*")?\))/g, (all, a, target, b) => {
    const name = gitbookAssetName(target.replace(/^<|>$/g, ''))
    if (!name) return all
    const url = assetUrl(space, name, file)
    return url ? a + url + b : all
  })

  // [text](target) — internal page links become absolute rewritten .md paths,
  // which VitePress turns into clean URLs, prefixes with base, and dead-link-checks.
  l = l.replace(/((?<!!)\[[^\]]*\]\()(<[^>]+>|[^)\s]+)((?:\s+"[^"]*")?\))/g, (all, a, rawTarget, b) => {
    const target = rawTarget.replace(/^<|>$/g, '')
    if (/^app\.gitbook\.com|^https?:\/\/app\.gitbook\.com/.test(target)) {
      report.gitbookAppLinks.push({ file, link: target })
      return all
    }
    if (/^https?:\/\/docs\.ts\.finance/.test(target)) {
      report.absoluteSelfLinks.push({ file, link: target })
      return all
    }
    if (/^([a-z][a-z0-9+.-]*:|#|\/)/i.test(target)) return all
    const name = gitbookAssetName(target)
    if (name) {
      const url = assetUrl(space, name, file)
      return url ? a + url + b : all
    }
    const resolved = resolveInternalLink(space, page.source, target, lookup)
    if (!resolved) {
      report.unresolvedLinks.push({ file, link: target })
      return all
    }
    return a + resolved + b
  })

  // Inline $$x$$ is GitBook's inline math; VitePress (mathjax3) uses $x$.
  if (l.trim() !== '$$' && !/^\s*\$\$.*\$\$\s*$/.test(l)) {
    l = l.replace(/\$\$(.+?)\$\$/g, (_, expr) => `$${expr.trim()}$`)
  }

  // <mark style="color:$warning;"> uses GitBook theme tokens.
  l = l.replace(/<mark style="([^"]*)">/g, (_, style) =>
    `<mark class="gb-mark" style="${style.replace(/\$(\w+)/g, 'var(--gb-$1)')}">`)

  // GitBook tolerates a stray second <mark> where </mark> was meant; Vue's
  // template compiler does not. An empty <mark> (followed by a closing tag or
  // end of line) becomes </mark>; any remaining imbalance is closed at line end.
  let unclosed = (l.match(/<mark\b/g) || []).length - (l.match(/<\/mark>/g) || []).length
  if (unclosed > 0) {
    const before = l
    while (unclosed > 0 && /<mark\b[^>]*>(?=\s*(<\/|$))/.test(l)) {
      l = l.replace(/<mark\b[^>]*>(?=\s*(<\/|$))/, '</mark>')
      unclosed -= 2
    }
    if (unclosed > 0) l += '</mark>'.repeat(unclosed)
    report.repairedHtml.push({ file, before: before.trim(), after: l.trim() })
  }

  return l
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// ---------- sidebar ----------

function toSidebar(groups, rewrittenBySource) {
  const item = (node) => {
    const link = urlFor(rewrittenBySource.get(node.source))
    const children = node.children.filter((c) => !c.hidden).map(item)
    return children.length ? { text: node.text, link, collapsed: true, items: children } : { text: node.text, link }
  }
  return groups.map((g) => ({ text: g.text, items: g.items.filter((n) => !n.hidden).map(item) }))
}

// ---------- main ----------

fs.rmSync(OUT, { recursive: true, force: true })
fs.mkdirSync(OUT, { recursive: true })
fs.mkdirSync(CACHE, { recursive: true })

const manifest = { rewrites: {}, sidebars: {}, urls: [] }

for (const space of SPACES) {
  const { groups, pages } = parseSummary(space)
  const rewrittenBySource = new Map()
  const lookup = new Map() // space-relative source path -> rewritten path
  for (const p of pages) {
    const rw = rewrittenPath(space, p.source)
    rewrittenBySource.set(p.source, rw)
    lookup.set(p.source, rw)
    if (rw !== srcPath(space, p.source)) manifest.rewrites[srcPath(space, p.source)] = rw
    manifest.urls.push({ source: `${space.dir}/${p.source}`, url: urlFor(rw), title: p.text })
  }
  for (const p of pages) convertPage(space, p, lookup)
  manifest.sidebars[space.prefix || 'root'] = toSidebar(groups, rewrittenBySource)
}

fs.writeFileSync(path.join(CACHE, 'manifest.json'), JSON.stringify(manifest, null, 2))
fs.writeFileSync(path.join(CACHE, 'conversion-report.json'), JSON.stringify(report, null, 2))

const assetCount = [...assetMaps.values()].reduce((n, m) => n + m.size, 0)
console.log(`pages: ${manifest.urls.length}, rewrites: ${Object.keys(manifest.rewrites).length}, assets copied: ${assetCount}`)
for (const [k, v] of Object.entries(report)) console.log(`${k}: ${v.length}`)
if (report.unsupported.length) console.warn('UNSUPPORTED GitBook syntax (kept visible):', report.unsupported)

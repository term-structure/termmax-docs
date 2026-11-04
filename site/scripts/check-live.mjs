// Checks that every URL in the GitBook sitemap answers 200 on the new site,
// with no redirect (a 301 to a trailing-slash URL counts as a failure).
//
// Usage:
//   node scripts/check-live.mjs                      # after the custom-domain switch
//   node scripts/check-live.mjs --target https://decentral-portal.github.io/termmax-docs
//   node scripts/check-live.mjs --urls scripts/gitbook-urls.txt
//
// Once docs.ts.finance points at the new site its sitemap.xml is VitePress's,
// not GitBook's. scripts/gitbook-urls.txt is the GitBook sitemap snapshot
// (391 URLs, 2026-11-04) to test against after the switch.
//
// --sitemap  sitemap or sitemap index to read URLs from (default: https://docs.ts.finance/sitemap.xml)
// --target   origin(+base) to test; the sitemap's origin is replaced by it
// --urls     file with one URL per line (e.g. saved before GitBook is switched off)
// --save     write the collected URL list to this file

import fs from 'node:fs'

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, all) => (a.startsWith('--') ? [...acc, [a.slice(2), all[i + 1]]] : acc), [])
)
const SITEMAP = args.sitemap || 'https://docs.ts.finance/sitemap.xml'
const TARGET = args.target?.replace(/\/+$/, '')
const CONCURRENCY = 8

async function fetchText(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`)
  return res.text()
}

// Follows sitemap indexes (GitBook serves one per space).
async function collect(url, seen = new Set()) {
  if (seen.has(url)) return []
  seen.add(url)
  const xml = await fetchText(url)
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1].replace(/&amp;/g, '&'))
  if (/<sitemapindex/.test(xml)) return (await Promise.all(locs.map((l) => collect(l, seen)))).flat()
  return locs
}

let urls = args.urls
  ? fs.readFileSync(args.urls, 'utf8').split('\n').map((s) => s.trim()).filter(Boolean)
  : await collect(SITEMAP)
urls = [...new Set(urls)]
if (args.save) fs.writeFileSync(args.save, urls.join('\n') + '\n')

const toTarget = (u) => {
  if (!TARGET) return u
  const { pathname, search } = new URL(u)
  return TARGET + (pathname === '/' ? '' : pathname) + search
}

const results = []
let i = 0
async function worker() {
  while (i < urls.length) {
    const original = urls[i++]
    const url = toTarget(original)
    let status, location
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const res = await fetch(url, { redirect: 'manual' })
        status = res.status
        location = res.headers.get('location')
        if (status < 500) break
      } catch (e) {
        status = `ERR ${e.cause?.code || e.message}`
      }
    }
    results.push({ original, url, status, location })
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker))

const bad = results.filter((r) => r.status !== 200)
console.log(`checked ${results.length} URLs${TARGET ? ` against ${TARGET}` : ''}: ${results.length - bad.length} OK, ${bad.length} failed`)
for (const r of bad.sort((a, b) => a.url.localeCompare(b.url))) {
  console.log(`  ${r.status}  ${r.url}${r.location ? `  -> ${r.location}` : ''}`)
}
process.exit(bad.length ? 1 : 0)

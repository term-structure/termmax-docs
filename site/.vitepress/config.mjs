import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

// Produced by scripts/build-content.mjs (run before every dev/build).
const manifest = JSON.parse(
  fs.readFileSync(fileURLToPath(new URL('../.cache/manifest.json', import.meta.url)), 'utf8')
)

// Preview on GitHub Pages: DOCS_BASE=/termmax-docs/  ·  custom domain: unset (/)
const base = process.env.DOCS_BASE || '/'
const siteUrl = process.env.DOCS_SITE_URL || 'https://docs.ts.finance/'

const CN = 'termmax-doc-cn'

export default defineConfig({
  srcDir: 'generated',
  base,
  cleanUrls: true,
  rewrites: manifest.rewrites,
  title: 'TermMax Docs',
  description: 'TermMax documentation',
  // head links are not base-prefixed by VitePress
  head: [['link', { rel: 'icon', type: 'image/png', href: `${base}termmax-favicon.png` }]],
  lastUpdated: false,
  sitemap: { hostname: siteUrl },
  markdown: { math: true },

  // The CN space home is rewritten to `termmax-doc-cn.md` (URL /termmax-doc-cn,
  // no trailing slash), which VitePress would not match to the `termmax-doc-cn/`
  // locale. Report it as living inside the locale so lang/sidebar/UI are Chinese.
  transformPageData(pageData) {
    if (pageData.relativePath === `${CN}.md`) pageData.relativePath = `${CN}/index.md`
  },
  // The outer HTML shell resolves the locale from the route, not relativePath.
  transformHtml(html, id, { pageData }) {
    // GitBook redirects /page/ to /page; GitHub Pages 404s it. The 404 page
    // retries once without the trailing slash. Leading slashes are collapsed so
    // `//evil.com/` cannot become a protocol-relative (off-site) redirect.
    if (id.endsWith('404.html')) {
      const redirect = `<script>(function(){var p=location.pathname;` +
        `if(p.length>1&&p.slice(-1)==='/'&&p!==${JSON.stringify(base)}){` +
        `var t=p.replace(/\\/+$/,'').replace(/^[\\/\\\\]+/,'/');` +
        `if(t.length>1)location.replace(t+location.search+location.hash)}})()</script>`
      return html.replace('<head>', '<head>' + redirect)
    }
    if (pageData.relativePath !== `${CN}/index.md`) return
    return html
      .replace('<html lang="en-US"', '<html lang="zh-CN"')
      .replace(/ \| TermMax Docs<\/title>/, ' | TermMax 文档</title>')
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: { sidebar: manifest.sidebars.root }
    },
    [CN]: {
      label: '简体中文',
      lang: 'zh-CN',
      link: `/${CN}`,
      title: 'TermMax 文档',
      themeConfig: {
        sidebar: manifest.sidebars[CN],
        outline: { label: '本页目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        sidebarMenuLabel: '目录',
        returnToTopLabel: '回到顶部',
        darkModeSwitchLabel: '外观',
        langMenuLabel: '语言'
      }
    }
  },

  themeConfig: {
    outline: { level: [2, 3] },
    // The two spaces use different slugs, so the language menu goes to the
    // other locale's home instead of guessing a same-path page.
    i18nRouting: false,
    search: { provider: 'local' }
  }
})

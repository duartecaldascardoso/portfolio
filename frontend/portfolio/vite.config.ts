import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { workWithMeFallbackCss, workWithMeFallbackHtml } from './src/content/workWithMeHtml.ts'

// The site is served from https://<user>.github.io/<repo>/. The deploy workflow passes the
// repository name in BASE_PATH, so renaming the repository moves the site with it.
const base = process.env.BASE_PATH ?? '/portfolio/'

// Puts the Work with me copy in the HTML document itself. The inline script tags the
// document so the duplicate is hidden once JavaScript runs; without JavaScript the
// article is the page. This is not a full prerender of the app.
function workWithMeHtml(): Plugin {
  return {
    name: 'work-with-me-html',
    transformIndexHtml(html) {
      if (html.includes('id="work-with-me-fallback"')) return html
      return html
        .replace(
          '<head>',
          '<head>\n  <script>document.documentElement.classList.add("js")</script>',
        )
        .replace('</head>', `  <style>\n${workWithMeFallbackCss}\n  </style>\n</head>`)
        .replace('<div id="root"></div>', `${workWithMeFallbackHtml}\n  <div id="root"></div>`)
    },
  }
}

export default defineConfig({
  base: base.endsWith('/') ? base : `${base}/`,
  plugins: [react(), workWithMeHtml()],
})

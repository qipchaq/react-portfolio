import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import meta from './src/content/meta.json'

// Fills the %PLACEHOLDERS% in index.html with the English meta so the text
// lives in one place. scripts/prerender-ru.mjs swaps them for Russian.
const htmlMeta = (): Plugin => ({
  name: 'html-meta',
  transformIndexHtml: (html) =>
    html
      .replaceAll('%SITE_URL%', meta.siteUrl)
      .replaceAll('%META_TITLE%', meta.en.title)
      .replaceAll('%META_DESCRIPTION%', meta.en.description),
})

export default defineConfig({
  plugins: [react(), tailwindcss(), htmlMeta()],
  // Netlify was already publishing the old CRA "build" folder
  build: { outDir: 'build' },
})

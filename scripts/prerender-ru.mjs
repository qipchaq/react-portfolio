// Writes build/ru/index.html: the same app shell with Russian <title>, description
// and Open Graph tags, so link previews and crawlers see Russian without running JS.
import { mkdir, readFile, writeFile } from 'node:fs/promises'

const meta = JSON.parse(
  await readFile(new URL('../src/content/meta.json', import.meta.url), 'utf8')
)
const html = await readFile(
  new URL('../build/index.html', import.meta.url),
  'utf8'
)

const swap = (text, from, to) => {
  if (!text.includes(from))
    throw new Error(`prerender-ru: "${from}" not found in build/index.html`)
  return text.replaceAll(from, to)
}

let ru = html
ru = swap(ru, '<html lang="en">', '<html lang="ru">')
ru = swap(ru, meta.en.title, meta.ru.title)
ru = swap(ru, meta.en.description, meta.ru.description)
ru = swap(ru, 'content="en_US"', 'content="ru_RU"')
ru = swap(
  ru,
  `rel="canonical" href="${meta.siteUrl}/"`,
  `rel="canonical" href="${meta.siteUrl}/ru/"`
)
ru = swap(
  ru,
  `property="og:url" content="${meta.siteUrl}/"`,
  `property="og:url" content="${meta.siteUrl}/ru/"`
)

await mkdir(new URL('../build/ru/', import.meta.url), { recursive: true })
await writeFile(new URL('../build/ru/index.html', import.meta.url), ru)
console.log('prerender-ru: wrote build/ru/index.html')

# Portfolio — Adil Nurkaliyev

Personal portfolio site in English and Russian: a fixed introduction on the left, scrolling sections on the right.
Layout inspired by [brittanychiang.com](https://brittanychiang.com); colours, content and extras are my own.

**Stack:** React 19, TypeScript, Vite, Tailwind CSS v4. No UI or i18n libraries.

## Run it

Needs Node 20.19+ or 22.12+ (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check, build into ./build, generate /ru/index.html
npm run preview    # serve the production build on http://localhost:4173
```

## Editing the content

All text lives in `src/content/`:

| File | What it holds |
| --- | --- |
| `en.ts`, `ru.ts` | every visible string, experience, projects, skills (both files must match the `Content` type in `types.ts`, so TypeScript flags anything missing from one language) |
| `meta.json` | page title and description per language, and the site URL used for canonical and hreflang links |
| `index.ts` | email, GitHub and LinkedIn links |

`**double asterisks**` inside a paragraph render as bold. Project screenshots go in `src/assets/projects/` and are referenced by file name (without extension) from the `image` field.

## Languages and URLs

- `/` is English, `/ru/` is Russian.
- On the first visit to `/` the language follows the browser (Russian, Kazakh, Belarusian and Ukrainian browsers get Russian). A choice made with the EN/RU switch is remembered and wins over the browser language.
- `npm run build` also writes `build/ru/index.html` with Russian `<title>`, description and Open Graph tags, so link previews are Russian without running JavaScript.

## Theme

Dark and light themes follow the system setting until the visitor picks one. Colour tokens are CSS variables at the top of `src/index.css`.

## Deploy (Netlify)

`netlify.toml` sets the build command, the `build` publish folder and Node 22. `public/_redirects` sends unknown paths to the app; `/ru/` is served from its own prebuilt file.

## Layout

```
src/
  content/       texts and types (en, ru, meta)
  components/    Header, Nav, Controls, sections/…
  i18n.tsx       language context: URL, storage, <head> tags
  theme.tsx      theme context
  hooks.ts       active section, in-view, count-up
scripts/
  prerender-ru.mjs
```

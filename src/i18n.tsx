import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { content, type Content, type Lang } from './content'
import meta from './content/meta.json'

const STORAGE_KEY = 'lang'
const PATHS: Record<Lang, string> = { en: '/', ru: '/ru/' }

const readStored = (): Lang | null => {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'en' || value === 'ru' ? value : null
  } catch {
    return null
  }
}

// First browser language we have a translation for (Kazakh, Belarusian and
// Ukrainian readers get Russian, the only other language on the site)
const detectBrowserLang = (): Lang => {
  for (const tag of navigator.languages ?? [navigator.language]) {
    const code = tag.slice(0, 2).toLowerCase()
    if (code === 'en') return 'en'
    if (['ru', 'kk', 'be', 'uk'].includes(code)) return 'ru'
  }
  return 'en'
}

const saveLang = (lang: Lang) => {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // private mode: the URL still carries the choice
  }
}

const isRussianPath = () => location.pathname.replace(/\/+$/, '') === '/ru'

// On first load `/ru/` is Russian, `/` follows the saved or browser language,
// and any other address is English
const initialLang = (): Lang => {
  if (isRussianPath()) return 'ru'
  if (location.pathname.replace(/\/+$/, '') === '')
    return readStored() ?? detectBrowserLang()
  return 'en'
}

const setHeadAttr = (selector: string, attr: string, value: string) => {
  document.head.querySelector(selector)?.setAttribute(attr, value)
}

interface LangContextValue {
  lang: Lang
  c: Content
  setLang: (lang: Lang) => void
}

const LangContext = createContext<LangContextValue | null>(null)

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    // Back/forward inside the site: the address alone decides, so `/` means English
    const onPopState = () => {
      const next: Lang = isRussianPath() ? 'ru' : 'en'
      saveLang(next)
      setLangState(next)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // Keep the URL, <html lang> and the SEO tags in step with the language
  useEffect(() => {
    const { title, description } = content[lang].meta
    const url = `${meta.siteUrl}${PATHS[lang]}`
    document.documentElement.lang = lang
    document.title = title
    setHeadAttr('meta[name="description"]', 'content', description)
    setHeadAttr('meta[property="og:title"]', 'content', title)
    setHeadAttr('meta[property="og:description"]', 'content', description)
    setHeadAttr(
      'meta[property="og:locale"]',
      'content',
      lang === 'ru' ? 'ru_RU' : 'en_US'
    )
    setHeadAttr('meta[property="og:url"]', 'content', url)
    setHeadAttr('link[rel="canonical"]', 'href', url)
    if (lang === 'ru' && !location.pathname.startsWith(PATHS.ru)) {
      history.replaceState(null, '', PATHS.ru + location.hash)
    }
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    saveLang(next)
    history.pushState(null, '', PATHS[next] + location.hash)
    setLangState(next)
  }, [])

  const value = useMemo(
    () => ({ lang, c: content[lang], setLang }),
    [lang, setLang]
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = (): LangContextValue => {
  const value = useContext(LangContext)
  if (!value) throw new Error('useLang must be used inside <LangProvider>')
  return value
}

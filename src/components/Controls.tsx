import { useLang } from '../i18n'
import { useTheme } from '../theme'
import type { Lang } from '../content'
import { MoonIcon, SunIcon } from './Icons'

const LANGS: { code: Lang; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ru', label: 'RU', name: 'Русский' },
]

const Controls = () => {
  const { lang, setLang, c } = useLang()
  const { theme, toggle } = useTheme()

  return (
    <div className="flex items-center gap-3">
      <div
        role="group"
        aria-label={c.ui.languageLabel}
        className="inline-flex rounded-full border border-line p-0.5"
      >
        {LANGS.map(({ code, label, name }) => (
          <button
            key={code}
            type="button"
            lang={code}
            aria-label={`${label} — ${name}`}
            aria-pressed={lang === code}
            onClick={() => setLang(code)}
            className={`rounded-full px-3 py-1 font-mono text-xs font-semibold transition-colors ${
              lang === code
                ? 'bg-accent text-on-accent'
                : 'text-dim hover:text-fg'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={toggle}
        aria-label={theme === 'dark' ? c.ui.themeToLight : c.ui.themeToDark}
        className="grid h-8 w-8 place-items-center rounded-full border border-line text-dim transition-colors hover:text-fg"
      >
        {theme === 'dark' ? (
          <SunIcon className="h-4 w-4" />
        ) : (
          <MoonIcon className="h-4 w-4" />
        )}
      </button>
    </div>
  )
}

export default Controls

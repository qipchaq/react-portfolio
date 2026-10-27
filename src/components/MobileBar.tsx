import { useLang } from '../i18n'
import Controls from './Controls'

// Small screens have no fixed sidebar, so the language and theme controls live here
const MobileBar = () => {
  const { c } = useLang()
  const initials = c.person.name
    .split(' ')
    .map((word) => word[0])
    .join('')

  return (
    <div className="fixed inset-x-0 top-0 z-30 flex h-14 items-center justify-between border-b border-line bg-bg/80 px-6 backdrop-blur md:px-12 lg:hidden">
      <a
        href="#about"
        aria-label={`${initials} — ${c.person.name}`}
        className="font-mono text-sm font-bold text-fg after:text-accent after:content-['.']"
      >
        {initials}
      </a>
      <Controls />
    </div>
  )
}

export default MobileBar

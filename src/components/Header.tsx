import { useLang } from '../i18n'
import type { SectionId } from '../content'
import Avatar from './Avatar'
import Nav from './Nav'
import Socials from './Socials'
import Controls from './Controls'
import Orbit from './Orbit'

const Header = ({ active }: { active: SectionId }) => {
  const { c } = useLang()

  return (
    <header className="relative isolate lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Avatar />
        <p className="rise font-mono text-xs uppercase tracking-widest text-dim">
          {c.person.location}
        </p>
        <h1
          className="rise mt-4 text-4xl font-bold tracking-tight text-fg sm:text-5xl"
          style={{ animationDelay: '60ms' }}
        >
          <a href="#about">{c.person.name}</a>
        </h1>
        <p
          className="rise mt-3 text-lg font-medium text-fg sm:text-xl"
          style={{ animationDelay: '120ms' }}
        >
          {c.person.role}
        </p>
        <p
          className="rise mt-4 max-w-xs leading-normal"
          style={{ animationDelay: '180ms' }}
        >
          {c.person.tagline}
        </p>
        <Nav active={active} />
      </div>
      <div className="mt-8 flex items-center justify-between gap-4 lg:mt-0">
        <Socials />
        <div className="hidden lg:block">
          <Controls />
        </div>
      </div>
      <Orbit />
    </header>
  )
}

export default Header

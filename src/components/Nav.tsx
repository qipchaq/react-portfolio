import { useLang } from '../i18n'
import { SECTION_IDS } from '../sections'
import type { SectionId } from '../content'

const Nav = ({ active }: { active: SectionId }) => {
  const { c } = useLang()

  return (
    <nav aria-label={c.ui.navLabel} className="mt-14 hidden lg:block">
      <ul>
        {SECTION_IDS.map((id, i) => {
          const on = id === active
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={on ? 'location' : undefined}
                className="group flex items-center py-2.5"
              >
                <span
                  className={`w-6 font-mono text-xs transition-colors ${
                    on ? 'text-accent-fg' : 'text-dim'
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`h-px transition-all duration-300 motion-reduce:transition-none ${
                    on
                      ? 'w-16 bg-accent'
                      : 'w-8 bg-dim group-hover:w-16 group-hover:bg-fg'
                  }`}
                />
                <span
                  className={`ml-4 text-xs font-bold uppercase tracking-widest transition-colors ${
                    on ? 'text-fg' : 'text-dim group-hover:text-fg'
                  }`}
                >
                  {c.ui.nav[id]}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav

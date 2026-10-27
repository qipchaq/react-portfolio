import { useLang } from '../../i18n'
import type { ExperienceItem } from '../../content'
import { ArrowIcon } from '../Icons'
import SectionHeading from '../SectionHeading'
import Tags from '../Tags'

const Entry = ({ item }: { item: ExperienceItem }) => {
  const { c } = useLang()

  return (
    <li className="group relative mb-12 last:mb-0">
      <div
        aria-hidden="true"
        className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl border border-transparent transition motion-reduce:transition-none lg:block lg:group-hover:border-line lg:group-hover:bg-elev/70"
      />
      <div className="relative z-10 grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
        <p className="mt-1 font-mono text-xs uppercase text-dim">
          {item.period}
        </p>
        <div>
          <h4 className="font-medium leading-snug text-fg">
            {item.title} <span className="text-dim">·</span>{' '}
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-baseline gap-1 transition-colors hover:text-accent-fg focus-visible:text-accent-fg"
              >
                {item.company}
                <ArrowIcon className="h-3.5 w-3.5 shrink-0 translate-y-0.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-1 motion-reduce:transition-none" />
                <span className="sr-only">{c.ui.openLink}</span>
              </a>
            ) : (
              item.company
            )}
          </h4>
          <p className="mt-2 text-sm leading-normal">{item.summary}</p>
          {item.highlights && (
            <ul className="mt-3 space-y-2 text-sm leading-normal">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-3 shrink-0 bg-accent"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
          {item.tags && <Tags items={item.tags} className="mt-4" />}
        </div>
      </div>
    </li>
  )
}

const Group = ({
  label,
  items,
}: {
  label: string
  items: ExperienceItem[]
}) => (
  <div className="mt-12 first:mt-0">
    <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-dim">
      {label}
    </h3>
    <ol>
      {items.map((item) => (
        <Entry key={item.period} item={item} />
      ))}
    </ol>
  </div>
)

const Experience = () => {
  const { c } = useLang()
  const { software, aerospace } = c.experience

  return (
    <section
      id="experience"
      aria-label={c.experience.heading}
      className="mb-20 scroll-mt-14 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading index={2}>{c.experience.heading}</SectionHeading>
      <Group label={software.label} items={software.items} />
      <Group label={aerospace.label} items={aerospace.items} />
    </section>
  )
}

export default Experience

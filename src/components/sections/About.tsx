import { useLang } from '../../i18n'
import { useCountUp, useInView } from '../../hooks'
import type { Metric } from '../../content'
import RichText from '../RichText'
import SectionHeading from '../SectionHeading'

const MetricCard = ({ metric }: { metric: Metric }) => {
  const [ref, seen] = useInView<HTMLDivElement>()
  const shown = useCountUp(metric.value, seen)

  return (
    <div ref={ref} className="border-t border-line pt-4">
      <p className="font-mono text-3xl font-semibold tabular-nums text-accent-fg">
        <span aria-hidden="true">
          {shown}
          {metric.suffix}
        </span>
        <span className="sr-only">
          {metric.value}
          {metric.suffix}
        </span>
      </p>
      <p className="mt-1 text-xs leading-snug text-dim">{metric.label}</p>
    </div>
  )
}

const About = () => {
  const { c } = useLang()

  return (
    <section
      id="about"
      aria-label={c.about.heading}
      className="mb-20 scroll-mt-14 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading index={1}>{c.about.heading}</SectionHeading>
      <div className="space-y-4">
        {c.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
        {c.about.metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
    </section>
  )
}

export default About

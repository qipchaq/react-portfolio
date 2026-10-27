import { useLang } from '../../i18n'
import type { ProjectItem } from '../../content'
import { ArrowIcon, GitHubIcon } from '../Icons'
import SectionHeading from '../SectionHeading'
import Tags from '../Tags'

const images = import.meta.glob<string>('../../assets/projects/*.webp', {
  eager: true,
  import: 'default',
})

const Project = ({ project }: { project: ProjectItem }) => {
  const { c } = useLang()

  return (
    <li className="group relative mb-12 last:mb-0">
      <div
        aria-hidden="true"
        className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl border border-transparent transition motion-reduce:transition-none lg:block lg:group-hover:border-line lg:group-hover:bg-elev/70"
      />
      <div className="relative z-10 grid gap-4 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
        <img
          src={images[`../../assets/projects/${project.image}.webp`]}
          alt=""
          width={720}
          height={523}
          loading="lazy"
          decoding="async"
          className="aspect-video w-full rounded-md sm:aspect-[11/8] border border-line object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none sm:translate-y-1"
        />
        <div>
          <h3 className="font-medium leading-snug text-fg">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title}, ${c.projects.live} ${c.ui.openLink}`}
              className="inline-flex items-baseline gap-1 transition-colors before:absolute before:inset-0 before:z-10 before:content-[''] group-hover:text-accent-fg focus-visible:text-accent-fg"
            >
              {project.title}
              <ArrowIcon className="h-3.5 w-3.5 shrink-0 translate-y-0.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-1 motion-reduce:transition-none" />
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal">{project.description}</p>
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title}, ${c.projects.code} ${c.ui.openLink}`}
              className="relative z-20 mt-3 inline-flex items-center gap-2 text-sm text-dim transition-colors hover:text-fg"
            >
              <GitHubIcon className="h-4 w-4" />
              {c.projects.code}
            </a>
          )}
          <Tags items={project.tags} className="mt-4" />
        </div>
      </div>
    </li>
  )
}

const Projects = () => {
  const { c } = useLang()

  return (
    <section
      id="projects"
      aria-label={c.projects.heading}
      className="mb-20 scroll-mt-14 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading index={3}>{c.projects.heading}</SectionHeading>
      <p className="mb-10 text-sm leading-normal">{c.projects.intro}</p>
      <ul>
        {c.projects.items.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default Projects

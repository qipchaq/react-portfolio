import { useLang } from '../../i18n'
import SectionHeading from '../SectionHeading'
import Tags from '../Tags'

const SubHeading = ({ children }: { children: string }) => (
  <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-dim">
    {children}
  </h3>
)

const Skills = () => {
  const { c } = useLang()
  const { skills } = c

  return (
    <section
      id="skills"
      aria-label={skills.heading}
      className="mb-20 scroll-mt-14 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading index={4}>{skills.heading}</SectionHeading>
      <div className="space-y-8">
        {skills.groups.map((group) => (
          <div key={group.title}>
            <SubHeading>{group.title}</SubHeading>
            <Tags items={group.items} />
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <div>
          <SubHeading>{skills.educationHeading}</SubHeading>
          <ul className="space-y-5 text-sm leading-normal">
            {skills.education.map((item) => (
              <li key={item.school}>
                <p className="font-mono text-xs text-dim">{item.period}</p>
                <p className="mt-1 font-medium text-fg">
                  {item.degree} · {item.field}
                </p>
                <p>{item.school}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-10">
          <div>
            <SubHeading>{skills.languagesHeading}</SubHeading>
            <ul className="space-y-2 text-sm">
              {skills.languages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span className="font-medium text-fg">{language.name}</span>
                  <span className="text-dim">{language.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubHeading>{skills.coursesHeading}</SubHeading>
            <ul className="space-y-2 text-sm">
              {skills.courses.map((course) => (
                <li key={course.title}>
                  <span className="font-mono text-xs text-dim">
                    {course.period}
                  </span>
                  <p>
                    <span className="font-medium text-fg">{course.title}</span>{' '}
                    · {course.provider}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

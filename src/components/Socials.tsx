import { useLang } from '../i18n'
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../content'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

const Socials = () => {
  const { c } = useLang()
  const items = [
    {
      href: GITHUB_URL,
      label: c.ui.social.github,
      Icon: GitHubIcon,
      external: true,
    },
    {
      href: LINKEDIN_URL,
      label: c.ui.social.linkedin,
      Icon: LinkedInIcon,
      external: true,
    },
    {
      href: `mailto:${EMAIL}`,
      label: c.ui.social.email,
      Icon: MailIcon,
      external: false,
    },
  ]

  return (
    <ul className="flex items-center gap-5">
      {items.map(({ href, label, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={external ? `${label} ${c.ui.openLink}` : label}
            className="block text-dim transition-colors hover:text-fg"
            {...(external
              ? { target: '_blank', rel: 'noreferrer noopener' }
              : {})}
          >
            <Icon className="h-6 w-6" />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Socials

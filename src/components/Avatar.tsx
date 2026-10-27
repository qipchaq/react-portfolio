import avatar192 from '../assets/avatar-192.webp'
import avatar384 from '../assets/avatar-384.webp'
import { useLang } from '../i18n'

// Top of the page, so it loads eagerly with explicit size to avoid layout shift
const Avatar = () => {
  const { c } = useLang()

  return (
    <img
      src={avatar384}
      srcSet={`${avatar192} 192w, ${avatar384} 384w`}
      sizes="(min-width: 640px) 96px, 80px"
      width={96}
      height={96}
      alt={c.person.photoAlt}
      fetchPriority="high"
      decoding="async"
      className="rise mb-7 ml-1.5 mt-1.5 size-20 rounded-full object-cover ring-2 ring-accent/70 ring-offset-4 ring-offset-bg transition-shadow duration-300 hover:shadow-[0_0_32px_var(--accent-soft)] sm:size-24"
    />
  )
}

export default Avatar

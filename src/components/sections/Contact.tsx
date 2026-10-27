import { useEffect, useState } from 'react'
import { useLang } from '../../i18n'
import { EMAIL } from '../../content'
import { CheckIcon, CopyIcon, MailIcon } from '../Icons'
import SectionHeading from '../SectionHeading'

const Contact = () => {
  const { c } = useLang()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
    } catch {
      // clipboard blocked: the address is still shown and linked above
    }
  }

  return (
    <section
      id="contact"
      aria-label={c.contact.heading}
      className="mb-24 scroll-mt-14 md:mb-28 lg:mb-32 lg:scroll-mt-24"
    >
      <SectionHeading index={5}>{c.contact.heading}</SectionHeading>
      <p className="max-w-lg">{c.contact.text}</p>
      <p className="mt-6 font-mono text-lg text-fg sm:text-xl">{EMAIL}</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition hover:brightness-110"
        >
          <MailIcon className="h-4 w-4" />
          {c.contact.cta}
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent"
        >
          {copied ? (
            <CheckIcon className="h-4 w-4 text-accent-fg" />
          ) : (
            <CopyIcon className="h-4 w-4" />
          )}
          {copied ? c.contact.copied : c.contact.copy}
        </button>
        <span role="status" className="sr-only">
          {copied ? c.contact.copied : ''}
        </span>
      </div>
    </section>
  )
}

export default Contact

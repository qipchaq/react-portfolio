import { useLang } from '../i18n'

const CREDIT_DOMAIN = 'brittanychiang.com'

const Footer = () => {
  const { c } = useLang()
  const [before, after = ''] = c.footer.inspired.split(CREDIT_DOMAIN)

  return (
    <footer className="max-w-md pb-4 text-sm leading-normal text-dim">
      <p>{c.footer.built}</p>
      <p className="mt-2">
        {before}
        <a
          href={`https://${CREDIT_DOMAIN}`}
          target="_blank"
          rel="noreferrer noopener"
          className="link text-muted hover:text-fg"
        >
          {CREDIT_DOMAIN}
        </a>
        {after}
      </p>
    </footer>
  )
}

export default Footer

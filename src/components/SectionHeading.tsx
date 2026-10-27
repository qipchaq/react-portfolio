interface Props {
  index: number
  children: string
}

// A sticky bar on small screens, a quiet numbered label with a hairline on desktop
const SectionHeading = ({ index, children }: Props) => (
  <h2 className="sticky top-14 z-10 -mx-6 mb-6 flex items-center gap-4 bg-bg/80 px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest text-fg backdrop-blur md:-mx-12 md:px-12 lg:static lg:mx-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
    <span className="text-accent-fg">0{index}</span>
    <span>{children}</span>
    <span aria-hidden="true" className="h-px flex-1 bg-line" />
  </h2>
)

export default SectionHeading

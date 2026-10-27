// Faint orbit rings behind the header: a nod to the aerospace career
const Orbit = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 400 400"
    className="pointer-events-none absolute bottom-40 right-0 -z-10 hidden h-72 w-72 text-dim opacity-40 xl:block"
  >
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="200" cy="200" r="60" />
      <circle cx="200" cy="200" r="110" strokeDasharray="2 6" />
      <circle cx="200" cy="200" r="170" />
    </g>
    <circle cx="200" cy="200" r="7" fill="currentColor" opacity="0.6" />
    <g className="orbit-spin" style={{ transformOrigin: '200px 200px' }}>
      <circle cx="370" cy="200" r="5" className="fill-accent" />
    </g>
  </svg>
)

export default Orbit

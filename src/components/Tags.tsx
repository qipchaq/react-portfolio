const Tags = ({
  items,
  className = '',
}: {
  items: string[]
  className?: string
}) => (
  <ul className={`flex flex-wrap gap-2 ${className}`}>
    {items.map((tag) => (
      <li
        key={tag}
        className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-medium leading-5 text-accent-fg"
      >
        {tag}
      </li>
    ))}
  </ul>
)

export default Tags

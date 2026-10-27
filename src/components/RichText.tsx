// Renders **bold** segments from the content files as <strong>
const RichText = ({ text }: { text: string }) => (
  <>
    {text.split('**').map((part, i) =>
      i % 2 ? (
        <strong key={i} className="font-medium text-fg">
          {part}
        </strong>
      ) : (
        part
      )
    )}
  </>
)

export default RichText

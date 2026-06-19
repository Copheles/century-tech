interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}

function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={`section-title${centered ? ' centered' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionTitle

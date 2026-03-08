type SectionTitleProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold text-white">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-slate-300">{description}</p>
    </div>
  )
}

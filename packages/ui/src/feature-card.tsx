type FeatureCardProps = {
  title: string
  description: string
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="glass-card rounded-3xl p-6">
      <h3 className="text-2xl font-medium text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{description}</p>
    </article>
  )
}

import type { ReactNode } from 'react'

export function Lead({ children }: { children: ReactNode }) {
  return <p className="text-lg leading-8 text-slate-100">{children}</p>
}

export function Body({ children }: { children: ReactNode }) {
  return <p className="leading-7 text-slate-300">{children}</p>
}

export function Art({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-amber-300/30 bg-amber-300/10 px-2 py-0.5 font-mono text-[0.78em] text-amber-200">
      {children}
    </span>
  )
}

type BulletItem = { label?: ReactNode; text: ReactNode }

export function Bullets({ items }: { items: BulletItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 leading-7 text-slate-200">
          <span
            aria-hidden
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300/80"
          />
          <span>
            {item.label ? (
              <strong className="font-semibold text-white">{item.label}</strong>
            ) : null}
            {item.label ? <span className="text-slate-300"> – </span> : null}
            <span className="text-slate-200">{item.text}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

type StepItem = { title: ReactNode; description: ReactNode }

export function Steps({ items }: { items: StepItem[] }) {
  return (
    <ol className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 font-mono text-sm text-amber-200">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="space-y-1">
            <p className="font-semibold text-white">{item.title}</p>
            <p className="text-sm leading-6 text-slate-300">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function Columns({ children }: { children: ReactNode }) {
  return <div className="grid gap-5 md:grid-cols-2">{children}</div>
}

type ColumnProps = {
  title: ReactNode
  tone?: 'neutral' | 'accent' | 'warn'
  children: ReactNode
}

export function Column({ title, tone = 'neutral', children }: ColumnProps) {
  const border =
    tone === 'accent'
      ? 'border-amber-300/30'
      : tone === 'warn'
        ? 'border-rose-300/25'
        : 'border-white/10'
  const titleColor =
    tone === 'accent'
      ? 'text-amber-200'
      : tone === 'warn'
        ? 'text-rose-200'
        : 'text-white'

  return (
    <div className={`rounded-2xl border ${border} bg-white/[0.025] p-5`}>
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${titleColor}`}>
        {title}
      </p>
      <div className="text-sm leading-7 text-slate-200">{children}</div>
    </div>
  )
}

type CompareRow = {
  label: ReactNode
  formal: ReactNode
  merit: ReactNode
}

export function CompareTable({ rows }: { rows: CompareRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-left text-sm">
        <thead className="bg-white/[0.04] text-slate-200">
          <tr>
            <th className="px-4 py-3 font-semibold uppercase tracking-[0.18em] text-slate-400">
              Kryterium
            </th>
            <th className="px-4 py-3 font-semibold text-white">
              Formalna kontrola <span className="text-slate-400">aktu</span> oskarżenia
              <span className="ml-2 inline-flex items-center rounded border border-white/15 px-1.5 py-0.5 font-mono text-[0.7rem] text-slate-300">
                337 KPK
              </span>
            </th>
            <th className="px-4 py-3 font-semibold text-white">
              Merytoryczna kontrola oskarżenia
              <span className="ml-2 inline-flex items-center rounded border border-white/15 px-1.5 py-0.5 font-mono text-[0.7rem] text-slate-300">
                339 KPK
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'}
            >
              <td className="border-t border-white/5 px-4 py-3 align-top font-semibold text-amber-200/90">
                {row.label}
              </td>
              <td className="border-t border-white/5 px-4 py-3 align-top text-slate-200">
                {row.formal}
              </td>
              <td className="border-t border-white/5 px-4 py-3 align-top text-slate-200">
                {row.merit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Note({
  title,
  children,
  tone = 'accent'
}: {
  title?: ReactNode
  children: ReactNode
  tone?: 'accent' | 'warn'
}) {
  const palette =
    tone === 'warn'
      ? 'border-rose-300/25 bg-rose-300/[0.06] text-rose-100'
      : 'border-amber-300/25 bg-amber-300/[0.06] text-amber-100'

  return (
    <aside className={`rounded-2xl border ${palette} p-4 text-sm leading-7`}>
      {title ? (
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] opacity-90">
          {title}
        </p>
      ) : null}
      <div>{children}</div>
    </aside>
  )
}

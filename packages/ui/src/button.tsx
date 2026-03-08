import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const className =
    variant === 'primary'
      ? 'inline-flex rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5'
      : 'inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30'

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

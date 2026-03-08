import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import { navigation } from '@/lib/navigation'

export const metadata: Metadata = {
  title: 'Lexmentor',
  description: 'Portal edukacyjny dla studentów prawa w Polsce.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body>
        <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="container-shell flex items-center justify-between py-4">
            <Link href="/" className="text-xl font-semibold tracking-[0.2em] uppercase">
              Lex<span className="gold-text">mentor</span>
            </Link>
            <nav className="flex gap-5 text-sm text-slate-200">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/10 py-8 text-sm text-slate-400">
          <div className="container-shell flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Lexmentor. Starter repo dla portalu edukacyjnego.</p>
            <p>Built with Next.js, React i TypeScript.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

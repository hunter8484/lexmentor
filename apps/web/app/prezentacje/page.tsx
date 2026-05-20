import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prezentacje · Lexmentor',
  description: 'Prezentacje edukacyjne do nauki prawa – w formacie slajdów do powtórek.'
}

const presentations = [
  {
    href: '/prezentacje/kontrola-aktu-oskarzenia',
    eyebrow: 'KPK · Ćwiczenia',
    title: 'Zakończenie postępowania przygotowawczego i kontrola aktu oskarżenia',
    description:
      'Sposoby zakończenia postępowania przygotowawczego, formalna i merytoryczna kontrola aktu oskarżenia, braki opisu czynu, wyrok nakazowy i sprzeciw, kazus.',
    meta: '15 slajdów · art. 17, 22, 313, 314, 332, 335, 337, 339, 344, 506 KPK'
  }
]

export default function PrezentacjePage() {
  return (
    <section className="container-shell py-16">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Powtórki</p>
      <h1 className="mt-3 text-4xl font-semibold text-white">Prezentacje</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Materiały do nauki w formacie slajdów. Sterowanie strzałkami i spacją.
        Każda prezentacja powstaje z notatek / transkrypcji ćwiczeń i jest
        ukierunkowana na egzamin oraz kolokwium.
      </p>

      <div className="mt-10 grid gap-5">
        {presentations.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group glass-card flex flex-col gap-4 rounded-3xl p-7 transition hover:border-amber-300/30 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/80">
                {item.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-slate-300">{item.description}</p>
              <p className="mt-3 font-mono text-xs text-slate-500">{item.meta}</p>
            </div>
            <span
              aria-hidden
              className="self-end text-sm font-medium text-amber-200 transition group-hover:translate-x-1 sm:self-auto"
            >
              Otwórz →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

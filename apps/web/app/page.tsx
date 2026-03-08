import Link from 'next/link'
import { Button, FeatureCard, SectionTitle } from '@lexmentor/ui'
import { features, metrics } from '@/lib/navigation'

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="container-shell grid gap-10 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-slate-400">
            Portal nauki prawa
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Lexmentor – nowoczesna platforma dla studentów prawa.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Uporządkuj naukę, rozwiązuj kazusy, monitoruj postępy i buduj własną ścieżkę przygotowania do egzaminów.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/courses">Przeglądaj kursy</Button>
            <Button href="/cases" variant="secondary">
              Zobacz bazę kazusów
            </Button>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 shadow-2xl shadow-black/20">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">MVP dashboard</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {metrics.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-amber-400/15 bg-amber-300/5 p-5">
            <p className="text-sm text-slate-300">
              Następny krok: dodać autoryzację, bazę danych i personalizację ścieżek nauki.
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-10">
        <SectionTitle
          eyebrow="Dlaczego Lexmentor"
          title="Repo gotowe pod dalszy rozwój"
          description="Masz już układ strony, komponenty bazowe i sensowną architekturę na start projektu."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </section>

      <section className="container-shell py-10">
        <div className="glass-card rounded-3xl p-8 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Dla Codex</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Repo przygotowane do dalszego developmentu</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Po wrzuceniu na GitHuba możesz zlecać kolejne zadania: logowanie, bazę testów, panel admina lub AI do streszczeń.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="mt-6 inline-flex rounded-full border border-amber-300/25 px-5 py-3 text-sm font-medium text-white transition hover:border-amber-300/45 md:mt-0"
          >
            Otwórz panel
          </Link>
        </div>
      </section>
    </div>
  )
}

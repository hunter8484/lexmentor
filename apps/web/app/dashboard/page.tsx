const stats = [
  { label: 'Ukończone moduły', value: '4 / 12' },
  { label: 'Rozwiązane kazusy', value: '27' },
  { label: 'Najbliższa powtórka', value: 'jutro' }
]

export default function DashboardPage() {
  return (
    <section className="container-shell py-16">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Panel użytkownika</p>
      <h1 className="mt-3 text-4xl font-semibold text-white">Twoje postępy</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        To jest szkic dashboardu. Docelowo możesz tu dodać postępy, plan nauki, wyniki testów i rekomendacje AI.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="glass-card rounded-2xl p-5">
            <p className="text-3xl font-semibold text-white">{item.value}</p>
            <p className="mt-2 text-sm text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-2xl font-medium text-white">Sugestia kolejnych funkcji</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
          <li>logowanie i role: student, prowadzący, admin,</li>
          <li>mechanizm powtórek w stylu spaced repetition,</li>
          <li>generator fiszek i pytań z notatek,</li>
          <li>harmonogram nauki pod konkretny egzamin.</li>
        </ul>
      </div>
    </section>
  )
}

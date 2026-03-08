const cases = [
  {
    title: 'Dziedziczenie ustawowe',
    category: 'Prawo spadkowe'
  },
  {
    title: 'Zgoda małżonka na czynność prawną',
    category: 'KRO'
  },
  {
    title: 'Skarga pauliańska',
    category: 'Zobowiązania'
  },
  {
    title: 'Urlop zdrowotny a skreślenie z listy studentów',
    category: 'Postępowanie administracyjne'
  }
]

export default function CasesPage() {
  return (
    <section className="container-shell py-16">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Baza kazusów</p>
      <h1 className="mt-3 text-4xl font-semibold text-white">Ćwiczenia egzaminacyjne</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Miejsce na rozbudowę modułu kazusów, wzorcowych odpowiedzi i schematów rozwiązywania.
      </p>

      <div className="mt-8 space-y-4">
        {cases.map((item) => (
          <article key={item.title} className="glass-card rounded-2xl p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-amber-200/80">{item.category}</p>
            <h2 className="mt-2 text-2xl font-medium text-white">{item.title}</h2>
            <p className="mt-3 text-sm text-slate-400">
              Tu możesz dodać stan faktyczny, podstawy prawne, odpowiedź modelową i pytania pomocnicze.
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

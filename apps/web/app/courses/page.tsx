const courses = [
  'Prawo cywilne',
  'Prawo rodzinne i opiekuńcze',
  'Prawo administracyjne',
  'Prawo Unii Europejskiej',
  'Postępowanie cywilne',
  'Prawo konstytucyjne'
]

export default function CoursesPage() {
  return (
    <section className="container-shell py-16">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Katalog kursów</p>
      <h1 className="mt-3 text-4xl font-semibold text-white">Przedmioty i moduły</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Ta sekcja jest gotowa pod rozbudowę o syllabus, materiały, testy i status ukończenia.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <article key={course} className="glass-card rounded-2xl p-5">
            <h2 className="text-xl font-medium text-white">{course}</h2>
            <p className="mt-3 text-sm text-slate-400">
              Placeholder modułu – tu możesz dodać tematy, notatki, pytania i materiały do powtórek.
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

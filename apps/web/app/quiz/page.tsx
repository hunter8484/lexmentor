'use client'

import { useEffect, useMemo, useState } from 'react'
import { QUESTION_BANK, type Question } from './question-bank'

const STORAGE_KEY = 'prawo-handlowe-ksh-quiz-progress-v1'

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}

function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function normalizeForSearch(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function StatCard({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-2xl font-bold text-slate-950">{value}</div>
      {hint ? <div className="mt-1 text-xs text-slate-500">{hint}</div> : null}
    </div>
  )
}

function loadSaved() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const saved = JSON.parse(raw)
      if (saved && typeof saved === 'object') return saved
    }
  } catch {
    /* ignore */
  }
  return null
}

export default function QuizPage() {
  const topics = useMemo(
    () => ['Wszystkie', ...Array.from(new Set(QUESTION_BANK.map((q) => q.topic))).sort()],
    []
  )
  const [topic, setTopic] = useState(() => loadSaved()?.topic || 'Wszystkie')
  const [status, setStatus] = useState(() => loadSaved()?.status || 'wszystkie')
  const [query, setQuery] = useState('')
  const [order, setOrder] = useState(
    () => loadSaved()?.order || QUESTION_BANK.map((q) => q.id)
  )
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>(
    () => loadSaved()?.answers || {}
  )
  const [showOnlyWrong, setShowOnlyWrong] = useState(
    () => Boolean(loadSaved()?.showOnlyWrong)
  )
  const [showKey, setShowKey] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ answers, order, topic, status, showOnlyWrong })
      )
    } catch {
      /* ignore */
    }
  }, [answers, order, topic, status, showOnlyWrong])

  const answeredIds = useMemo(() => Object.keys(answers).map(Number), [answers])
  const wrongIds = useMemo(
    () =>
      answeredIds.filter((id) => {
        const q = QUESTION_BANK.find((item) => item.id === id)
        return q && answers[id] !== q.answer
      }),
    [answeredIds, answers]
  )

  const filteredQuestions = useMemo(() => {
    const normalizedQuery = normalizeForSearch(query.trim())
    const list = QUESTION_BANK.filter((q: Question) => {
      const topicMatch = topic === 'Wszystkie' || q.topic === topic
      const statusMatch =
        status === 'wszystkie' || q.status === status
      const queryMatch =
        !normalizedQuery ||
        normalizeForSearch(
          `${q.question} ${q.topic} ${q.source} ${q.options.map((o) => o.text).join(' ')}`
        ).includes(normalizedQuery)
      const wrongMatch = !showOnlyWrong || wrongIds.includes(q.id)
      return topicMatch && statusMatch && queryMatch && wrongMatch
    })
    const rank = new Map<number, number>(order.map((id: number, position: number) => [id, position]))
    return list.sort((a, b) => (rank.get(a.id) ?? 9999) - (rank.get(b.id) ?? 9999))
  }, [topic, status, query, order, showOnlyWrong, wrongIds])

  const safeIndex = index >= filteredQuestions.length ? 0 : index
  const current = filteredQuestions[safeIndex] || null
  const selected = current ? answers[current.id] : undefined
  const hasAnswered = Boolean(selected)
  const isCorrect = current && selected === current.answer

  const filteredAnswered = filteredQuestions.filter((q) => answers[q.id])
  const filteredCorrect = filteredQuestions.filter((q) => answers[q.id] === q.answer)
  const filteredWrong = filteredQuestions.filter(
    (q) => answers[q.id] && answers[q.id] !== q.answer
  )
  const progress = filteredQuestions.length
    ? Math.round((filteredAnswered.length / filteredQuestions.length) * 100)
    : 0
  const score = filteredAnswered.length
    ? Math.round((filteredCorrect.length / filteredAnswered.length) * 100)
    : 0

  function chooseAnswer(letter: string) {
    if (!current) return
    setAnswers((prev) => ({ ...prev, [current.id]: letter }))
  }

  function goNext() {
    setIndex((prev) => Math.min(prev + 1, filteredQuestions.length - 1))
  }

  function goPrev() {
    setIndex((prev) => Math.max(prev - 1, 0))
  }

  function resetAll() {
    setAnswers({})
    setIndex(0)
    setShowOnlyWrong(false)
    setShowKey(false)
  }

  function resetCurrent() {
    if (!current) return
    setAnswers((prev) => {
      const next = { ...prev }
      delete next[current.id]
      return next
    })
  }

  function shuffleQuestions() {
    setOrder(shuffleArray(QUESTION_BANK.map((q) => q.id)))
    setIndex(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4 text-slate-950 md:p-8">
      <div className="mx-auto max-w-6xl">
        <header className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="bg-slate-950 px-6 py-6 text-white md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                  Prawo handlowe · KSH
                </div>
                <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
                  Quiz do nauki z testów
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
                  Jedno pytanie, jedna prawidłowa odpowiedź. Aplikacja zapamiętuje postęp w
                  przeglądarce i pozwala powtarzać wyłącznie błędy.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 text-sm text-slate-200">
                <div className="font-semibold text-white">Baza pytań</div>
                <div>{QUESTION_BANK.length} pytań z zestawów</div>
                <div>
                  {QUESTION_BANK.filter((q) => q.status === 'do weryfikacji').length} oznaczonych
                  jako &bdquo;do weryfikacji&rdquo;
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 p-4 md:grid-cols-4 md:p-6">
            <StatCard
              label="Postęp"
              value={`${progress}%`}
              hint={`${filteredAnswered.length} / ${filteredQuestions.length} pytań`}
            />
            <StatCard
              label="Wynik"
              value={`${score}%`}
              hint={`${filteredCorrect.length} poprawnych`}
            />
            <StatCard label="Błędy" value={filteredWrong.length} hint="w aktualnym filtrze" />
            <StatCard
              label="Tryb"
              value={showOnlyWrong ? 'Powtórka' : 'Nauka'}
              hint={
                status === 'do weryfikacji' ? 'pytania sporne' : 'standardowy test'
              }
            />
          </div>
        </header>

        <section className="mt-5 grid gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-12 md:p-5">
          <div className="md:col-span-4">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Dział
            </label>
            <select
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-slate-300 focus:ring-4"
              value={topic}
              onChange={(e) => { setTopic(e.target.value); setIndex(0) }}
            >
              {topics.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-3">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Pewność klucza
            </label>
            <select
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-slate-300 focus:ring-4"
              value={status}
              onChange={(e) => { setStatus(e.target.value); setIndex(0) }}
            >
              <option value="wszystkie">Wszystkie</option>
              <option value="pewne">Pewne</option>
              <option value="do weryfikacji">Do weryfikacji</option>
            </select>
          </div>
          <div className="md:col-span-5">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Szukaj
            </label>
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-slate-300 focus:ring-4"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setIndex(0) }}
              placeholder="np. komandytariusz, prokura, CEIDG..."
            />
          </div>
          <div className="flex flex-wrap gap-2 md:col-span-12">
            <button
              onClick={shuffleQuestions}
              className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Losuj kolejność
            </button>
            <button
              onClick={() => { setShowOnlyWrong((v) => !v); setIndex(0) }}
              className={cn(
                'rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm',
                showOnlyWrong
                  ? 'bg-rose-600 text-white hover:bg-rose-700'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              )}
            >
              {showOnlyWrong ? 'Pokaż wszystkie' : `Powtarzaj błędy (${wrongIds.length})`}
            </button>
            <button
              onClick={() => setShowKey((v) => !v)}
              className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-200"
            >
              {showKey ? 'Ukryj klucz' : 'Pokaż klucz'}
            </button>
            <button
              onClick={resetAll}
              className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
            >
              Reset postępu
            </button>
          </div>
        </section>

        <main className="mt-5 grid gap-5 lg:grid-cols-12">
          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-7 lg:col-span-8">
            {current ? (
              <>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-slate-500">
                    Pytanie {safeIndex + 1} z {filteredQuestions.length} · ID {current.id}
                  </div>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {current.topic}
                    </span>
                    <span
                      className={cn(
                        'rounded-full px-3 py-1 text-xs font-semibold',
                        current.status === 'pewne'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-800'
                      )}
                    >
                      {current.status}
                    </span>
                  </div>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-slate-950 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <h2 className="mt-6 text-2xl font-bold leading-snug text-slate-950">
                  {current.question}
                </h2>
                <div className="mt-2 text-xs text-slate-500">
                  Źródło: {current.source} · nr w zestawie: {current.originalNo}
                </div>

                <div className="mt-6 space-y-3">
                  {current.options.map((option) => {
                    const isChosen = selected === option.letter
                    const isRight = option.letter === current.answer
                    const shouldShowRight = hasAnswered || showKey
                    return (
                      <button
                        key={option.letter}
                        onClick={() => chooseAnswer(option.letter)}
                        className={cn(
                          'group flex w-full gap-4 rounded-2xl border p-4 text-left transition',
                          isChosen && !hasAnswered ? 'border-slate-950' : 'border-slate-200',
                          hasAnswered && isChosen && isRight
                            ? 'border-emerald-400 bg-emerald-50'
                            : '',
                          hasAnswered && isChosen && !isRight
                            ? 'border-rose-400 bg-rose-50'
                            : '',
                          shouldShowRight && isRight ? 'border-emerald-400 bg-emerald-50' : '',
                          !hasAnswered && !showKey
                            ? 'hover:border-slate-400 hover:bg-slate-50'
                            : ''
                        )}
                      >
                        <span
                          className={cn(
                            'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-sm font-bold',
                            shouldShowRight && isRight
                              ? 'border-emerald-500 bg-emerald-600 text-white'
                              : 'border-slate-300 bg-white text-slate-700',
                            hasAnswered && isChosen && !isRight
                              ? 'border-rose-500 bg-rose-600 text-white'
                              : ''
                          )}
                        >
                          {option.letter}
                        </span>
                        <span className="pt-1 text-sm leading-6 text-slate-800 md:text-base">
                          {option.text}
                        </span>
                      </button>
                    )
                  })}
                </div>

                {hasAnswered ? (
                  <div
                    className={cn(
                      'mt-6 rounded-2xl border p-4',
                      isCorrect
                        ? 'border-emerald-200 bg-emerald-50'
                        : 'border-rose-200 bg-rose-50'
                    )}
                  >
                    <div
                      className={cn(
                        'text-lg font-bold',
                        isCorrect ? 'text-emerald-800' : 'text-rose-800'
                      )}
                    >
                      {isCorrect
                        ? 'Dobrze. Dokładnie tę odpowiedź trzeba zaznaczyć.'
                        : `Nie. Prawidłowa odpowiedź to ${current.answer}.`}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{current.explanation}</p>
                    {current.observedMarked?.length ? (
                      <p className="mt-2 text-xs text-slate-500">
                        Zaznaczenia widoczne w materiale: {current.observedMarked.join(', ')}.
                      </p>
                    ) : null}
                  </div>
                ) : current.status === 'do weryfikacji' ? (
                  <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                    To pytanie oznaczyłem jako &bdquo;do weryfikacji&rdquo;, bo w materiale są
                    sprzeczne lub niepewne zaznaczenia. Aplikacja nadal wymusza jedną odpowiedź.
                  </div>
                ) : null}

                <div className="mt-7 flex flex-wrap justify-between gap-3">
                  <div className="flex gap-2">
                    <button
                      onClick={goPrev}
                      disabled={safeIndex === 0}
                      className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Wstecz
                    </button>
                    <button
                      onClick={goNext}
                      disabled={safeIndex >= filteredQuestions.length - 1}
                      className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Dalej
                    </button>
                  </div>
                  <button
                    onClick={resetCurrent}
                    className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    Wyczyść odpowiedź
                  </button>
                </div>
              </>
            ) : (
              <div className="rounded-2xl bg-slate-50 p-10 text-center">
                <h2 className="text-2xl font-bold">Brak pytań w tym filtrze</h2>
                <p className="mt-2 text-slate-600">
                  Zmień dział, status albo wyłącz powtórkę błędów.
                </p>
              </div>
            )}
          </section>

          <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-lg font-bold">Mapa pytań</h3>
              <span className="text-xs font-semibold text-slate-500">
                {filteredQuestions.length} pozycji
              </span>
            </div>
            <div className="mt-4 grid max-h-[620px] grid-cols-5 gap-2 overflow-auto pr-1 sm:grid-cols-8 lg:grid-cols-5">
              {filteredQuestions.map((q, pos) => {
                const answered = Boolean(answers[q.id])
                const correct = answers[q.id] === q.answer
                const wrong = answered && !correct
                return (
                  <button
                    key={q.id}
                    onClick={() => setIndex(pos)}
                    className={cn(
                      'h-10 rounded-xl text-sm font-bold ring-1 transition',
                      pos === safeIndex ? 'ring-2 ring-slate-950' : 'ring-slate-200',
                      !answered ? 'bg-white text-slate-700 hover:bg-slate-50' : '',
                      correct ? 'bg-emerald-100 text-emerald-800 ring-emerald-200' : '',
                      wrong ? 'bg-rose-100 text-rose-800 ring-rose-200' : '',
                      q.status === 'do weryfikacji' && !answered
                        ? 'bg-amber-50 text-amber-800 ring-amber-200'
                        : ''
                    )}
                    title={`${q.id} · ${q.topic}`}
                  >
                    {q.id}
                  </button>
                )
              })}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
              <div className="font-bold text-slate-950">Jak korzystać?</div>
              <p className="mt-1">
                Najpierw przejdź pytania &bdquo;pewne&rdquo;. Potem włącz &bdquo;Powtarzaj
                błędy&rdquo;. Na końcu przerób pytania &bdquo;do weryfikacji&rdquo;, bo część
                zaznaczeń w materiale wygląda na niespójną.
              </p>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}

'use client'

import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Slide = {
  id: string
  eyebrow?: string
  title: string
  content: ReactNode
}

type SlideDeckProps = {
  slides: Slide[]
  backHref?: string
}

export function SlideDeck({ slides, backHref = '/prezentacje' }: SlideDeckProps) {
  const [index, setIndex] = useState(0)
  const total = slides.length

  const goTo = useCallback(
    (next: number) => {
      if (next < 0 || next >= total) return
      setIndex(next)
    },
    [total]
  )

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])
  const goNext = useCallback(() => goTo(index + 1), [goTo, index])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault()
        goNext()
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault()
        goPrev()
      } else if (event.key === 'Home') {
        event.preventDefault()
        goTo(0)
      } else if (event.key === 'End') {
        event.preventDefault()
        goTo(total - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev, goTo, total])

  const slide = slides[index]
  const progress = useMemo(() => ((index + 1) / total) * 100, [index, total])

  return (
    <div className="container-shell flex min-h-[calc(100vh-8rem)] flex-col gap-6 py-10">
      <div className="flex items-center justify-between text-sm text-slate-400">
        <a
          href={backHref}
          className="inline-flex items-center gap-2 transition hover:text-white"
        >
          <span aria-hidden>←</span>
          Wróć do prezentacji
        </a>
        <span className="font-mono tracking-widest text-slate-500">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      <div
        className="h-1 w-full overflow-hidden rounded-full bg-white/5"
        aria-hidden
      >
        <div
          className="h-full rounded-full bg-amber-300/70 transition-[width] duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <article
        key={slide.id}
        className="glass-card flex-1 rounded-3xl p-8 sm:p-12"
      >
        {slide.eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300/80">
            {slide.eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
          {slide.title}
        </h2>
        <div className="mt-8 max-w-none text-slate-200">
          {slide.content}
        </div>
      </article>

      <nav
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        aria-label="Nawigacja po slajdach"
      >
        <div className="flex gap-3">
          <button
            type="button"
            onClick={goPrev}
            disabled={index === 0}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/35 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <span aria-hidden>←</span>
            Poprzedni
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={index === total - 1}
            className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
          >
            Następny
            <span aria-hidden>→</span>
          </button>
        </div>
        <ol className="flex flex-wrap gap-1.5">
          {slides.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                aria-label={`Slajd ${i + 1}: ${s.title}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index
                    ? 'scale-125 bg-amber-300'
                    : 'bg-white/15 hover:bg-white/35'
                }`}
              />
            </li>
          ))}
        </ol>
      </nav>

      <p className="text-center text-xs text-slate-500">
        Skróty: ← / → · spacja · Home / End
      </p>
    </div>
  )
}

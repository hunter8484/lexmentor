# Lexmentor – instrukcje dla agenta

## Cel projektu
Lexmentor to portal edukacyjny dla studentów prawa w Polsce. Repo ma służyć jako punkt startowy dla:
- katalogu kursów i zagadnień,
- bazy kazusów i pytań testowych,
- panelu użytkownika,
- rozwoju funkcji AI wspierających naukę.

## Zasady pracy
1. Zachowuj prostą, czytelną architekturę.
2. Najpierw dopracowuj UX i dostępność, dopiero potem dodawaj złożoność.
3. Nie usuwaj istniejących sekcji bez wyraźnego powodu.
4. Przy nowych funkcjach aktualizuj README.
5. Trzymaj nazewnictwo po polsku w treści biznesowej, a po angielsku w kodzie technicznym.

## Stack
- Frontend: Next.js App Router + TypeScript
- Stylowanie: Tailwind CSS
- Wspólne komponenty: `packages/ui`

## Standard zmian
- małe, czytelne commity,
- spójne nazwy komponentów,
- brak martwego kodu,
- unikaj nadmiarowych zależności.

## Priorytety roadmapy
1. Logowanie i role użytkowników.
2. Katalog przedmiotów i modułów.
3. Baza kazusów, testów i fiszek.
4. Panel postępów użytkownika.
5. Integracja AI do streszczeń i pytań kontrolnych.

## Cursor Cloud specific instructions

### Node.js version
The project requires Node.js >= 24.14.0 (`engines` in root `package.json`). The update script installs Node 24 LTS via `nvm` automatically.

### Running the app
- **Dev server:** `npm run dev` (runs `next dev --turbopack` in `apps/web` on port 3000)
- **Lint:** `npm run lint`
- **Type-check:** `npm run typecheck`
- **Build:** `npm run build`

All root scripts proxy into `apps/web` via npm workspaces. See `package.json` scripts for details.

### Monorepo structure
- `apps/web` — Next.js 16 App Router frontend (the only runnable service)
- `packages/ui` — shared component library (`@lexmentor/ui`), consumed as raw TypeScript source (no build step)

### Gotchas
- No lockfile is committed; `npm install` resolves from scratch each time.
- The README references `.env.example` and a GitHub Actions CI pipeline, but neither exists in the repo yet. No environment variables are needed to run the app.
- No backend, database, or external services are required — this is a frontend-only starter.

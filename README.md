# Lexmentor

Starter repozytorium dla portalu edukacyjnego **Lexmentor** – nowoczesnej platformy do nauki prawa w Polsce.

## Co zawiera repo
- aplikację webową w `apps/web`,
- współdzielone komponenty UI w `packages/ui`,
- podstawową strukturę pod rozwój kursów, kazusów i panelu użytkownika,
- sekcję `Prezentacje` (`/prezentacje`) – materiały do nauki w formacie slajdów (m.in. KPK – kontrola aktu oskarżenia),
- instrukcje dla Codex w `AGENTS.md`,
- prosty pipeline CI w GitHub Actions.

## Stack
- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **npm workspaces**

## Wymagania
- Node.js **24 LTS** lub nowszy
- npm **11** lub nowszy

## Start lokalny
```bash
npm install
cp .env.example .env.local
npm run dev
```

Aplikacja uruchomi się pod adresem `http://localhost:3000`.

## Komendy
```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Struktura projektu
```text
lexmentor/
├─ apps/
│  └─ web/
├─ packages/
│  └─ ui/
├─ .github/workflows/
├─ AGENTS.md
├─ README.md
└─ .env.example
```

## Najbliższe kroki
1. Dodać autoryzację i konta użytkowników.
2. Podpiąć bazę danych (np. PostgreSQL + Prisma).
3. Dodać CMS / panel admina do treści.
4. Zbudować moduł testów, kazusów i powtórek.
5. Dodać płatności i plany subskrypcyjne.

## Jak wrzucić na GitHub
```bash
git init
git add .
git commit -m "Initial Lexmentor starter"
git branch -M main
git remote add origin <TWOJ_URL_REPO>
git push -u origin main
```

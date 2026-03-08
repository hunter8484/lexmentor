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

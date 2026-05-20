import type { Metadata } from 'next'
import { SlideDeck, type Slide } from '../_components/slide-deck'
import {
  Art,
  Body,
  Bullets,
  Column,
  Columns,
  CompareTable,
  Lead,
  Note,
  Steps
} from '../_components/slide-elements'

export const metadata: Metadata = {
  title: 'Zakończenie postępowania przygotowawczego i kontrola aktu oskarżenia · Lexmentor',
  description:
    'Prezentacja edukacyjna do ćwiczeń z KPK – sposoby zakończenia postępowania przygotowawczego, formalna i merytoryczna kontrola aktu oskarżenia, wyrok nakazowy.'
}

const slides: Slide[] = [
  {
    id: 'intro',
    eyebrow: 'KPK · Ćwiczenia',
    title: 'Zakończenie postępowania przygotowawczego i kontrola aktu oskarżenia',
    content: (
      <div className="space-y-5">
        <Lead>
          Zestaw materiału do kolokwium i egzaminu opracowany na podstawie zajęć
          ćwiczeniowych z postępowania karnego.
        </Lead>
        <Body>
          Prezentacja obejmuje sposoby zakończenia postępowania przygotowawczego,
          dwie kontrole aktu oskarżenia, ich różnice, braki formalne i merytoryczne
          oraz wyrok nakazowy ze sprzeciwem. Na końcu rozwiązanie kazusu o brakach
          w akcie oskarżenia.
        </Body>
        <Bullets
          items={[
            { label: 'Zakres', text: 'art. 17, 22, 313, 314, 332, 335, 337, 339, 344, 506 KPK' },
            { label: 'Materiał prawa karnego', text: 'art. 66, 231, 280, 286 KK' },
            {
              label: 'Cel',
              text: 'umieć rozpoznać i nazwać brak, dobrać podstawę prawną i tryb usunięcia'
            }
          ]}
        />
      </div>
    )
  },
  {
    id: 'sposoby-zakonczenia',
    eyebrow: 'Slajd 1',
    title: 'Sposoby zakończenia postępowania przygotowawczego',
    content: (
      <div className="space-y-5">
        <Body>
          Postępowanie przygotowawcze może zakończyć się na kilka sposobów. Większość
          z nich kończy <strong>tylko przygotowawcze</strong>, a postępowanie karne
          trwa dalej, zmieniając jedynie etap.
        </Body>
        <Steps
          items={[
            {
              title: (
                <>
                  Wniesienie aktu oskarżenia do sądu <Art>art. 332 KPK</Art>
                </>
              ),
              description:
                'Kończy fazę przygotowawczą, otwiera fazę sądową. Postępowanie karne trwa.'
            },
            {
              title: (
                <>
                  Wniosek o skazanie bez rozprawy <Art>art. 335 § 1 KPK</Art> i{' '}
                  <Art>335 § 2</Art>
                </>
              ),
              description:
                'Surogat aktu oskarżenia. Przy § 2 idzie akt oskarżenia + wniosek, przy § 1 sam wniosek. Inicjuje fazę sądową.'
            },
            {
              title: (
                <>
                  Wniosek o warunkowe umorzenie postępowania <Art>art. 66 KK</Art>
                </>
              ),
              description:
                'Również surogat aktu oskarżenia. Sąd bada przesłanki i orzeka. Postępowanie karne trwa.'
            },
            {
              title: (
                <>
                  Umorzenie postępowania <Art>art. 17 KPK</Art>
                </>
              ),
              description:
                'Jedyna decyzja, która kończy całe postępowanie karne, nie tylko jego fazę przygotowawczą.'
            },
            {
              title: (
                <>
                  Wniosek o umorzenie i zastosowanie środków zabezpieczających{' '}
                  <Art>art. 324 KPK</Art>
                </>
              ),
              description:
                'Przy niepoczytalności, gdy potrzebne są środki zabezpieczające – decyzję podejmuje sąd.'
            }
          ]}
        />
        <Note title="Pamiętaj">
          <strong>Zawieszenie postępowania</strong> (<Art>art. 22 KPK</Art>) nie jest
          zakończeniem – ani karnego, ani przygotowawczego. Wolno wtedy zabezpieczać
          ślady i dowody oraz orzekać w przedmiocie środków zapobiegawczych.
        </Note>
      </div>
    )
  },
  {
    id: 'warunkowe-umorzenie',
    eyebrow: 'Slajd 2',
    title: 'Dlaczego warunkowe umorzenie wymaga sądu?',
    content: (
      <div className="space-y-5">
        <Lead>
          Bo wymaga stwierdzenia <strong>faktu popełnienia przestępstwa</strong> i{' '}
          <strong>winy</strong> – a tego prokurator w ramach <Art>art. 17 KPK</Art>{' '}
          nie robi.
        </Lead>
        <Bullets
          items={[
            {
              label: 'Warunkowe umorzenie',
              text: 'to środek reakcji państwa na popełnione przestępstwo, najdalej idący środek probacyjny.'
            },
            {
              label: 'Sąd',
              text: 'jako jedyny może przypisać sprawcy czyn i winę, więc tylko sąd może warunkowo umorzyć.'
            },
            {
              label: 'Przyznanie się',
              text: 'nie jest warunkiem koniecznym – ułatwia, ale nie jest wymagane.'
            }
          ]}
        />
        <Note title="Wyjątek przy niepoczytalności">
          Jeżeli zachodzi sama niepoczytalność z <Art>art. 31 KK</Art>, prokurator może
          sam umorzyć na podstawie <Art>art. 17 § 1 pkt 2 KPK</Art>. Gdy jednak
          potrzebne jest również <strong>umieszczenie w zakładzie psychiatrycznym</strong>{' '}
          lub inny środek zabezpieczający, prokurator kieruje wniosek do sądu –{' '}
          <Art>art. 324 KPK</Art>.
        </Note>
      </div>
    )
  },
  {
    id: 'kontrola-dwustopniowa',
    eyebrow: 'Slajd 3',
    title: 'Po wniesieniu aktu oskarżenia: dwie kontrole',
    content: (
      <div className="space-y-5">
        <Lead>
          Między tymi kontrolami <strong>nie stawiamy znaku równości</strong>. One
          dotyczą czego innego.
        </Lead>
        <Columns>
          <Column title="Formalna kontrola aktu oskarżenia" tone="neutral">
            <p>
              Podstawa: <Art>art. 337 KPK</Art>
            </p>
            <p className="mt-2">
              Kontroluje <strong>akt oskarżenia jako pismo procesowe</strong> –
              dokument. Sprawdza, czy spełnia wymogi z art. 332 KPK i in.
            </p>
          </Column>
          <Column title="Merytoryczna kontrola oskarżenia" tone="accent">
            <p>
              Podstawa: <Art>art. 339 KPK</Art> i nast.
            </p>
            <p className="mt-2">
              Kontroluje <strong>sprawę karną</strong> w różnych aspektach – nie
              dokument, ale to, co dokument prezentuje.
            </p>
          </Column>
        </Columns>
        <Note>
          W Woltersie pisze się o <em>„merytorycznej kontroli oskarżenia”</em>, a nie{' '}
          <em>„merytorycznej kontroli aktu oskarżenia”</em>. Z samej nazwy widać, że
          chodzi o oskarżenie (sprawę), nie o dokument.
        </Note>
      </div>
    )
  },
  {
    id: 'roznice-tabela',
    eyebrow: 'Slajd 4',
    title: 'Sześć kluczowych różnic – tabela',
    content: (
      <div className="space-y-4">
        <CompareTable
          rows={[
            {
              label: 'Etap',
              formal: 'Pierwotna – następuje jako pierwsza po wniesieniu sprawy.',
              merit: 'Wtórna – możliwa dopiero po pozytywnym przejściu formalnej.'
            },
            {
              label: 'Przedmiot',
              formal: 'Akt oskarżenia jako pismo procesowe (dokument).',
              merit: 'Sprawa karna w różnych aspektach.'
            },
            {
              label: 'Organ',
              formal: (
                <>
                  Prezes sądu / przewodniczący wydziału / upoważniony sędzia (
                  <Art>art. 93 § 2 KPK</Art>).
                </>
              ),
              merit: 'Sąd – z reguły jednoosobowo.'
            },
            {
              label: 'Forma',
              formal: 'Zarządzenie.',
              merit: 'Postanowienie, wyrok lub wyrok nakazowy – zależnie od przedmiotu.'
            },
            {
              label: 'Treść',
              formal: 'Zwrot aktu oskarżenia prokuratorowi w celu usunięcia braków formalnych.',
              merit:
                'Skazanie, warunkowe umorzenie, umorzenie, środki zabezpieczające, zapobiegawcze, zawieszenie, przekazanie wg właściwości.'
            },
            {
              label: 'Zaskarżalność',
              formal: (
                <>
                  Zażalenie na zarządzenie o zwrocie aktu oskarżenia – pozostaje w
                  tym samym sądzie.
                </>
              ),
              merit: 'Zażalenie / apelacja / sprzeciw (wyrok nakazowy) – co do zasady do sądu wyższego rzędu.'
            }
          ]}
        />
      </div>
    )
  },
  {
    id: 'wlasciwosc-zaskarzalnosc',
    eyebrow: 'Slajd 5',
    title: 'Właściwość funkcjonalna do rozpoznania środka',
    content: (
      <div className="space-y-5">
        <Columns>
          <Column title="Formalna kontrola (337 KPK)" tone="neutral">
            <p>
              Zażalenie na zarządzenie o zwrocie rozpoznaje{' '}
              <strong>ten sam sąd</strong>, do którego wniesiono akt oskarżenia.
            </p>
            <p className="mt-2">
              Prokurator ma <strong>7 dni</strong>: albo uzupełnia braki i wnosi
              poprawiony akt oskarżenia, albo składa zażalenie.
            </p>
          </Column>
          <Column title="Merytoryczna kontrola (339 KPK)" tone="accent">
            <p>
              Cały § 1 i § 3 (pkt 1–6) – środki rozpoznaje{' '}
              <strong>sąd wyższego rzędu</strong> (rejonowy → okręgowy, okręgowy →
              apelacyjny).
            </p>
            <p className="mt-2">
              <strong>Wyjątek:</strong> <Art>art. 339 § 3 pkt 7 KPK</Art> – wyrok
              nakazowy. Środkiem jest <strong>sprzeciw</strong>, a nie apelacja.
            </p>
          </Column>
        </Columns>
        <Note title="339 § 3 KPK w pigułce">
          Pkt 1–6 → zażalenia (z odesłaniem do <Art>art. 17 KPK</Art> w pkt 1 i 2).
          Pkt 2 jest węższy: dotyczy oczywistego braku faktycznych podstaw oskarżenia.
          Pkt 7 → wyrok nakazowy (sprzeciw <Art>art. 506 § 3 KPK</Art>).
        </Note>
      </div>
    )
  },
  {
    id: 'elementy-aktu',
    eyebrow: 'Slajd 6',
    title: 'Elementy aktu oskarżenia – art. 332 KPK',
    content: (
      <div className="space-y-5">
        <Body>
          Akt oskarżenia jako pismo procesowe musi zawierać określone elementy.
          Brak któregoś z nich (jeśli nie jest dziedziczony z postanowienia o
          przedstawieniu zarzutów) to <strong>brak formalny</strong> – tryb{' '}
          <Art>art. 337 KPK</Art>.
        </Body>
        <Bullets
          items={[
            { label: 'Dane oskarżonego', text: 'imię, nazwisko, dane identyfikacyjne.' },
            {
              label: 'Dokładne określenie czynu',
              text: 'czas, miejsce, sposób działania, skutki i okoliczności popełnienia.'
            },
            {
              label: 'Wartość szkody',
              text: 'niezależnie od tego, czy jest znamieniem czynu – jeśli jej nie ma, jest to brak formalny.'
            },
            {
              label: 'Kwalifikacja prawna',
              text: 'wraz z podaniem ustawowej formy zjawiskowej i stadialnej.'
            },
            { label: 'Wykaz dowodów', text: 'osobowych i z dokumentów; wraz z odpisami.' },
            { label: 'Podpis prokuratora', text: 'brak podpisu = akt oskarżenia bezskuteczny.' },
            {
              label: 'Uzasadnienie',
              text: 'co do zasady wymagane (332 § 2). Wyjątek – sprawy zakończone dochodzeniem (332 § 3).'
            }
          ]}
        />
        <Note title="Czas, miejsce, sposób – elastyczność">
          Można pisać <em>„nieustalonego dnia w czerwcu 2025 r.”</em> albo{' '}
          <em>„w nieustalonym miejscu w woj. mazowieckim”</em>, a w sprawach o
          zabójstwo (Anna Garska, Ewa Tylman) – nawet <em>„w nieustalony sposób”</em>.
          Warunek: musi być zaznaczone, że okoliczność jest nieustalona.
        </Note>
      </div>
    )
  },
  {
    id: 'braki-formalne-vs-merytoryczne',
    eyebrow: 'Slajd 7',
    title: 'Braki formalne vs braki merytoryczne postępowania',
    content: (
      <div className="space-y-5">
        <Lead>
          Klucz: <strong>czy ten sam błąd jest też w postanowieniu o przedstawieniu
          zarzutów</strong> (<Art>art. 313 KPK</Art>)?
        </Lead>
        <Columns>
          <Column title="Brak formalny aktu oskarżenia" tone="neutral">
            <p>
              Akt oskarżenia jest niezgodny z postanowieniem o przedstawieniu
              zarzutów – brak dotyczy tylko dokumentu.
            </p>
            <p className="mt-2">
              Tryb: <Art>art. 337 KPK</Art> – zarządzenie prezesa o zwrocie do
              usunięcia braku (tryb sanacyjny <Art>art. 120 KPK</Art>).
            </p>
          </Column>
          <Column title="Brak merytoryczny postępowania" tone="warn">
            <p>
              Ten sam brak był już w postanowieniu z art. 313 KPK – błąd
              przeprowadzenia postępowania przygotowawczego.
            </p>
            <p className="mt-2">
              Tryb: <Art>art. 339 § 3 pkt 3a KPK</Art> w zw. z{' '}
              <Art>art. 344 KPK</Art> – zwrot sprawy prokuratorowi do uzupełnienia.
              Prokurator wydaje <strong>postanowienie o zmianie zarzutów</strong> –{' '}
              <Art>art. 314 KPK</Art>.
            </p>
          </Column>
        </Columns>
        <Note title="Zasada jedności" tone="accent">
          Jeśli jest jeden akt oskarżenia, toczy się jedno postępowanie i nie można
          jednocześnie procedować w trybie formalnym i merytorycznym. Albo zwrot
          do uzupełnienia braków formalnych, albo merytoryczna kontrola.
        </Note>
      </div>
    )
  },
  {
    id: 'opis-czynu',
    eyebrow: 'Slajd 8',
    title: 'Opis czynu – wszystkie znamiona, ale bez formułek',
    content: (
      <div className="space-y-5">
        <Body>
          Opis czynu nie musi powtarzać słów ustawy – proces karny nie jest
          formułkowy. Musi jednak <strong>wypełniać treścią wszystkie znamiona</strong>{' '}
          danego typu czynu zabronionego.
        </Body>
        <Columns>
          <Column title="Rozbój — art. 280 § 1 KK" tone="accent">
            <p>
              <em>
                „…po uprzednim pobiciu Jana Kowalskiego zabrał w celu przywłaszczenia
                telefon komórkowy o wartości 821 zł.”
              </em>
            </p>
            <p className="mt-2 text-amber-200">
              ✓ OK – pobicie wypełnia znamię przemocy, mimo że słowo „przemoc” nie
              pada.
            </p>
          </Column>
          <Column title="Pedofilia — art. 200 § 1 KK" tone="warn">
            <p>
              <em>„…doprowadził do obcowania płciowego Annę Kowalską…”</em> bez
              wskazania wieku.
            </p>
            <p className="mt-2 text-rose-200">
              ✗ Wadliwe – konieczne jest „poniżej 15 roku życia”, podanie wieku
              lub daty urodzenia małoletniej.
            </p>
          </Column>
        </Columns>
        <Note title="Oszustwo — art. 286 § 1 KK" tone="warn">
          W opisie czynu musi pojawić się znamię kierunkowe{' '}
          <strong>„w celu osiągnięcia korzyści majątkowej”</strong>. Bez tego opis
          jest zdekompletowany.
        </Note>
      </div>
    )
  },
  {
    id: 'konsekwencje-bledu',
    eyebrow: 'Slajd 9',
    title: 'Konsekwencje błędu w opisie – reformatio in peius',
    content: (
      <div className="space-y-5">
        <Lead>
          Jeżeli sąd „przeklepie” wadliwy opis z aktu oskarżenia do wyroku, a apelację
          wniesie <strong>tylko obrońca</strong> – błędu już nie da się naprawić.
        </Lead>
        <Steps
          items={[
            {
              title: 'Wyrok skazujący z brakującym znamieniem',
              description:
                'Sąd uznaje oskarżonego za winnego „popełnienia zarzuconego mu czynu” – kopiuje opis.'
            },
            {
              title: 'Apelację wnosi tylko obrońca',
              description:
                'Prokurator i oskarżyciel posiłkowy nie składają środka na niekorzyść.'
            },
            {
              title: 'Zakaz reformationis in peius',
              description:
                'W postępowaniu odwoławczym i kasacyjnym nie można dodać brakującego znamienia ani pogorszyć sytuacji oskarżonego.'
            },
            {
              title: 'Jedyna możliwość: uniewinnienie',
              description:
                'Sąd odwoławczy / Sąd Najwyższy zmieni wyrok i uniewinni albo uchyli i uniewinni – wyrok skazujący nie może się utrzymać.'
            }
          ]}
        />
        <Note tone="warn">
          Dlatego sąd musi <strong>uważnie czytać opis czynu</strong>. Częsty łańcuch
          błędów: policja źle stawia zarzut → prokurator szybko zatwierdza →
          sąd przepuszcza. Skutkiem jest niemożliwy do utrzymania wyrok skazujący.
        </Note>
      </div>
    )
  },
  {
    id: 'tryb-sanacyjny',
    eyebrow: 'Slajd 10',
    title: 'Tryb sanacyjny: 120 KPK i 337 KPK',
    content: (
      <div className="space-y-5">
        <Body>
          <Art>art. 337 KPK</Art> to szczególne uregulowanie wobec ogólnego{' '}
          <Art>art. 120 KPK</Art>. W ogólnym trybie usuwamy{' '}
          <strong>tylko te braki, które uniemożliwiają nadanie biegu pismu</strong>.
        </Body>
        <Columns>
          <Column title="Brak odpisów" tone="neutral">
            <p>
              Akt oskarżenia może iść dalej. Sąd robi odpisy (6 zł / strona) i
              obciąża nimi prokuraturę – niezależnie od wyniku. Sąd zawiadamia
              prokuratora nadrzędnego o naruszeniu (<Art>art. 20 KPK</Art>).
            </p>
          </Column>
          <Column title="Brak podpisu" tone="warn">
            <p>
              Akt oskarżenia <strong>bezskuteczny</strong>. Po bezskutecznym wezwaniu
              do uzupełnienia – brak skargi uprawnionego oskarżyciela.
            </p>
            <p className="mt-2">
              Skutek: <Art>art. 339 § 3 pkt 1 KPK</Art> w zw. z{' '}
              <Art>art. 17 § 1 pkt 9 KPK</Art> – umorzenie postępowania.
            </p>
          </Column>
        </Columns>
        <Note>
          Pismo może podpisać każdy prokurator z zachowaniem zastępowalności –
          jednostka, region, kraj nie ma znaczenia. Brak podpisu „bo wszyscy na
          urlopie” nie jest argumentem.
        </Note>
      </div>
    )
  },
  {
    id: 'wyrok-nakazowy',
    eyebrow: 'Slajd 11',
    title: 'Wyrok nakazowy i sprzeciw – art. 506 § 3 KPK',
    content: (
      <div className="space-y-5">
        <Lead>
          Wyrok nakazowy zapada na posiedzeniu <strong>niejawnym</strong> –
          niejawnym zewnętrznie (bez publiczności) i wewnętrznie (bez stron).
        </Lead>
        <Bullets
          items={[
            {
              label: 'Bez rozprawy',
              text: 'sędzia ma akta, kalendarz – wyrok zapada „przy biurku”.'
            },
            {
              label: 'Tylko niektóre kary',
              text: 'grzywna lub ograniczenie wolności. Nie można orzec kary pozbawienia wolności.'
            },
            {
              label: 'Sprzeciw',
              text: 'przez osobę uprawnioną, w terminie 7 dni – wyrok traci moc z mocy prawa.'
            },
            {
              label: 'Nikt nie rozpoznaje sprzeciwu',
              text: 'sprawa nie idzie do sądu wyższego rzędu – pozostaje w sądzie wydającym wyrok.'
            },
            {
              label: 'Wyłączenie sędziego',
              text: <>
                Sędzia, który wydał wyrok nakazowy, jest wyłączony od dalszego
                orzekania – <Art>art. 40 KPK</Art>.
              </>
            }
          ]}
        />
        <Note title="Po sprzeciwie">
          Przewodniczący sprawdza, czy sprzeciw jest w terminie i przez osobę
          uprawnioną. Jeśli tak – kieruje sprawę na rozprawę, chyba że zachodzi
          okoliczność z <Art>art. 339 KPK</Art> nakazująca posiedzenie.
        </Note>
      </div>
    )
  },
  {
    id: 'kazus-bledy',
    eyebrow: 'Kazus',
    title: 'Kazus – braki w akcie oskarżenia',
    content: (
      <div className="space-y-5">
        <Body>
          Akt oskarżenia obejmuje dwa czyny: oszustwo (<Art>art. 286 § 1 KK</Art>) i
          przekroczenie uprawnień przez funkcjonariusza (<Art>art. 231 KK</Art>).
          Identyfikujemy następujące błędy:
        </Body>
        <Bullets
          items={[
            {
              label: 'Czas, miejsce, sposób',
              text: 'brak doprecyzowania (lub zaznaczenia, że okoliczność jest nieustalona).'
            },
            {
              label: 'Wartość szkody',
              text: <>
                niezbędna przy <Art>art. 286 KK</Art>, niezależnie od tego, że jest
                też znamieniem.
              </>
            },
            {
              label: 'Znamię kierunkowe',
              text: <>
                brak <em>„w celu osiągnięcia korzyści majątkowej”</em> – opis czynu
                zdekompletowany przy <Art>art. 286 KK</Art>.
              </>
            },
            {
              label: 'Przedawnienie drugiego czynu',
              text: <>
                <Art>art. 231 KK</Art> – przesłanka <Art>art. 17 § 1 pkt 6 KPK</Art>.
              </>
            },
            {
              label: 'Brak odpisów',
              text: 'brak po jednym odpisie dla każdego oskarżonego.'
            },
            {
              label: 'Uzasadnienie',
              text: <>
                <Art>art. 231 KK</Art> wyłączony z dochodzenia (<Art>325b KPK</Art>) –
                obowiązkowo śledztwo – więc <strong>uzasadnienie aktu oskarżenia jest wymagane</strong>.
              </>
            }
          ]}
        />
      </div>
    )
  },
  {
    id: 'kazus-decyzja',
    eyebrow: 'Kazus · rozstrzygnięcie',
    title: 'Jak postąpi prezes i sąd?',
    content: (
      <div className="space-y-5">
        <Lead>
          Jeden akt oskarżenia = jedno postępowanie = jedna decyzja procesowa na
          danym etapie.
        </Lead>
        <Steps
          items={[
            {
              title: (
                <>
                  Krok 1 — formalna kontrola <Art>art. 337 KPK</Art>
                </>
              ),
              description:
                'Prezes wzywa prokuratora do usunięcia braków formalnych (czas, miejsce, sposób, wartość szkody, znamię kierunkowe, odpisy, uzasadnienie).'
            },
            {
              title: (
                <>
                  Krok 2 — uzupełnienie zarzutów <Art>art. 314 KPK</Art>
                </>
              ),
              description:
                'Jeśli te same braki są w postanowieniu z art. 313 KPK, prokurator musi wydać postanowienie o zmianie zarzutów (tryb 339 § 3 pkt 3a w zw. z 344 KPK).'
            },
            {
              title: (
                <>
                  Krok 3 — merytoryczna kontrola <Art>art. 339 § 3 pkt 1 KPK</Art>
                </>
              ),
              description:
                'Po naprawionym akcie sąd kieruje sprawę na posiedzenie i co do art. 231 KK umarza – art. 17 § 1 pkt 6 KPK (przedawnienie).'
            },
            {
              title: 'Opcjonalnie — wyłączenie do odrębnego rozpoznania',
              description:
                'Sąd może wyłączyć sprawę z art. 231 KK do odrębnego rozpoznania, nadać nową sygnaturę i tam umorzyć, a co do art. 286 KK – kontynuować.'
            }
          ]}
        />
      </div>
    )
  },
  {
    id: 'powtorka',
    eyebrow: 'Slajd 12',
    title: 'Szybka powtórka – co musi zostać w głowie',
    content: (
      <div className="space-y-5">
        <Columns>
          <Column title="Artykuły KPK" tone="accent">
            <ul className="space-y-1.5">
              <li><Art>17</Art> – przesłanki procesowe</li>
              <li><Art>22</Art> – zawieszenie</li>
              <li><Art>120</Art> – ogólny tryb sanacyjny</li>
              <li><Art>313 · 314</Art> – zarzuty i ich zmiana</li>
              <li><Art>332</Art> – elementy aktu oskarżenia</li>
              <li><Art>335 · 324</Art> – tryby konsensualne i środki zabezpieczające</li>
              <li><Art>337</Art> – formalna kontrola</li>
              <li><Art>339</Art> – merytoryczna kontrola</li>
              <li><Art>344</Art> – zwrot sprawy</li>
              <li><Art>506 § 3</Art> – sprzeciw od wyroku nakazowego</li>
            </ul>
          </Column>
          <Column title="Pułapki egzaminacyjne" tone="warn">
            <ul className="space-y-1.5">
              <li>Warunkowe umorzenie tylko przez sąd.</li>
              <li>Wartość szkody — zawsze, niezależnie od znamion.</li>
              <li>200 § 1 KK — wiek małoletniej w opisie czynu.</li>
              <li>286 § 1 KK — znamię „w celu osiągnięcia korzyści majątkowej”.</li>
              <li>Brak podpisu = brak skargi uprawnionego oskarżyciela.</li>
              <li>Sprzeciw od wyroku nakazowego nie idzie wyżej.</li>
              <li>Sędzia z wyroku nakazowego — wyłączony (40 KPK).</li>
            </ul>
          </Column>
        </Columns>
      </div>
    )
  }
]

export default function KontrolaAktuOskarzeniaPage() {
  return <SlideDeck slides={slides} />
}

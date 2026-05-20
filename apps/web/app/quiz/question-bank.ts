export type QuestionOption = {
  letter: string
  text: string
}

export type Question = {
  id: number
  source: string
  originalNo: number
  question: string
  options: QuestionOption[]
  sources: string[]
  answer: string
  explanation: string
  status: 'pewne' | 'do weryfikacji'
  observedMarked: string[]
  topic: string
}

export const QUESTION_BANK: Question[] = [
  {
    id: 1,
    source: 'Strona A (pytania 1–11) – z IMG_0342',
    originalNo: 1,
    question: 'Zasada jawności firmy oznacza:',
    options: [
      { letter: 'A', text: 'obowiązek umieszczenia w firmie spółki nazwisk wszystkich wspólników,' },
      { letter: 'B', text: 'obowiązek ujawnienia firmy we właściwym rejestrze,' },
      { letter: 'C', text: 'zakaz umieszczania w firmie przedsiębiorcy elementów wykraczających poza imię i nazwisko w odniesieniu do osób fizycznych (nazwę w przypadku osoby prawnej).' }
    ],
    sources: ['Strona A (pytania 1–11) – z IMG_0342'],
    answer: 'B',
    explanation: 'art. 43² k.c. – firmę ujawnia się we właściwym rejestrze.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'KRS i rejestry'
  },
  {
    id: 2,
    source: 'Strona A (pytania 1–11) – z IMG_0342',
    originalNo: 2,
    question: 'Wpis spółki osobowej do rejestru przedsiębiorców KRS:',
    options: [
      { letter: 'A', text: 'ma zawsze charakter deklaratoryjny,' },
      { letter: 'B', text: 'ma zawsze charakter konstytutywny,' },
      { letter: 'C', text: 'charakter wpisu zależy od woli wspólników wyrażonej we wniosku do KRS i umowie spółki.' }
    ],
    sources: ['Strona A (pytania 1–11) – z IMG_0342'],
    answer: 'B',
    explanation: 'Spółka osobowa powstaje z chwilą wpisu do rejestru przedsiębiorców KRS.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'KRS i rejestry'
  },
  {
    id: 3,
    source: 'Strona A (pytania 1–11) – z IMG_0342',
    originalNo: 3,
    question: 'Zgodnie z Kodeksem spółek handlowych, spółką osobową nie jest:',
    options: [
      { letter: 'A', text: 'spółka cywilna,' },
      { letter: 'B', text: 'spółka komandytowo-akcyjna,' },
      { letter: 'C', text: 'spółka komandytowa.' }
    ],
    sources: ['Strona A (pytania 1–11) – z IMG_0342'],
    answer: 'A',
    explanation: 'Spółka cywilna nie jest spółką handlową/osobową w rozumieniu KSH.',
    status: 'pewne',
    observedMarked: ['A'],
    topic: 'Spółki osobowe / ogólne'
  },
  {
    id: 4,
    source: 'Strona A (pytania 1–11) – z IMG_0342',
    originalNo: 4,
    question: 'Wkładem wspólnika do spółki jawnej może być:',
    options: [
      { letter: 'A', text: 'przeniesienie lub obciążenie własności rzeczy lub innych praw, a także dokonanie innych świadczeń na rzecz spółki,' },
      { letter: 'B', text: 'wyłącznie przeniesienie lub obciążenie rzeczy lub innych praw,' },
      { letter: 'C', text: 'wyłącznie świadczenie pracy bądź usług na rzecz spółki' }
    ],
    sources: ['Strona A (pytania 1–11) – z IMG_0342', 'Strona B (pytania 1–12) – z IMG_0339'],
    answer: 'A',
    explanation: 'art. 48 § 2 KSH – wkład może polegać także na świadczeniu pracy/usług.',
    status: 'pewne',
    observedMarked: ['A'],
    topic: 'Spółka jawna'
  },
  {
    id: 5,
    source: 'Strona A (pytania 1–11) – z IMG_0342',
    originalNo: 5,
    question: 'Powierzenie prowadzenia spraw spółki jawnej osobom trzecim, z wyłączeniem wspólników:',
    options: [
      { letter: 'A', text: 'Jest dopuszczalne tylko wówczas, gdy umowa spółki tak stanowi' },
      { letter: 'B', text: 'Jest możliwe tylko w przypadku jednomyślnej uchwały wszystkich wspólników' },
      { letter: 'C', text: 'Nie jest dopuszczalne' }
    ],
    sources: ['Strona A (pytania 1–11) – z IMG_0342'],
    answer: 'C',
    explanation: 'art. 38 § 1 KSH – nie można wyłączyć wspólników z prowadzenia spraw na rzecz osób trzecich.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'Spółka jawna'
  },
  {
    id: 6,
    source: 'Strona A (pytania 1–11) – z IMG_0342',
    originalNo: 6,
    question: 'Wspólnikami spółki partnerskiej mogą być:',
    options: [
      { letter: 'A', text: 'osoby fizyczne, osoby prawne i tzw. ułomne osoby prawne,' },
      { letter: 'B', text: 'osoby fizyczne i spółki osobowe,' },
      { letter: 'C', text: 'wyłącznie osoby fizyczne.' }
    ],
    sources: ['Strona A (pytania 1–11) – z IMG_0342'],
    answer: 'C',
    explanation: 'art. 87 KSH – partnerami są osoby fizyczne wykonujące wolny zawód.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'Spółka partnerska'
  },
  {
    id: 7,
    source: 'Strona A (pytania 1–11) – z IMG_0342',
    originalNo: 7,
    question: 'Umowa spółki partnerskiej powinna być zawarta:',
    options: [
      { letter: 'A', text: 'w formie aktu notarialnego,' },
      { letter: 'B', text: 'na piśmie pod rygorem nieważności,' },
      { letter: 'C', text: 'w dowolnej formie wybranej przez wspólników (partnerów).' }
    ],
    sources: ['Strona A (pytania 1–11) – z IMG_0342'],
    answer: 'B',
    explanation: 'art. 92 KSH – forma pisemna pod rygorem nieważności.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'Spółka partnerska'
  },
  {
    id: 8,
    source: 'Strona A (pytania 1–11) – z IMG_0342',
    originalNo: 8,
    question: 'Jan Kowalski sprzedał spółce partnerskiej lekarzy materiały budowlane. Za zaciągnięte zobowiązanie z tytułu ceny odpowiada:',
    options: [
      { letter: 'A', text: 'spółka partnerska solidarnie z partnerem, który zawarł umowę,' },
      { letter: 'B', text: 'spółka partnerska i wszyscy partnerzy solidarnie,' },
      { letter: 'C', text: 'jedynie spółka partnerska' }
    ],
    sources: ['Strona A (pytania 1–11) – z IMG_0342'],
    answer: 'B',
    explanation: 'Zobowiązanie niezwiązane z wykonywaniem wolnego zawodu obciąża spółkę i partnerów jak w spółce jawnej.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'Spółka partnerska'
  },
  {
    id: 9,
    source: 'Strona A (pytania 1–11) – z IMG_0342',
    originalNo: 9,
    question: 'Suma komandytowa to:',
    options: [
      { letter: 'A', text: 'oznaczony kwotowo w umowie spółki komandytowej zakres odpowiedzialności komandytariusza za zobowiązania spółki,' },
      { letter: 'B', text: 'kwotowy odpowiednik udziału kapitałowego komandytariusza,' },
      { letter: 'C', text: 'kwota stanowiąca ustalony przez wspólników w umowie spółki wkład komandytariusza do spółki komandytowej.' }
    ],
    sources: ['Strona A (pytania 1–11) – z IMG_0342'],
    answer: 'A',
    explanation: 'art. 111 KSH – suma komandytowa wyznacza zakres odpowiedzialności komandytariusza.',
    status: 'pewne',
    observedMarked: ['A'],
    topic: 'Spółka komandytowa'
  },
  {
    id: 10,
    source: 'Strona A (pytania 1–11) – z IMG_0342',
    originalNo: 10,
    question: 'Komplementariusz spółki komandytowej ponosi odpowiedzialność za zobowiązania spółki wobec wierzycieli:',
    options: [
      { letter: 'A', text: 'bez ograniczenia,' },
      { letter: 'B', text: 'odpowiada do wysokości sumy komandytowej,' },
      { letter: 'C', text: 'odpowiada komplementarnie z komandytariuszem.' }
    ],
    sources: ['Strona A (pytania 1–11) – z IMG_0342'],
    answer: 'A',
    explanation: 'Komplementariusz odpowiada za zobowiązania spółki bez ograniczenia.',
    status: 'pewne',
    observedMarked: ['A'],
    topic: 'Spółka komandytowa'
  },
  {
    id: 11,
    source: 'Strona A (pytania 1–11) – z IMG_0342',
    originalNo: 11,
    question: 'Do spółki komandytowej w sprawach nieuregulowanych bezpośrednio w dziale KSH jej dotyczącym stosuje się:',
    options: [
      { letter: 'A', text: 'przepisy o spółce jawnej,' },
      { letter: 'B', text: 'przepisy o spółce partnerskiej,' },
      { letter: 'C', text: 'przepisy o spółce komandytowo-akcyjnej.' }
    ],
    sources: ['Strona A (pytania 1–11) – z IMG_0342'],
    answer: 'A',
    explanation: 'art. 103 KSH – odpowiednie stosowanie przepisów o spółce jawnej.',
    status: 'pewne',
    observedMarked: ['A'],
    topic: 'Spółka komandytowa'
  },
  {
    id: 12,
    source: 'Strona B (pytania 1–12) – z IMG_0339',
    originalNo: 1,
    question: 'Zgodnie z ustawą Prawo przedsiębiorców, w rozumieniu tej ustawy za przedsiębiorców [uznaje się]:',
    options: [
      { letter: 'A', text: 'spółki cywilne' },
      { letter: 'B', text: 'wspólników spółki cywilnej w zakresie wykonywanej przez nich działalności gospodarczej' },
      { letter: 'C', text: 'wspólników spółki partnerskiej i spółki komandytowej' }
    ],
    sources: ['Strona B (pytania 1–12) – z IMG_0339'],
    answer: 'B',
    explanation: 'art. 4 Prawa przedsiębiorców – przedsiębiorcami są wspólnicy spółki cywilnej w zakresie działalności.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'CEIDG i przedsiębiorca'
  },
  {
    id: 13,
    source: 'Strona B (pytania 1–12) – z IMG_0339',
    originalNo: 2,
    question: 'Zgodnie z ustawą o Krajowym Rejestrze Sądowym – składnikiem Krajowego Rejestru Sądowego nie jest:',
    options: [
      { letter: 'A', text: 'rejestr dłużników niewypłacalnych' },
      { letter: 'B', text: 'rejestr fundacji oraz publicznych zakładów opieki zdrowotnej' },
      { letter: 'C', text: 'rejestr zastawów' }
    ],
    sources: ['Strona B (pytania 1–12) – z IMG_0339'],
    answer: 'C',
    explanation: 'Rejestr zastawów nie jest częścią KRS.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'KRS i rejestry'
  },
  {
    id: 14,
    source: 'Strona B (pytania 1–12) – z IMG_0339',
    originalNo: 3,
    question: 'Spółka osobowa powstaje:',
    options: [
      { letter: 'A', text: 'z chwilą wniesienia umówionych wkładów przez wszystkich wspólników zawierających umowę spółki' },
      { letter: 'B', text: 'z chwilą zawarcia umowy spółki' },
      { letter: 'C', text: 'z chwilą wpisu do rejestru' }
    ],
    sources: ['Strona B (pytania 1–12) – z IMG_0339', 'Strona C (pytania 12–20) – z IMG_0340'],
    answer: 'C',
    explanation: 'Spółka osobowa powstaje z chwilą wpisu do rejestru.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'KRS i rejestry'
  },
  {
    id: 15,
    source: 'Strona B (pytania 1–12) – z IMG_0339',
    originalNo: 4,
    question: 'Zgodnie z Kodeksem spółek handlowych, spółką osobową nie jest:',
    options: [
      { letter: 'A', text: 'Spółka cywilna' },
      { letter: 'B', text: 'spółka komandytowo-akcyjna' },
      { letter: 'C', text: 'spółka komandytowa' }
    ],
    sources: ['Strona B (pytania 1–12) – z IMG_0339'],
    answer: 'A',
    explanation: 'Odpowiedź zgodna z kluczem przyjętym do aplikacji i zasadami KSH/ustaw rejestrowych.',
    status: 'pewne',
    observedMarked: ['A'],
    topic: 'Spółki osobowe / ogólne'
  },
  {
    id: 16,
    source: 'Strona B (pytania 1–12) – z IMG_0339',
    originalNo: 5,
    question: 'Spółka osobowa:',
    options: [
      { letter: 'A', text: 'z chwilą wpisu do rejestru uzyskuje osobowość prawną' },
      { letter: 'B', text: 'jest tzw. ułomną osobą prawną (nie posiada osobowości prawnej, ale posiada zdolność prawną)' },
      { letter: 'C', text: 'podobnie jak spółka cywilna nie posiada ani osobowości prawnej ani zdolności prawnej' }
    ],
    sources: ['Strona B (pytania 1–12) – z IMG_0339', 'Strona C (pytania 12–20) – z IMG_0340'],
    answer: 'B',
    explanation: 'Spółka osobowa ma zdolność prawną, ale nie osobowość prawną.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'KRS i rejestry'
  },
  {
    id: 17,
    source: 'Strona B (pytania 1–12) – z IMG_0339',
    originalNo: 6,
    question: 'Za zobowiązania spółki jawnej zaciągnięte po jej zawiązaniu, a przed wpisem do rejestru odpowiadają:',
    options: [
      { letter: 'A', text: 'solidarnie osoby, które działały w imieniu spółki,' },
      { letter: 'B', text: 'spółka jawna w organizacji jako odrębny podmiot prawa,' },
      { letter: 'C', text: 'wspólnicy według zasad dotyczących ich odpowiedzialności po powstaniu spółki' }
    ],
    sources: ['Strona B (pytania 1–12) – z IMG_0339'],
    answer: 'A',
    explanation: 'Za etap przed wpisem odpowiadają solidarnie osoby działające w imieniu spółki.',
    status: 'pewne',
    observedMarked: ['A'],
    topic: 'Spółka jawna'
  },
  {
    id: 18,
    source: 'Strona B (pytania 1–12) – z IMG_0339',
    originalNo: 7,
    question: 'Ogół praw i obowiązków wspólnika spółki osobowej:',
    options: [
      { letter: 'A', text: 'może być przeniesiony na inną osobę, tylko gdy umowa spółki tak stanowi' },
      { letter: 'B', text: 'nigdy nie może być przeniesiony na inną osobę,' },
      { letter: 'C', text: 'może być przeniesiony na inną osobę za zgodą wszystkich wspólników, niezależnie od postanowień umowy spółki' }
    ],
    sources: ['Strona B (pytania 1–12) – z IMG_0339'],
    answer: 'A',
    explanation: 'W materiale zaznaczono inną odpowiedź, ale art. 10 KSH wymaga najpierw postanowienia umowy spółki; zgoda wspólników to drugi warunek.',
    status: 'do weryfikacji',
    observedMarked: ['C'],
    topic: 'Spółki osobowe / ogólne'
  },
  {
    id: 19,
    source: 'Strona B (pytania 1–12) – z IMG_0339',
    originalNo: 8,
    question: 'Zgodnie z Kodeksem spółek handlowych, wspólnik spółki jawnej ma prawo żądać od wspólnika tej spółki, naruszającego zakaz konkurencji:',
    options: [
      { letter: 'A', text: 'wydania spółce korzyści, jakie osiągnął naruszając zakaz konkurencji lub naprawienia szkody wyrządzonej spółce.' },
      { letter: 'B', text: 'wyłącznie zaniechania niedozwolonych działań.' },
      { letter: 'C', text: 'wyłącznie wydania spółce korzyści, jakie osiągnął naruszając zakaz konkurencji' }
    ],
    sources: ['Strona B (pytania 1–12) – z IMG_0339'],
    answer: 'A',
    explanation: 'art. 57 KSH – roszczenie o wydanie korzyści albo naprawienie szkody.',
    status: 'pewne',
    observedMarked: ['A'],
    topic: 'Spółka jawna'
  },
  {
    id: 20,
    source: 'Strona B (pytania 1–12) – z IMG_0339',
    originalNo: 10,
    question: 'Za prowadzenie spraw spółki jawnej wspólnik:',
    options: [
      { letter: 'A', text: 'otrzymuje wynagrodzenie, chyba, że umowa spółki stanowi inaczej' },
      { letter: 'B', text: 'nie otrzymuje wynagrodzenia, chyba że umowa spółki stanowi inaczej' },
      { letter: 'C', text: 'otrzymuje wynagrodzenie o ile jednocześnie reprezentuje spółkę w stosunkach zewnętrznych' }
    ],
    sources: ['Strona B (pytania 1–12) – z IMG_0339'],
    answer: 'B',
    explanation: 'art. 46 KSH – brak wynagrodzenia za prowadzenie spraw, chyba że umowa stanowi inaczej.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'Spółka jawna'
  },
  {
    id: 21,
    source: 'Strona B (pytania 1–12) – z IMG_0339',
    originalNo: 11,
    question: 'W przypadku powołania Zarządu w spółce partnerskiej:',
    options: [
      { letter: 'A', text: 'członkami Zarządu mogą być wyłącznie osoby trzecie,' },
      { letter: 'B', text: 'członkami Zarządu muszą być wyłącznie partnerzy.' },
      { letter: 'C', text: 'członkami Zarządu mogą być osoby trzecie, lecz wówczas co najmniej jeden partner musi być członkiem Zarządu.' }
    ],
    sources: ['Strona B (pytania 1–12) – z IMG_0339'],
    answer: 'C',
    explanation: 'art. 97 KSH – w zarządzie spółki partnerskiej co najmniej jeden członek musi być partnerem.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'Spółka partnerska'
  },
  {
    id: 22,
    source: 'Strona B (pytania 1–12) – z IMG_0339',
    originalNo: 12,
    question: 'Partner w spółce partnerskiej może ponosić odpowiedzialność za jej zobowiązania tak jak wspólnik spółki jawnej, gdy:',
    options: [
      { letter: 'A', text: 'pozostali partnerzy tak postanowili podejmując stosowną uchwałę' },
      { letter: 'B', text: 'Zarząd spółki partnerskiej tak zadecydował.' },
      { letter: 'C', text: 'umowa spółki partnerskiej tak stanowi' }
    ],
    sources: ['Strona B (pytania 1–12) – z IMG_0339'],
    answer: 'C',
    explanation: 'art. 95 § 2 KSH – umowa może rozszerzyć odpowiedzialność partnera jak w spółce jawnej.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'Spółka partnerska'
  },
  {
    id: 23,
    source: 'Strona C (pytania 12–20) – z IMG_0340',
    originalNo: 12,
    question: 'Osoba przystępująca do spółki komandytowej w charakterze komandytariusza:',
    options: [
      { letter: 'A', text: 'odpowiada za zobowiązania spółki powstałe od dnia jej przystąpienia do spółki,' },
      { letter: 'B', text: 'odpowiada za zobowiązania spółki związane wyłącznie z czynnościami prawnymi, w których reprezentowała spółkę jako pełnomocnik po przystąpieniu do spółki,' },
      { letter: 'C', text: 'odpowiada za zobowiązania spółki istniejące w chwili wpisania tej osoby do rejestru.' }
    ],
    sources: ['Strona C (pytania 12–20) – z IMG_0340'],
    answer: 'C',
    explanation: 'art. 114 KSH – odpowiedzialność za zobowiązania istniejące przy wpisie przystąpienia.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'KRS i rejestry'
  },
  {
    id: 24,
    source: 'Strona C (pytania 12–20) – z IMG_0340',
    originalNo: 13,
    question: 'Umowa spółki/Statut spółki może przewidywać organy w:',
    options: [
      { letter: 'A', text: 'spółce jawnej i spółce partnerskiej,' },
      { letter: 'B', text: 'spółce partnerskiej i spółce komandytowej,' },
      { letter: 'C', text: 'spółce komandytowo-akcyjnej i spółce partnerskiej.' }
    ],
    sources: ['Strona C (pytania 12–20) – z IMG_0340'],
    answer: 'C',
    explanation: 'W materiale występuje rozbieżność; spółka komandytowa co do zasady nie ma organów, a S.K.A. i spółka partnerska mogą mieć strukturę organową.',
    status: 'do weryfikacji',
    observedMarked: ['B'],
    topic: 'Spółka komandytowa'
  },
  {
    id: 25,
    source: 'Strona C (pytania 12–20) – z IMG_0340',
    originalNo: 14,
    question: 'Cechą charakterystyczną, odróżniającą spółkę komandytowo-akcyjną od innych spółek osobowych jest:',
    options: [
      { letter: 'A', text: 'wymóg sporządzenia statutu spółki w formie aktu notarialnego,' },
      { letter: 'B', text: 'występowanie kapitału zakładowego,' },
      { letter: 'C', text: 'posiadanie osobowości prawnej od chwili wpisu spółki do rejestru przedsiębiorców.' }
    ],
    sources: ['Strona C (pytania 12–20) – z IMG_0340'],
    answer: 'B',
    explanation: 'S.K.A. jako jedyna spółka osobowa ma kapitał zakładowy.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'KRS i rejestry'
  },
  {
    id: 26,
    source: 'Strona C (pytania 12–20) – z IMG_0340',
    originalNo: 15,
    question: 'Nazwisko (firma) akcjonariusza w firmie spółki komandytowo-akcyjnej:',
    options: [
      { letter: 'A', text: 'nie może być zamieszczane,' },
      { letter: 'B', text: 'w przypadku jego zamieszczenia nie wywołuje skutków prawnych,' },
      { letter: 'C', text: 'w przypadku jego zamieszczenia rodzi odpowiedzialność wobec osób trzecich za zobowiązania spółki, ale wynikające bezpośrednio z czynności prawnych dokonywanych przez akcjonariusza za spółkę z tymi osobami trzecimi' }
    ],
    sources: ['Strona C (pytania 12–20) – z IMG_0340'],
    answer: 'A',
    explanation: 'W załączniku zaznaczono dwie odpowiedzi. Przy jednym prawidłowym wyborze przyjęto zakaz zamieszczania nazwiska/firma akcjonariusza; wariant C ma zbyt wąskie skutki odpowiedzialności.',
    status: 'do weryfikacji',
    observedMarked: ['A', 'C'],
    topic: 'S.K.A.'
  },
  {
    id: 27,
    source: 'Strona C (pytania 12–20) – z IMG_0340',
    originalNo: 16,
    question: 'Spółkę komandytowo-akcyjną reprezentują:',
    options: [
      { letter: 'A', text: 'Walne zgromadzenie' },
      { letter: 'B', text: 'Zarząd' },
      { letter: 'C', text: 'komplementariusze, których z mocy statutu lub orzeczenia sądu nie pozbawiono prawa reprezentowania spółki' }
    ],
    sources: ['Strona C (pytania 12–20) – z IMG_0340'],
    answer: 'C',
    explanation: 'S.K.A. reprezentują komplementariusze niepozbawieni reprezentacji.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'S.K.A.'
  },
  {
    id: 28,
    source: 'Strona C (pytania 12–20) – z IMG_0340',
    originalNo: 17,
    question: 'Jeżeli statut spółki komandytowo-akcyjnej dopuszcza przyjęcie do spółki nowego komplementariusza:',
    options: [
      { letter: 'A', text: 'może nim być wyłącznie dotychczasowy akcjonariusz spółki' },
      { letter: 'B', text: 'może nim być wyłącznie osoba trzecia' },
      { letter: 'C', text: 'może nim być zarówno dotychczasowy akcjonariusz, jak i osoba trzecia' }
    ],
    sources: ['Strona C (pytania 12–20) – z IMG_0340'],
    answer: 'C',
    explanation: 'Nowym komplementariuszem może być akcjonariusz albo osoba trzecia, jeżeli statut to dopuszcza.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'S.K.A.'
  },
  {
    id: 29,
    source: 'Strona C (pytania 12–20) – z IMG_0340',
    originalNo: 20,
    question: 'Kapitał zakładowy spółki komandytowo-akcyjnej powinien wynosić co najmniej:',
    options: [
      { letter: 'A', text: '5.000 zł' },
      { letter: 'B', text: '50.000 zł' },
      { letter: 'C', text: '500.000 zł' }
    ],
    sources: ['Strona C (pytania 12–20) – z IMG_0340'],
    answer: 'B',
    explanation: 'art. 126 § 2 KSH – kapitał zakładowy S.K.A. co najmniej 50 000 zł.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'S.K.A.'
  },
  {
    id: 30,
    source: 'Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341',
    originalNo: 13,
    question: 'Do spółki komandytowej w sprawach nieuregulowanych bezpośrednio w dziale KSH jej dotyczącym stosuje się:',
    options: [
      { letter: 'A', text: 'przepisy o spółce jawnej' },
      { letter: 'B', text: 'przepisy o spółce partnerskiej' },
      { letter: 'C', text: 'przepisy o spółce komandytowo-akcyjnej' }
    ],
    sources: ['Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341'],
    answer: 'A',
    explanation: 'Odpowiedź zgodna z kluczem przyjętym do aplikacji i zasadami KSH/ustaw rejestrowych.',
    status: 'pewne',
    observedMarked: ['A'],
    topic: 'Spółka komandytowa'
  },
  {
    id: 31,
    source: 'Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341',
    originalNo: 14,
    question: 'Powierzenie prowadzenia spraw spółki komandytowej osobom trzecim, z wyłączeniem wspólników:',
    options: [
      { letter: 'A', text: 'Jest dopuszczalne tylko wówczas, gdy umowa spółki tak stanowi' },
      { letter: 'B', text: 'Jest możliwe tylko w przypadku jednomyślnej uchwały wszystkich wspólników' },
      { letter: 'C', text: 'Nie jest dopuszczalne' }
    ],
    sources: ['Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341'],
    answer: 'C',
    explanation: 'Odpowiedź zgodna z kluczem przyjętym do aplikacji i zasadami KSH/ustaw rejestrowych.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'Spółka komandytowa'
  },
  {
    id: 32,
    source: 'Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341',
    originalNo: 15,
    question: 'Osoba przystępująca do spółki komandytowej w charakterze komandytariusza:',
    options: [
      { letter: 'A', text: 'odpowiada za zobowiązania spółki powstałe od dnia jej przystąpienia do spółki' },
      { letter: 'B', text: 'odpowiada za zobowiązania spółki związane wyłącznie z czynnościami prawnymi, w których reprezentowała spółkę jako pełnomocnik po przystąpieniu do spółki' },
      { letter: 'C', text: 'odpowiada za zobowiązania spółki istniejące w chwili wpisania tej osoby do rejestru' }
    ],
    sources: ['Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341'],
    answer: 'C',
    explanation: 'Odpowiedź zgodna z kluczem przyjętym do aplikacji i zasadami KSH/ustaw rejestrowych.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'KRS i rejestry'
  },
  {
    id: 33,
    source: 'Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341',
    originalNo: 16,
    question: 'Umowa spółki/Statut spółki może przewidywać organy w:',
    options: [
      { letter: 'A', text: 'spółce jawnej i spółce partnerskiej,' },
      { letter: 'B', text: 'spółce partnerskiej i spółce komandytowej' },
      { letter: 'C', text: 'spółce komandytowo-akcyjnej i spółce partnerskiej' }
    ],
    sources: ['Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341'],
    answer: 'C',
    explanation: 'Odpowiedź zgodna z kluczem przyjętym do aplikacji i zasadami KSH/ustaw rejestrowych.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'Spółka komandytowa'
  },
  {
    id: 34,
    source: 'Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341',
    originalNo: 17,
    question: 'Cechą charakterystyczną, odróżniającą spółkę komandytowo-akcyjną od innych spółek osobowych jest:',
    options: [
      { letter: 'A', text: 'wymóg sporządzenia umowy (statutu) spółki w formie aktu notarialnego' },
      { letter: 'B', text: 'występowanie kapitału zakładowego' },
      { letter: 'C', text: 'posiadanie osobowości prawnej od chwili wpisu spółki do rejestru przedsiębiorców' }
    ],
    sources: ['Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341'],
    answer: 'B',
    explanation: 'Odpowiedź zgodna z kluczem przyjętym do aplikacji i zasadami KSH/ustaw rejestrowych.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'KRS i rejestry'
  },
  {
    id: 35,
    source: 'Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341',
    originalNo: 18,
    question: 'Akcjonariusz w spółce komandytowo-akcyjnej za jej zobowiązania odpowiada:',
    options: [
      { letter: 'A', text: 'do wysokości sumy komandytowej' },
      { letter: 'B', text: 'do wysokości wniesionego wkładu' },
      { letter: 'C', text: 'w ogóle nie odpowiada' }
    ],
    sources: ['Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341'],
    answer: 'C',
    explanation: 'Akcjonariusz S.K.A. nie odpowiada za zobowiązania spółki.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'S.K.A.'
  },
  {
    id: 36,
    source: 'Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341',
    originalNo: 19,
    question: 'Prawo wypowiedzenia Statutu spółki komandytowo-akcyjnej przysługuje:',
    options: [
      { letter: 'A', text: 'wyłącznie akcjonariuszom spółki,' },
      { letter: 'B', text: 'wyłącznie komplementariuszom spółki,' },
      { letter: 'C', text: 'zarówno akcjonariuszom jak i komplementariuszom' }
    ],
    sources: ['Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341'],
    answer: 'B',
    explanation: 'Prawo wypowiedzenia statutu dotyczy komplementariusza.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'S.K.A.'
  },
  {
    id: 37,
    source: 'Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341',
    originalNo: 20,
    question: 'W spółce komandytowo-akcyjnej, reprezentacja spółki i prowadzenie jej spraw powierzane jest:',
    options: [
      { letter: 'A', text: 'akcjonariuszom mającym prawo reprezentacji i prowadzenia spraw spółki,' },
      { letter: 'B', text: 'komplementariuszom mającym prawo reprezentacji i prowadzenia spraw spółki.' },
      { letter: 'C', text: 'Zarządowi spółki komandytowo-akcyjnej' }
    ],
    sources: ['Strona D (pytania 13–20 + pytania otwarte) – z IMG_0341'],
    answer: 'B',
    explanation: 'Prowadzenie spraw i reprezentacja w S.K.A. należą do komplementariuszy.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'S.K.A.'
  },
  {
    id: 38,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 1,
    question: 'Jeżeli przedsiębiorca wpisany do CEIDG posiada numer PESEL, to ten numer PESEL:',
    options: [
      { letter: 'A', text: 'podlega wpisowi do Centralnej Ewidencji i Informacji o Działalności Gospodarczej' },
      { letter: 'B', text: 'nie podlega wpisowi do Centralnej Ewidencji i Informacji o Działalności Gospodarczej' },
      { letter: 'C', text: 'podlega wpisowi do Centralnej Ewidencji i Informacji o Działalności Gospodarczej, ale tylko na wniosek przedsiębiorcy' },
      { letter: 'D', text: 'żadne z powyższych' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'A',
    explanation: 'W załączniku pojawia się zaznaczenie przeciwne; aktualnie PESEL, o ile przedsiębiorca go posiada, podlega wpisowi do CEIDG.',
    status: 'do weryfikacji',
    observedMarked: ['B'],
    topic: 'CEIDG i przedsiębiorca'
  },
  {
    id: 39,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 2,
    question: 'Wraz z wnioskiem o wpis do CEIDG, z wyjątkiem wniosku o wykreślenie przedsiębiorcy, składa się między innymi oświadczenie o posiadaniu:',
    options: [
      { letter: 'A', text: 'ruchomości o wartości przekraczającej kwotę 20 000 zł' },
      { letter: 'B', text: 'tytułu prawnego do nieruchomości, których adresy są wpisywane do Centralnej Ewidencji i Informacji o Działalności Gospodarczej' },
      { letter: 'C', text: 'praw niemajątkowych służących prowadzeniu działalności gospodarczej przez tego przedsiębiorcę' },
      { letter: 'D', text: 'pełnej zdolności do czynności prawnych' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'B',
    explanation: 'W załączniku pojawia się zaznaczenie przeciwne; chodzi o tytuł prawny do nieruchomości/adresów wpisywanych do CEIDG.',
    status: 'do weryfikacji',
    observedMarked: ['D'],
    topic: 'CEIDG i przedsiębiorca'
  },
  {
    id: 40,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 3,
    question: 'Wpisy do Krajowego Rejestru Sądowego podlegają obowiązkowi ogłoszenia:',
    options: [
      { letter: 'A', text: 'na stronie internetowej sądu rejestrowego' },
      { letter: 'B', text: 'na stronie internetowej Sądu Okręgowego w Warszawie, chyba że ustawa stanowi inaczej' },
      { letter: 'C', text: 'w Monitorze Sądowym i Gospodarczym, chyba że ustawa stanowi inaczej' },
      { letter: 'D', text: 'na stronie internetowej spółki, chyba że ustawa stanowi inaczej' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'C',
    explanation: 'Wpisy w KRS ogłasza się w Monitorze Sądowym i Gospodarczym, chyba że ustawa stanowi inaczej.',
    status: 'pewne',
    observedMarked: [],
    topic: 'KRS i rejestry'
  },
  {
    id: 41,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 4,
    question: 'O ile przepis szczególny nie stanowi inaczej, wniosek o wpis do Krajowego Rejestru Sądowego powinien być złożony nie później niż w terminie:',
    options: [
      { letter: 'A', text: '3 dni od dnia zdarzenia uzasadniającego dokonanie wpisu' },
      { letter: 'B', text: '14 dni od dnia zdarzenia uzasadniającego dokonanie wpisu' },
      { letter: 'C', text: '30 dni od dnia zdarzenia uzasadniającego dokonanie wpisu' },
      { letter: 'D', text: '7 dni od dnia zdarzenia uzasadniającego dokonanie wpisu' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'D',
    explanation: 'Co do zasady wniosek do KRS składa się w terminie 7 dni od zdarzenia.',
    status: 'pewne',
    observedMarked: ['D'],
    topic: 'KRS i rejestry'
  },
  {
    id: 42,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 5,
    question: 'Nazwisko komandytariusza nie może być zamieszczane w firmie spółki komandytowej; w przypadku zamieszczenia nazwiska lub firmy (nazwy) komandytariusza w firmie spółki komandytowej:',
    options: [
      { letter: 'A', text: 'komandytariusz ten odpowiada wobec osób trzecich tak jak komplementariusz' },
      { letter: 'B', text: 'komandytariusz ten nie odpowiada wobec osób trzecich' },
      { letter: 'C', text: 'komandytariusz ten przestaje być wspólnikiem spółki komandytowej' },
      { letter: 'D', text: 'rozpoczyna bieg trzymiesięczny termin zawity na wyłączenie tego wspólnika ze spółki' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'A',
    explanation: 'art. 104 § 4 KSH – komandytariusz ujawniony w firmie odpowiada jak komplementariusz.',
    status: 'pewne',
    observedMarked: ['A'],
    topic: 'KRS i rejestry'
  },
  {
    id: 43,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 6,
    question: 'Osoby, które działały w imieniu spółki komandytowej po jej zawiązaniu, a przed jej wpisem do rejestru przedsiębiorców, za zobowiązania spółki:',
    options: [
      { letter: 'A', text: 'nie odpowiadają' },
      { letter: 'B', text: 'odpowiadają solidarnie' },
      { letter: 'C', text: 'odpowiadają solidarnie, ale tylko wtedy, kiedy umowa spółki tak stanowi' },
      { letter: 'D', text: 'odpowiadają solidarnie wraz z członkami zarządu spółki' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'B',
    explanation: 'Osoby działające przed wpisem spółki komandytowej odpowiadają solidarnie.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'KRS i rejestry'
  },
  {
    id: 44,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 7,
    question: 'Firma spółki jawnej powinna zawierać nazwiska lub firmy (nazwy) wszystkich wspólników albo nazwisko albo firmę (nazwę) jednego albo kilku wspólników oraz dodatkowe oznaczenie „spółka jawna"; dopuszczalne jest używanie w obrocie skrótu:',
    options: [
      { letter: 'A', text: '„s.j."' },
      { letter: 'B', text: '„sp. jaw."' },
      { letter: 'C', text: '„sp. j."' },
      { letter: 'D', text: '„s. jaw."' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'C',
    explanation: 'art. 24 § 2 KSH – skrót spółki jawnej: „sp. j.".',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'Spółka jawna'
  },
  {
    id: 45,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 8,
    question: 'Jeżeli wspólnik spółki jawnej zobowiązał się wnieść tytułem wkładu do spółki rzeczy inne niż pieniądze na własność lub do używania, wówczas do jego obowiązku świadczenia i ryzyka przypadkowej utraty przedmiotu świadczenia stosuje się odpowiednio przepisy o:',
    options: [
      { letter: 'A', text: 'przechowaniu' },
      { letter: 'B', text: 'darowiźnie' },
      { letter: 'C', text: 'pożyczce' },
      { letter: 'D', text: 'sprzedaży lub o najmie' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'D',
    explanation: 'art. 49 KSH – odpowiednio przepisy o sprzedaży albo najmie.',
    status: 'pewne',
    observedMarked: ['D'],
    topic: 'Spółka jawna'
  },
  {
    id: 46,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 9,
    question: 'Spółka z ograniczoną odpowiedzialnością w organizacji, wobec której zarząd dokonał likwidacji, ulega rozwiązaniu z dniem:',
    options: [
      { letter: 'A', text: 'zatwierdzenia przez zgromadzenie wspólników sprawozdania likwidacyjnego' },
      { letter: 'B', text: 'ustanowienia likwidatora albo likwidatorów przez zgromadzenie wspólników' },
      { letter: 'C', text: 'wykreślenia spółki z ograniczoną odpowiedzialnością w organizacji z rejestru przedsiębiorców' },
      { letter: 'D', text: 'podjęcia uchwały o likwidacji bezwzględną większością głosów' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'A',
    explanation: 'art. 170 KSH – rozwiązanie po zatwierdzeniu sprawozdania likwidacyjnego.',
    status: 'pewne',
    observedMarked: ['A'],
    topic: 'KRS i rejestry'
  },
  {
    id: 47,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 10,
    question: 'W przypadku, gdy udział lub udziały w spółce z ograniczoną odpowiedzialnością są objęte wspólnością majątkową małżeńską:',
    options: [
      { letter: 'A', text: 'umowa spółki z ograniczoną odpowiedzialnością nie może ograniczyć ani wyłączyć wstąpienia do spółki współmałżonka wspólnika' },
      { letter: 'B', text: 'umowa spółki z ograniczoną odpowiedzialnością może ograniczyć lub wyłączyć wstąpienie do spółki współmałżonka wspólnika' },
      { letter: 'C', text: 'umowa spółki z ograniczoną odpowiedzialnością nie może ograniczyć ani wyłączyć wstąpienia do spółki współmałżonka wspólnika, chyba że współmałżonek wyrazi uprzednio zgodę na ograniczenie lub wyłączenie wstąpienia do spółki' },
      { letter: 'D', text: 'małżonkowi wspólnika przysługuje roszczenie do spółki o wypłatę całej dywidendy na ręce tego małżonka' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'B',
    explanation: 'W materiale występują sprzeczne zaznaczenia. Przyjęto brzmienie art. 183¹ KSH: umowa może ograniczyć albo wyłączyć wstąpienie małżonka.',
    status: 'do weryfikacji',
    observedMarked: ['B', 'C'],
    topic: 'Spółka z o.o.'
  },
  {
    id: 48,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 11,
    question: 'Jeżeli umowa spółki z ograniczoną odpowiedzialnością nie stanowi inaczej, do zarządu tej spółki mogą być powołane:',
    options: [
      { letter: 'A', text: 'osoby spośród wspólników, a nie mogą być powołane osoby spoza ich grona' },
      { letter: 'B', text: 'osoby spoza grona wspólników, a nie mogą być powołane osoby spośród wspólników' },
      { letter: 'C', text: 'osoby spośród wspólników lub spoza ich grona' },
      { letter: 'D', text: 'żadna z powyższych odpowiedzi nie jest prawidłowa' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'C',
    explanation: 'Do zarządu mogą być powołani wspólnicy albo osoby spoza ich grona.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'Spółka z o.o.'
  },
  {
    id: 49,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 12,
    question: 'Wynagrodzenie likwidatorów spółki z ograniczoną odpowiedzialnością, których ustanowił sąd, określa:',
    options: [
      { letter: 'A', text: 'uchwała wspólników spółki z ograniczoną odpowiedzialnością' },
      { letter: 'B', text: 'uchwała zarządu spółki z ograniczoną odpowiedzialnością' },
      { letter: 'C', text: 'umowa ze spółką, zawarta po otwarciu likwidacji w formie pisemnej pod rygorem nieważności' },
      { letter: 'D', text: 'sąd, który ustanowił likwidatorów' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'D',
    explanation: 'Wynagrodzenie likwidatorów ustanowionych przez sąd określa sąd.',
    status: 'pewne',
    observedMarked: ['D'],
    topic: 'Spółka z o.o.'
  },
  {
    id: 50,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 13,
    question: 'Czynność prawna dokonana bez zgody właściwego organu spółki kapitałowej, wymaganej wyłącznie przez umowę spółki albo statut, jest:',
    options: [
      { letter: 'A', text: 'ważna' },
      { letter: 'B', text: 'nieważna' },
      { letter: 'C', text: 'nieważna tylko wówczas, gdy druga strona tej czynności wiedziała o wymogu uzyskania takiej zgody albo jest to jednostronna czynność prawna' },
      { letter: 'D', text: 'względnie bezskuteczna' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'A',
    explanation: 'W materiale występują sprzeczne zaznaczenia. Przyjęto art. 17 § 3 KSH: zgoda wymagana tylko przez umowę/statut nie wpływa na ważność czynności.',
    status: 'do weryfikacji',
    observedMarked: ['A', 'B'],
    topic: 'Spółki osobowe / ogólne'
  },
  {
    id: 51,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 14,
    question: 'Otwarcie likwidacji spółki z ograniczoną odpowiedzialnością:',
    options: [
      { letter: 'A', text: 'nie wpływa na udzieloną wcześniej prokurę' },
      { letter: 'B', text: 'powoduje wygaśnięcie prokury wszystkich prokurentów' },
      { letter: 'C', text: 'powoduje wygaśnięcie prokury, może jednak być w okresie likwidacji ustanowiona ona ponownie' },
      { letter: 'D', text: 'powoduje ograniczenie zdolności prokurenta do dokonywania czynności prawnych' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'B',
    explanation: 'Otwarcie likwidacji powoduje wygaśnięcie prokury.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'Spółka z o.o.'
  },
  {
    id: 52,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 15,
    question: 'Jeżeli zarząd spółki z ograniczoną odpowiedzialnością jest wieloosobowy, powołanie prokurenta w tej spółce wymaga zgody:',
    options: [
      { letter: 'A', text: 'większości członków zarządu tej spółki' },
      { letter: 'B', text: 'rady nadzorczej tej spółki' },
      { letter: 'C', text: 'wszystkich członków zarządu tej spółki' },
      { letter: 'D', text: 'wszystkich członków zarządu uprawnionych do reprezentacji spółki' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'C',
    explanation: 'Powołanie prokurenta wymaga zgody wszystkich członków zarządu.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'Spółka z o.o.'
  },
  {
    id: 53,
    source: 'ZESTAW III A (czysty, bez zaznaczeń)',
    originalNo: 16,
    question: 'Zbycie udziałów spółki z ograniczoną odpowiedzialnością w postępowaniu egzekucyjnym:',
    options: [
      { letter: 'A', text: 'wymaga zgody spółki przed jej wpisem do rejestru' },
      { letter: 'B', text: 'zawsze wymaga zgody spółki' },
      { letter: 'C', text: 'wymaga zgody sądu lub innego organu, nadzorującego postępowanie egzekucyjne' },
      { letter: 'D', text: 'nie jest uregulowane w k.s.h.' }
    ],
    sources: ['ZESTAW III A (czysty, bez zaznaczeń)'],
    answer: 'C',
    explanation: 'Pytanie jest niefortunnie sformułowane; KSH reguluje sprzedaż egzekucyjną udziału w art. 185, gdy umowa ogranicza zbycie. Przyjęto najbliższą odpowiedź C.',
    status: 'do weryfikacji',
    observedMarked: ['D'],
    topic: 'Spółka z o.o.'
  },
  {
    id: 54,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 1,
    question: 'O ile przepis szczególny nie stanowi inaczej, podmiot wpisany do KRS jest obowiązany umieszczać w oświadczeniach pisemnych, skierowanych, w zakresie swojej działalności, do oznaczonych osób (z wyjątkiem osób pozostających ze spółką wpisaną do Rejestru w stałych stosunkach umownych) i organów, między innymi następujące dane:',
    options: [
      { letter: 'A', text: 'oznaczenie sądu rejestrowego, w którym przechowywane są akta rejestrowe tego podmiotu oraz numer tego podmiotu w Rejestrze' },
      { letter: 'B', text: 'imiona i nazwiska osób uprawnionych do reprezentacji tego podmiotu i sposób jego reprezentacji' },
      { letter: 'C', text: 'numer REGON nadany temu podmiotowi' },
      { letter: 'D', text: 'żadne z powyższych' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'A',
    explanation: 'W materiale zaznaczono REGON, ale dane z art. 34 ustawy o KRS obejmują m.in. sąd rejestrowy i numer KRS, nie REGON.',
    status: 'do weryfikacji',
    observedMarked: ['C'],
    topic: 'KRS i rejestry'
  },
  {
    id: 55,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 2,
    question: 'Czynność prawna dokonana bez zgody właściwego organu spółki kapitałowej, wymaganej wyłącznie przez umowę spółki albo statut, jest:',
    options: [
      { letter: 'A', text: 'nieważna' },
      { letter: 'B', text: 'ważna' },
      { letter: 'C', text: 'nieważna tylko wówczas, gdy druga strona tej czynności wiedziała o wymogu uzyskania takiej zgody albo jest to jednostronna czynność prawna' },
      { letter: 'D', text: 'względnie bezskuteczna' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'B',
    explanation: 'W materiale zaznaczono nieważność, ale art. 17 § 3 KSH wskazuje ważność, gdy zgoda jest wymagana wyłącznie umową/statutem.',
    status: 'do weryfikacji',
    observedMarked: ['A'],
    topic: 'Spółki osobowe / ogólne'
  },
  {
    id: 56,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 3,
    question: 'W przypadku stwierdzenia trwałego zaprzestania wykonywania przez przedsiębiorcę działalności gospodarczej, przedsiębiorca ten podlega wykreśleniu z CEIDG z urzędu:',
    options: [
      { letter: 'A', text: 'w drodze postanowienia wójta (burmistrza, prezydenta miasta) właściwego dla miejsca prowadzenia działalności gospodarczej przedsiębiorcy' },
      { letter: 'B', text: 'na podstawie wyroku sądu gospodarczego właściwego dla miejsca prowadzenia działalności gospodarczej przedsiębiorcy' },
      { letter: 'C', text: 'w drodze decyzji administracyjnej ministra właściwego do spraw gospodarki' },
      { letter: 'D', text: 'za zgodą zarządcy sukcesyjnego' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'C',
    explanation: 'W materiale zaznaczono inną odpowiedź; wykreślenie z CEIDG następuje w drodze decyzji ministra właściwego do spraw gospodarki.',
    status: 'do weryfikacji',
    observedMarked: ['B'],
    topic: 'CEIDG i przedsiębiorca'
  },
  {
    id: 57,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 4,
    question: 'Przedsiębiorca będący osobą fizyczną, który podejmuje działalność gospodarczą po raz pierwszy, nie podlega obowiązkowym ubezpieczeniom społecznym przez okres:',
    options: [
      { letter: 'A', text: '24 miesięcy od dnia podjęcia działalności gospodarczej' },
      { letter: 'B', text: '12 miesięcy od dnia podjęcia działalności gospodarczej' },
      { letter: 'C', text: '9 miesięcy od dnia podjęcia działalności gospodarczej' },
      { letter: 'D', text: '6 miesięcy od dnia podjęcia działalności gospodarczej' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'D',
    explanation: 'Ulga na start: 6 miesięcy bez obowiązkowych ubezpieczeń społecznych.',
    status: 'pewne',
    observedMarked: ['D'],
    topic: 'CEIDG i przedsiębiorca'
  },
  {
    id: 58,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 5,
    question: 'Umowa spółki jawnej może przewidywać:',
    options: [
      { letter: 'A', text: 'że wspólnik jest pozbawiony prawa reprezentowania spółki albo że jest uprawniony do jej reprezentowania tylko łącznie z innym wspólnikiem lub prokurentem' },
      { letter: 'B', text: 'ograniczenie prawa wspólnika do osobistego zasięgania informacji o stanie majątku i interesów spółki oraz umowne ograniczenie prawa do osobistego przeglądania ksiąg i dokumentów spółki' },
      { letter: 'C', text: 'wyłączenie prawa wspólnika do żądania rozwiązania spółki przez sąd z ważnych powodów' },
      { letter: 'D', text: 'ustanowienie zarządu spośród wspólników uprawnionych do reprezentowania spółki' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'A',
    explanation: 'W materiale zaznaczono wyłączenie prawa do sądowego rozwiązania, ale tego uprawnienia nie można skutecznie wyłączyć; prawidłowa jest modyfikacja reprezentacji.',
    status: 'do weryfikacji',
    observedMarked: ['C'],
    topic: 'Spółka jawna'
  },
  {
    id: 59,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 6,
    question: 'Osoba przystępująca do spółki jawnej:',
    options: [
      { letter: 'A', text: 'nie odpowiada za żadne zobowiązania spółki jawnej powstałe przed dniem jej przystąpienia' },
      { letter: 'B', text: 'odpowiada za zobowiązania spółki jawnej powstałe przed dniem jej przystąpienia' },
      { letter: 'C', text: 'nie odpowiada za zobowiązania spółki jawnej powstałe przed dniem jej przystąpienia wynikające z czynności cywilnoprawnych' },
      { letter: 'D', text: 'nie ponosi odpowiedzialności za szkodę wyrządzoną przez spółkę wspólnikowi występującemu ze spółki' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'B',
    explanation: 'Osoba przystępująca do spółki jawnej odpowiada także za wcześniejsze zobowiązania.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'Spółka jawna'
  },
  {
    id: 60,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 7,
    question: 'Jeżeli spółkę jawną zawarto na czas nieoznaczony, a umowa spółki nie stanowi inaczej, wspólnik może wypowiedzieć umowę spółki:',
    options: [
      { letter: 'A', text: 'na miesiąc przed końcem roku obrotowego' },
      { letter: 'B', text: 'na trzy miesiące przed końcem roku obrotowego' },
      { letter: 'C', text: 'na sześć miesięcy przed końcem roku obrotowego' },
      { letter: 'D', text: 'bez zachowania terminu wypowiedzenia' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'C',
    explanation: 'art. 61 KSH – 6 miesięcy przed końcem roku obrotowego.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'Spółka jawna'
  },
  {
    id: 61,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 8,
    question: 'Jeżeli umowa spółki jawnej nie stanowi inaczej, odwołać prokurę w spółce jawnej:',
    options: [
      { letter: 'A', text: 'mogą jedynie wszyscy wspólnicy działający łącznie' },
      { letter: 'B', text: 'może osoba trzecia będąca wierzycielem spółki' },
      { letter: 'C', text: 'może odwołać małżonek prokurenta' },
      { letter: 'D', text: 'może każdy wspólnik mający prawo prowadzenia spraw spółki' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'D',
    explanation: 'Prokurę w spółce jawnej może odwołać każdy wspólnik prowadzący sprawy spółki.',
    status: 'pewne',
    observedMarked: ['D'],
    topic: 'Spółka jawna'
  },
  {
    id: 62,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 9,
    question: 'Wartość nominalna udziału w spółce z ograniczoną odpowiedzialnością:',
    options: [
      { letter: 'A', text: 'nie może być niższa niż 50 złotych' },
      { letter: 'B', text: 'nie może być niższa niż 100 złotych' },
      { letter: 'C', text: 'powinna wynosić co najmniej 1 złoty' },
      { letter: 'D', text: 'nie może być wyższa niż 50 złotych' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'A',
    explanation: 'W materiale zaznaczono 1 zł, ale w sp. z o.o. nominalna wartość udziału nie może być niższa niż 50 zł.',
    status: 'do weryfikacji',
    observedMarked: ['C'],
    topic: 'Spółka z o.o.'
  },
  {
    id: 63,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 10,
    question: 'Spółka z ograniczoną odpowiedzialnością w organizacji powstaje z chwilą:',
    options: [
      { letter: 'A', text: 'zawarcia umowy spółki z ograniczoną odpowiedzialnością w organizacji' },
      { letter: 'B', text: 'zawarcia umowy spółki z ograniczoną odpowiedzialnością' },
      { letter: 'C', text: 'zgłoszenia spółki z ograniczoną odpowiedzialnością do rejestru przedsiębiorców' },
      { letter: 'D', text: 'wpisu spółki z ograniczoną odpowiedzialnością do rejestru przedsiębiorców' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'B',
    explanation: 'Spółka z o.o. w organizacji powstaje z chwilą zawarcia umowy spółki.',
    status: 'pewne',
    observedMarked: ['B'],
    topic: 'KRS i rejestry'
  },
  {
    id: 64,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 11,
    question: 'Wniosek o wpis spółki z ograniczoną odpowiedzialnością o zarządzie wieloosobowym do rejestru przedsiębiorców:',
    options: [
      { letter: 'A', text: 'podpisują wszyscy wspólnicy' },
      { letter: 'B', text: 'podpisuje co najmniej jeden członek zarządu' },
      { letter: 'C', text: 'podpisują wszyscy członkowie zarządu' },
      { letter: 'D', text: 'podpisują tylko członkowie zarządu uprawnieni do reprezentacji spółki' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'C',
    explanation: 'W materiale zaznaczono wspólników, ale zgłoszenie sp. z o.o. podpisują wszyscy członkowie zarządu.',
    status: 'do weryfikacji',
    observedMarked: ['A'],
    topic: 'KRS i rejestry'
  },
  {
    id: 65,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 12,
    question: 'W spółce z ograniczoną odpowiedzialnością członek zarządu i pracownik spółki:',
    options: [
      { letter: 'A', text: 'nie mogą być pełnomocnikami na zgromadzeniu wspólników, chyba że umowa spółki stanowi inaczej' },
      { letter: 'B', text: 'mogą być pełnomocnikami na zgromadzeniu wspólników, chyba że umowa spółki stanowi inaczej' },
      { letter: 'C', text: 'mogą być obecni podczas obrad zgromadzenia wspólników z prawem głosu, jeżeli nie są wspólnikami' },
      { letter: 'D', text: 'nie mogą być pełnomocnikami na zgromadzeniu wspólników' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'D',
    explanation: 'W materiale zaznaczono odpowiedź o obecności z głosem, ale członek zarządu i pracownik nie mogą być pełnomocnikami na zgromadzeniu wspólników.',
    status: 'do weryfikacji',
    observedMarked: ['C'],
    topic: 'Spółka z o.o.'
  },
  {
    id: 66,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 13,
    question: 'W spółce z ograniczoną odpowiedzialnością:',
    options: [
      { letter: 'A', text: 'zarząd jest obowiązany prowadzić księgę udziałów' },
      { letter: 'B', text: 'księgę udziałów prowadzi sąd rejestrowy' },
      { letter: 'C', text: 'spółka jest obowiązana do niezwłocznego zawarcia umowy o prowadzenie księgi udziałów' },
      { letter: 'D', text: 'nie ma obowiązku prowadzenia księgi udziałów od dnia 1 lutego 2023 roku' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'A',
    explanation: 'W materiale zaznaczono brak obowiązku księgi udziałów, ale księgę udziałów prowadzi zarząd.',
    status: 'do weryfikacji',
    observedMarked: ['D'],
    topic: 'Spółka z o.o.'
  },
  {
    id: 67,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 14,
    question: 'Uchwały wspólników spółki z ograniczoną odpowiedzialnością wymaga rozporządzenie prawem lub zaciągnięcie zobowiązania do świadczenia o wartości:',
    options: [
      { letter: 'A', text: 'przewyższającej o połowę wysokość kapitału zakładowego' },
      { letter: 'B', text: 'dwukrotnie przewyższającej wysokość kapitału zakładowego, chyba że umowa spółki stanowi inaczej' },
      { letter: 'C', text: 'równej wysokości kapitału zakładowego' },
      { letter: 'D', text: 'dwukrotnie przewyższającej wysokość kapitału zakładowego' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'B',
    explanation: 'art. 230 KSH – uchwały wymaga czynność ponad dwukrotność kapitału, chyba że umowa stanowi inaczej.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 68,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 15,
    question: 'W okresie likwidacji spółki z ograniczoną odpowiedzialnością:',
    options: [
      { letter: 'A', text: 'prokura może być ustanowiona tylko, jeżeli jest to niezbędne dla przeprowadzenia likwidacji' },
      { letter: 'B', text: 'prokura może być ustanowiona tylko z ważnych powodów, za zgodą sądu rejestrowego' },
      { letter: 'C', text: 'prokura nie może być ustanowiona' },
      { letter: 'D', text: 'prokura nie może być ustanowiona bez zgody zgromadzenia wspólników wyrażonej w formie uchwały' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'C',
    explanation: 'W okresie likwidacji sp. z o.o. nie można ustanowić prokury.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 69,
    source: 'ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami',
    originalNo: 16,
    question: 'Powództwo o uchylenie uchwały wspólników spółki z ograniczoną odpowiedzialnością należy wnieść w terminie:',
    options: [
      { letter: 'A', text: 'miesiąca od dnia otrzymania wiadomości o uchwale, nie później jednak niż w terminie dwunastu miesięcy od dnia powzięcia uchwały' },
      { letter: 'B', text: 'dwóch miesięcy od dnia otrzymania wiadomości o uchwale, nie później jednak niż w terminie dwunastu miesięcy od dnia powzięcia uchwały' },
      { letter: 'C', text: 'sześciu miesięcy od dnia powzięcia uchwały' },
      { letter: 'D', text: 'miesiąca od dnia otrzymania wiadomości o uchwale, nie później jednak niż w terminie sześciu miesięcy od dnia powzięcia uchwały' }
    ],
    sources: ['ZESTAW (GR_B) – inny wariant z zakreślonymi odpowiedziami'],
    answer: 'D',
    explanation: 'Przyjęto termin z art. 251 KSH: miesiąc od wiadomości, nie później niż 6 miesięcy od powzięcia uchwały.',
    status: 'do weryfikacji',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 70,
    source: 'ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)',
    originalNo: 9,
    question: 'W spółce z ograniczoną odpowiedzialnością:',
    options: [
      { letter: 'A', text: 'wspólnicy mają równe prawa i obowiązki, chyba że ustawa lub umowa spółki stanowi inaczej' },
      { letter: 'B', text: 'wspólnicy mają równe prawa i obowiązki w spółce' },
      { letter: 'C', text: 'wspólnicy mają równe prawa w spółce, a obowiązki tylko wtedy gdy umowa spółki tak stanowi' },
      { letter: 'D', text: 'wspólnicy mają równe prawa i obowiązki, chyba że umowa spółki stanowi inaczej' }
    ],
    sources: ['ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)'],
    answer: 'A',
    explanation: 'art. 174 KSH – równość praw i obowiązków, chyba że ustawa lub umowa stanowi inaczej.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 71,
    source: 'ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)',
    originalNo: 10,
    question: 'W spółce z ograniczoną odpowiedzialnością wspólnicy:',
    options: [
      { letter: 'A', text: 'odpowiadają za zobowiązania podatkowe spółki' },
      { letter: 'B', text: 'nigdy nie odpowiadają za zobowiązania spółki, jeżeli wkład do spółki wnieśli w całości' },
      { letter: 'C', text: 'odpowiadają za zobowiązania spółki do wysokości kapitału zakładowego' },
      { letter: 'D', text: 'odpowiadają za zobowiązania spółki o wartości przekraczającej wysokość kapitału zakładowego' }
    ],
    sources: ['ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)'],
    answer: 'B',
    explanation: 'Pytanie jest nieprecyzyjne; art. 151 § 4 KSH mówi, że wspólnicy nie odpowiadają za zobowiązania spółki. Z dostępnych wariantów najbliższa jest odpowiedź B.',
    status: 'do weryfikacji',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 72,
    source: 'ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)',
    originalNo: 11,
    question: 'W spółce z ograniczoną odpowiedzialnością wspólnicy:',
    options: [
      { letter: 'A', text: 'odpowiadają za zobowiązania spółki do wysokości kapitału zakładowego' },
      { letter: 'B', text: 'są zobowiązania do realizacji każdych świadczeń na żądanie spółki' },
      { letter: 'C', text: 'są zobowiązani jedynie do świadczeń określonych w umowie spółki' },
      { letter: 'D', text: 'są zobowiązani do świadczeń określonych w umowie spółki i innych zgłoszonych przez spółkę' }
    ],
    sources: ['ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)'],
    answer: 'C',
    explanation: 'Wspólnicy są zobowiązani do świadczeń przewidzianych umową spółki.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 73,
    source: 'ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)',
    originalNo: 12,
    question: 'W spółce z ograniczoną odpowiedzialnością:',
    options: [
      { letter: 'A', text: 'zawsze wszystkie udziały w spółce powinny być równe' },
      { letter: 'B', text: 'gdy wspólnik może mieć tylko jeden udział, wszystkie udziały w kapitale zakładowym powinny być równe i są niepodzielne' },
      { letter: 'C', text: 'wspólnik może mieć tylko więcej niż jeden udział' },
      { letter: 'D', text: 'gdy wspólnik może mieć więcej niż jeden udział, wszystkie udziały w kapitale zakładowym powinny być równe i są niepodzielne' }
    ],
    sources: ['ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)'],
    answer: 'D',
    explanation: 'art. 153 KSH – gdy można mieć więcej niż jeden udział, udziały są równe i niepodzielne.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 74,
    source: 'ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)',
    originalNo: 13,
    question: 'W spółce z ograniczoną odpowiedzialnością:',
    options: [
      { letter: 'A', text: 'udziały nie mogą być obejmowane poniżej ich wartości nominalnej' },
      { letter: 'B', text: 'udziały mogą być obejmowane poniżej ich wartości nominalnej, gdy umowa spółki tak stanowi' },
      { letter: 'C', text: 'udziały mogą być obejmowane poniżej ich wartości nominalnej' },
      { letter: 'D', text: 'udziały nie mogą być obejmowane poniżej ich wartości nominalnej, chyba że umowa spółki stanowi inaczej' }
    ],
    sources: ['ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)'],
    answer: 'A',
    explanation: 'Udziały nie mogą być obejmowane poniżej wartości nominalnej.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 75,
    source: 'ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)',
    originalNo: 14,
    question: 'Ile umowa spółki nie stanowi inaczej, uchwały wspólników spółki z ograniczoną odpowiedzialnością wymaga rozporządzenie prawem lub zaciągnięcie zobowiązania do świadczenia o wartości:',
    options: [
      { letter: 'A', text: 'przewyższającej o połowę wysokość kapitału zakładowego' },
      { letter: 'B', text: 'dwukrotnie przewyższającej wysokość kapitału zakładowego, chyba że umowa spółki stanowi inaczej' },
      { letter: 'C', text: 'równej wysokości kapitału zakładowego' },
      { letter: 'D', text: 'dwukrotnie przewyższającej wysokość kapitału zakładowego' }
    ],
    sources: ['ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)'],
    answer: 'D',
    explanation: 'art. 230 KSH – gdy umowa nie stanowi inaczej, chodzi o wartość dwukrotnie przewyższającą kapitał.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 76,
    source: 'ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)',
    originalNo: 15,
    question: 'W jednoosobowej spółce z ograniczoną odpowiedzialnością:',
    options: [
      { letter: 'A', text: 'wszystkie uprawnienia przysługujące zgromadzeniu wspólników wykonuje notariusz' },
      { letter: 'B', text: 'wszystkie uprawnienia przysługujące zgromadzeniu wspólników zawsze wykonuje pełnomocnik wspólnika' },
      { letter: 'C', text: 'wszystkie uprawnienia przysługujące zgromadzeniu wspólników wykonuje jedyny wspólnik' },
      { letter: 'D', text: 'wszystkie uprawnienia przysługujące zgromadzeniu wspólników wykonuje sąd rejestrowy' }
    ],
    sources: ['ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)'],
    answer: 'C',
    explanation: 'W jednoosobowej sp. z o.o. uprawnienia zgromadzenia wykonuje jedyny wspólnik.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 77,
    source: 'ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)',
    originalNo: 16,
    question: 'Umowa spółki z ograniczoną odpowiedzialnością może nie określać:',
    options: [
      { letter: 'A', text: 'wysokości kapitału zakładowego' },
      { letter: 'B', text: 'siedziby spółki' },
      { letter: 'C', text: 'czy wspólnik może mieć jeden udział' },
      { letter: 'D', text: 'czasu trwania spółki, jeżeli jest nieoznaczony' }
    ],
    sources: ['ZESTAW (GR_C) – tylko strona 2 (pytania 9–16)'],
    answer: 'D',
    explanation: 'Czas trwania wpisuje się tylko, gdy jest oznaczony.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 78,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 1,
    question: 'Krajowy Rejestr Sądowy składa się między innymi z:',
    options: [
      { letter: 'A', text: 'rejestru dłużników niewypłacalnych' },
      { letter: 'B', text: 'krajowego rejestru zadłużonych' },
      { letter: 'C', text: 'centralnego rejestru beneficjentów rzeczywistych' },
      { letter: 'D', text: 'centralnego rejestru skazanych' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'A',
    explanation: 'KRS obejmuje m.in. rejestr dłużników niewypłacalnych.',
    status: 'pewne',
    observedMarked: [],
    topic: 'KRS i rejestry'
  },
  {
    id: 79,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 2,
    question: 'W przypadku przeniesienia ogółu praw i obowiązków wspólnika spółki osobowej na inną osobę, za zobowiązania występującego wspólnika związane z uczestnictwem w spółce osobowej i zobowiązania tej spółki osobowej:',
    options: [
      { letter: 'A', text: 'odpowiada jedynie występujący wspólnik' },
      { letter: 'B', text: 'odpowiadają solidarnie występujący wspólnik oraz wspólnik przystępujący do spółki' },
      { letter: 'C', text: 'odpowiada jedynie wspólnik przystępujący do spółki' },
      { letter: 'D', text: 'odpowiada jedynie występujący wspólnik uprawniony do reprezentacji spółki' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'B',
    explanation: 'art. 10 § 3 KSH – odpowiedzialność solidarna występującego i przystępującego wspólnika.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółki osobowe / ogólne'
  },
  {
    id: 80,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 3,
    question: 'W okresie zawieszenia wykonywania działalności gospodarczej przedsiębiorca:',
    options: [
      { letter: 'A', text: 'nie może zostać poddany kontroli na zasadach przewidzianych dla przedsiębiorców wykonujących działalność gospodarczą' },
      { letter: 'B', text: 'nie może przyjmować należności' },
      { letter: 'C', text: 'może zbywać własne środki trwałe i wyposażenie' },
      { letter: 'D', text: 'nie może odwołać zarządcy sukcesyjnego' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'C',
    explanation: 'W okresie zawieszenia przedsiębiorca może zbywać własne środki trwałe i wyposażenie.',
    status: 'pewne',
    observedMarked: [],
    topic: 'CEIDG i przedsiębiorca'
  },
  {
    id: 81,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 4,
    question: 'Spółkami osobowymi są:',
    options: [
      { letter: 'A', text: 'spółka jawna, spółka partnerska, spółka cywilna i spółka komandytowa' },
      { letter: 'B', text: 'spółka jawna, spółka partnerska i spółka komandytowa' },
      { letter: 'C', text: 'spółka jawna, prosta spółka akcyjna, spółka komandytowo-akcyjna i spółka komandytowa' },
      { letter: 'D', text: 'spółka jawna, spółka partnerska, spółka komandytowa i spółka komandytowo-akcyjna' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'D',
    explanation: 'Spółki osobowe KSH: jawna, partnerska, komandytowa, komandytowo-akcyjna.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka komandytowa'
  },
  {
    id: 82,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 5,
    question: 'Partnerami w spółce partnerskiej mogą być osoby uprawnione do wykonywania – między innymi – następujących zawodów:',
    options: [
      { letter: 'A', text: 'aptekarza, doradcy podatkowego, tłumacza przysięgłego' },
      { letter: 'B', text: 'nauczyciela, notariusza, lekarza dentysty' },
      { letter: 'C', text: 'adwokata, biegłego rewidenta, policjanta' },
      { letter: 'D', text: 'lekarza dentysty, radcy prawnego, maklera giełd towarowych' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'A',
    explanation: 'Wskazane w A zawody mieszczą się w katalogu zawodów partnerskich.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka partnerska'
  },
  {
    id: 83,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 6,
    question: 'W przypadku zamieszczenia nazwiska lub firmy (nazwy) komandytariusza w firmie spółki komandytowej, komandytariusz ten:',
    options: [
      { letter: 'A', text: 'odpowiada wobec osób trzecich do wysokości sumy komandytowej wskazanej w umowie spółki' },
      { letter: 'B', text: 'odpowiada wobec osób trzecich tak jak komplementariusz' },
      { letter: 'C', text: 'nabywa wszystkie prawa i obowiązki komplementariusza' },
      { letter: 'D', text: 'traci uprawnienia wynikające z umowy spółki' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'B',
    explanation: 'Komandytariusz ujawniony w firmie odpowiada wobec osób trzecich jak komplementariusz.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka komandytowa'
  },
  {
    id: 84,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 7,
    question: 'Spółka komandytowa powstaje z chwilą:',
    options: [
      { letter: 'A', text: 'zawarcia umowy spółki przez wspólników' },
      { letter: 'B', text: 'wniesienia wkładów przez wspólników' },
      { letter: 'C', text: 'wpisu do rejestru przedsiębiorców' },
      { letter: 'D', text: 'uzyskania osobowości prawnej' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'C',
    explanation: 'Spółka komandytowa powstaje z chwilą wpisu do rejestru przedsiębiorców.',
    status: 'pewne',
    observedMarked: [],
    topic: 'KRS i rejestry'
  },
  {
    id: 85,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 8,
    question: 'Jeżeli komplementariuszem spółki komandytowej jest spółka z ograniczoną odpowiedzialnością, zaś komandytariuszem jest wspólnik tej spółki (z ograniczoną odpowiedzialnością), wkładu komandytariusza nie mogą stanowić:',
    options: [
      { letter: 'A', text: 'jego udziały w tej spółce z ograniczoną odpowiedzialnością komandytowej, ale tylko wtedy, gdy umowa spółki komandytowej tak stanowi' },
      { letter: 'B', text: 'jego środki pieniężne uzyskane z zysku tej spółki z ograniczoną odpowiedzialnością' },
      { letter: 'C', text: 'jego udziały w spółce zależnej od tej spółki z ograniczoną odpowiedzialnością' },
      { letter: 'D', text: 'jego udziały w tej spółce z ograniczoną odpowiedzialnością' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'D',
    explanation: 'art. 107 § 3 KSH – wkładem komandytariusza nie mogą być jego udziały w sp. z o.o. będącej komplementariuszem.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka komandytowa'
  },
  {
    id: 86,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 9,
    question: 'Otwarcie likwidacji spółki z ograniczoną odpowiedzialnością:',
    options: [
      { letter: 'A', text: 'powoduje wygaśnięcie prokury wszystkich prokurentów' },
      { letter: 'B', text: 'nie wpływa na udzieloną wcześniej prokurę' },
      { letter: 'C', text: 'powoduje wygaśnięcie prokury, może jednak być w okresie likwidacji ustanowiona ona ponownie' },
      { letter: 'D', text: 'powoduje ograniczenie zdolności prokurenta do dokonywania czynności prawnych' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'A',
    explanation: 'Otwarcie likwidacji powoduje wygaśnięcie prokury.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 87,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 10,
    question: 'W spółce z ograniczoną odpowiedzialnością, wspólnik, który wniósł wkłady niepieniężne oraz członkowie zarządu, którzy, wiedząc o tym, zgłosili spółkę do rejestru przedsiębiorców, obowiązani są:',
    options: [
      { letter: 'A', text: 'solidarnie wyrównać spółce brakującą wartość, jeżeli wartość wkładów niepieniężnych została znacznie zawyżona w stosunku do ich wartości nominalnej w dniu zawarcia umowy spółki' },
      { letter: 'B', text: 'solidarnie wyrównać spółce brakującą wartość, jeżeli wartość wkładów niepieniężnych została znacznie zawyżona w stosunku do ich wartości zbywczej w dniu zawarcia umowy spółki' },
      { letter: 'C', text: 'solidarnie wyrównać spółce brakującą wartość, jeżeli wartość wkładów niepieniężnych została znacznie zawyżona w stosunku do ich wartości bilansowej w dniu sporządzenia sprawozdania finansowego kończącego pierwszy pełny rok obrotowy' },
      { letter: 'D', text: 'solidarnie naprawić wyrządzoną szkodę' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'B',
    explanation: 'art. 175 KSH – znaczne zawyżenie wartości zbywczej aportu.',
    status: 'pewne',
    observedMarked: [],
    topic: 'KRS i rejestry'
  },
  {
    id: 88,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 11,
    question: 'W spółce z ograniczoną odpowiedzialnością, jeżeli w wyniku rezygnacji członka zarządu żaden mandat w zarządzie nie byłby obsadzony, członek zarządu składa rezygnację:',
    options: [
      { letter: 'A', text: 'spółce, listem poleconym na jej adres' },
      { letter: 'B', text: 'sądowi rejestrowemu' },
      { letter: 'C', text: 'wspólnikom, zwołując jednocześnie zgromadzenie wspólników w spółce inaczej' },
      { letter: 'D', text: 'wspólnikom i prokurentowi, jeżeli prokurent został ustanowiony w spółce' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'C',
    explanation: 'Rezygnacja ostatniego członka zarządu wymaga zwołania zgromadzenia wspólników.',
    status: 'pewne',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 89,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 12,
    question: 'Jeżeli wspólnik spółki z ograniczoną odpowiedzialnością może mieć więcej niż jeden udział, wówczas wszystkie udziały w kapitale zakładowym:',
    options: [
      { letter: 'A', text: 'nie muszą być równe i są niepodzielne' },
      { letter: 'B', text: 'powinny być równe i są niepodzielne' },
      { letter: 'C', text: 'mogą być nierówne i są zbywalne' },
      { letter: 'D', text: 'powinny być równe i są niepodzielne' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'B',
    explanation: 'Wariant B i D mają identyczne brzmienie w załączniku; przyjęto B jako jedną odpowiedź techniczną.',
    status: 'do weryfikacji',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 90,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 13,
    question: 'Informacje na stronach internetowych spółki z ograniczoną odpowiedzialnością nie muszą zawierać:',
    options: [
      { letter: 'A', text: 'statystycznego numeru identyfikacyjnego (REGON) spółki' },
      { letter: 'B', text: 'numeru identyfikacji podatkowej (NIP) spółki' },
      { letter: 'C', text: 'numeru, pod którym spółka wpisana jest do rejestru przedsiębiorców' },
      { letter: 'D', text: 'jeżeli spółka należy do grupy spółek oznaczenia grupy spółek' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'A',
    explanation: 'Informacje na stronie sp. z o.o. nie muszą obejmować REGON.',
    status: 'pewne',
    observedMarked: [],
    topic: 'KRS i rejestry'
  },
  {
    id: 91,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 14,
    question: 'Spółka kapitałowa w organizacji przed wpisem do rejestru przedsiębiorców:',
    options: [
      { letter: 'A', text: 'nie może podjąć działalności gospodarczej' },
      { letter: 'B', text: 'może podjąć działalność gospodarczą, chyba że sąd rejestrowy wyrazi na to zgodę' },
      { letter: 'C', text: 'nie może podjąć działalności gospodarczej, chyba że sąd rejestrowy zgłosi sprzeciw w terminie 7 dni' },
      { letter: 'D', text: 'może podjąć działalność gospodarczą przed wpisem spółki kapitałowej do rejestru' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'D',
    explanation: 'Spółka kapitałowa w organizacji może podjąć działalność przed wpisem.',
    status: 'pewne',
    observedMarked: [],
    topic: 'KRS i rejestry'
  },
  {
    id: 92,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 15,
    question: 'Rozporządzenie udziałem albo akcją dokonane przed wpisem spółki kapitałowej do rejestru przedsiębiorców jest:',
    options: [
      { letter: 'A', text: 'ważne' },
      { letter: 'B', text: 'ważne, ale wymaga potwierdzenia przez osobę dokonującą rozporządzenia' },
      { letter: 'C', text: 'nieważne' },
      { letter: 'D', text: 'bezskuteczne w stosunku do spółki' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'C',
    explanation: 'art. 16 KSH – rozporządzenie udziałem/akcją przed wpisem spółki jest nieważne.',
    status: 'pewne',
    observedMarked: [],
    topic: 'KRS i rejestry'
  },
  {
    id: 93,
    source: 'ZESTAW III D (czysty, bez zaznaczeń)',
    originalNo: 16,
    question: 'Spółka z ograniczoną odpowiedzialnością może być utworzona przez:',
    options: [
      { letter: 'A', text: 'jedną osobę fizyczną lub prawną' },
      { letter: 'B', text: 'co najmniej jedną osobę fizyczną i prawną' },
      { letter: 'C', text: 'jedną lub więcej osób' },
      { letter: 'D', text: 'jedną albo więcej osób' }
    ],
    sources: ['ZESTAW III D (czysty, bez zaznaczeń)'],
    answer: 'D',
    explanation: 'Wariant C i D są znaczeniowo zbliżone; przyjęto odpowiedź zgodną z literalnym brzmieniem KSH: „jedną albo więcej osób".',
    status: 'do weryfikacji',
    observedMarked: [],
    topic: 'Spółka z o.o.'
  },
  {
    id: 94,
    source: 'ZESTAW (gr_F) – wariant z zakreślonymi odpowiedziami',
    originalNo: 1,
    question: 'Wpisy do Krajowego Rejestru Sądowego podlegają obowiązkowi ogłoszenia:',
    options: [
      { letter: 'A', text: 'na stronie internetowej sądu rejestrowego, chyba że ustawa stanowi inaczej' },
      { letter: 'B', text: 'na stronie internetowej Sądu Okręgowego w Warszawie, chyba że ustawa stanowi inaczej' },
      { letter: 'C', text: 'w Monitorze Sądowym i Gospodarczym, chyba że ustawa stanowi inaczej' },
      { letter: 'D', text: 'na stronie internetowej spółki, chyba że ustawa stanowi inaczej' }
    ],
    sources: ['ZESTAW (gr_F) – wariant z zakreślonymi odpowiedziami'],
    answer: 'C',
    explanation: 'Wpisy KRS ogłasza się w Monitorze Sądowym i Gospodarczym.',
    status: 'pewne',
    observedMarked: ['C'],
    topic: 'KRS i rejestry'
  }
]

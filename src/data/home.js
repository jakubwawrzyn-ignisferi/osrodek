// src/data/home.js
// Treść sekcji strony głównej. Fakty pochodzą ze starej strony rozanystok-salezjanie.pl
// i z plakatu naboru. Elementy oznaczone "DO POTWIERDZENIA" warto sprawdzić z ośrodkiem.
//
// Tytuł, opis i zdjęcie w sekcji Hero można nadpisać w WordPressie polami ACF
// strony głównej (hero_title, hero_text, hero_image) - patrz src/pages/index.astro.

export const hero = {
  eyebrow: 'Różanystok, Podlasie',
  title: 'Miejsce, w którym młodzi ludzie odzyskują kierunek',
  text:
    'Salezjański Dom Młodzieżowy w Różanymstoku. Wychowanie, terapia i nauka zawodu w duchu systemu prewencyjnego św. Jana Bosko.',
};

// Liczby pod sekcją Hero. DO POTWIERDZENIA: aktualność liczb.
export const stats = [
  { value: '80', label: 'wychowanków znalazło u nas opiekę' },
  { value: '50', label: 'miejsc w bursie dla młodzieży z całej Polski' },
  { value: '2012', label: 'rok otwarcia Młodzieżowego Ośrodka Socjoterapii' },
  { value: 'I miejsce', label: 'za program edukacyjno-wychowawczy (Goniądz 2015)' },
];

// "Jak pracujemy" - metody z plakatu naboru. `icon` to nazwa ikony z biblioteki lucide.
export const methods = [
  { icon: 'Users', title: 'Społeczność terapeutyczna' },
  { icon: 'HeartHandshake', title: 'System prewencyjny św. Jana Bosko' },
  { icon: 'Target', title: 'Terapia skoncentrowana na rozwiązaniach (TSR)' },
  { icon: 'MessageCircleHeart', title: 'Indywidualne wsparcie psychologiczne i pedagogiczne' },
  { icon: 'Sparkles', title: 'Pedagogika cyrku i wolontariat' },
  { icon: 'Activity', title: 'Biofeedback' },
];

// "Co oferujemy" - zajęcia z plakatu naboru.
export const activities = [
  'Jazda konna we własnej stadninie',
  'Zajęcia sportowe',
  'Survival',
  'Zajęcia artystyczno-teatralne',
  'Szachy',
  'Wyjazdy turystyczno-krajoznawcze',
];

// Placówki wchodzące w skład Domu Młodzieżowego (opisy ze starej strony).
export const units = [
  {
    icon: 'HeartHandshake',
    short: 'MOS',
    name: 'Młodzieżowy Ośrodek Socjoterapii im. św. Józefa',
    text:
      'Dla chłopców zagrożonych niedostosowaniem społecznym. Przyjęcie na wniosek rodzica lub opiekuna prawnego, na podstawie orzeczenia poradni psychologiczno-pedagogicznej.',
  },
  {
    icon: 'House',
    short: 'MOW',
    name: 'Salezjański Ośrodek Wychowawczy im. św. Jana Bosko',
    text:
      'Placówka resocjalizacyjna dla chłopców niedostosowanych społecznie, kierowanych na podstawie postanowienia sądu rodzinnego.',
  },
  {
    icon: 'School',
    short: 'Szkoły podstawowe',
    name: 'Szkoły Podstawowe Specjalne nr 1 i nr 2',
    text:
      'Niepubliczne szkoły o uprawnieniach szkół publicznych, działające przy MOW i MOS. Nauka jest bezpłatna.',
  },
  {
    icon: 'Hammer',
    short: 'Szkoła branżowa',
    name: 'Branżowa Szkoła Specjalna I stopnia',
    text:
      'Dwuletnia nauka zawodu stolarza, zajęcia praktyczne w szkolnej pracowni stolarskiej i egzamin potwierdzający kwalifikacje.',
  },
];

// Nabór - kroki przyjęcia (z wpisu "Nabór 2025-2026").
export const admission = {
  title: 'Nabór na nowy rok szkolny',
  text: 'Przyjmujemy chłopców do Młodzieżowego Ośrodka Socjoterapii. Zadzwoń - chętnie odpowiemy na pytania i umówimy rozmowę.',
  steps: [
    { icon: 'FileText', title: 'Podanie', text: 'Podanie rodzica lub opiekuna prawnego.' },
    {
      icon: 'ClipboardList',
      title: 'Orzeczenie',
      text: 'Orzeczenie z poradni psychologiczno-pedagogicznej o zagrożeniu niedostosowaniem społecznym.',
    },
    {
      icon: 'MessagesSquare',
      title: 'Rozmowa',
      text: 'Rozmowa wstępna z kandydatem i opiekunem prawnym w Różanymstoku.',
    },
  ],
};

// src/data/site.js
// Stałe dane ośrodka używane w wielu miejscach (stopka, pasek pomocy, podstrona standardów).
// Zmiana numeru telefonu czy adresu e-mail - tylko tutaj.
//
// UWAGA: numery telefonów przepisane ze strony "Kontakt" na rozanystok-salezjanie.pl.
// Stopka starej strony podaje inne (stacjonarne) numery - do potwierdzenia z ośrodkiem.

export const organization = {
  name: 'Salezjański Dom Młodzieżowy',
  patron: 'im. św. Jana Bosko w Różanymstoku',
  address: {
    street: 'Różanystok 13b',
    city: '16-200 Dąbrowa Białostocka',
  },
};

// Placówki wchodzące w skład Domu Młodzieżowego.
export const units = [
  {
    short: 'MOS',
    name: 'Młodzieżowy Ośrodek Socjoterapii im. św. Józefa',
    phones: [{ label: 'Telefon', number: '728 887 570' }],
    email: 'mos@rozanystok-salezjanie.pl',
    facebook:
      'https://www.facebook.com/pages/category/Education/M%C5%82odzie%C5%BCowy-O%C5%9Brodek-Socjoterapii-im-%C5%9Aw-J%C3%B3zefa-w-R%C3%B3%C5%BCanymstoku-1088196101248804/',
  },
  {
    short: 'MOW',
    name: 'Salezjański Ośrodek Wychowawczy im. św. Jana Bosko',
    // Pierwszy numer jest numerem głównym (pasek pomocy, stopka). Grupy - tylko na stronie Kontakt.
    phones: [
      { label: 'Sekretariat', number: '795 459 374' },
      { label: 'Grupa I', number: '728 887 571' },
      { label: 'Grupa II', number: '728 887 572' },
      { label: 'Grupa III', number: '728 887 573' },
      { label: 'Grupa IV', number: '728 887 574' },
    ],
    email: 'sow@rozanystok-salezjanie.pl',
    facebook:
      'https://www.facebook.com/pages/category/Elementary-School/Salezja%C5%84ski-O%C5%9Brodek-Wychowawczy-w-R%C3%B3%C5%BCanymstoku-171404902912329',
  },
];

// Bezpłatne telefony pomocowe - pasek nad stopką i podstrona standardów.
export const helplines = [
  { label: 'Telefon zaufania dla dzieci i młodzieży', number: '116 111' },
  { label: 'Dziecięcy Telefon Zaufania Rzecznika Praw Dziecka', number: '800 12 12 12' },
];

// Podstrony z informacjami wymaganymi przepisami - kolumna "Informacje" w stopce i kafelki na /dokumenty.
// `slug` to adres strony w WordPressie, z której pobierana jest treść (i adres podstrony).
// `always: true` - podstrona ma własny plik w src/pages i jest zawsze widoczna.
// Pozostałe powstają (src/pages/[slug].astro) i pojawiają się w stopce oraz na /dokumenty dopiero,
// gdy w WP istnieje opublikowana strona o tym slugu z treścią. Dzięki temu nie publikujemy
// pustych stron "w przygotowaniu" - wystarczy utworzyć stronę w WP i przebudować serwis.
export const legalPages = [
  { label: 'Standardy ochrony małoletnich', slug: 'standardy-ochrony', always: true, icon: 'ShieldCheck', color: 'green' },
  { label: 'Polityka prywatności', slug: 'polityka-prywatnosci', icon: 'FileText', color: 'brown' },
  { label: 'Ochrona danych (RODO)', slug: 'ochrona-danych', icon: 'FileText', color: 'navy' },
  { label: 'Deklaracja dostępności', slug: 'deklaracja-dostepnosci', icon: 'Accessibility', color: 'teal' },
];

// Strony prawne, które mają co pokazać, z gotowym adresem.
// pages - mapa slug -> strona z getAllPages() (src/lib/wordpress.js).
export function availableLegalPages(pages) {
  return legalPages
    .filter((item) => item.always || pages.get(item.slug)?.contentHtml)
    .map((item) => ({ ...item, href: `/${item.slug}/` }));
}

// "728 887 570" -> "tel:+48728887570" (link, który na telefonie od razu dzwoni).
// Numery skrócone (np. 116 111) zostają bez prefiksu kraju.
export function telHref(number) {
  const digits = number.replace(/\D/g, '');
  return digits.length === 9 ? `tel:+48${digits}` : `tel:${digits}`;
}

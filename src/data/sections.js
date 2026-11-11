// src/data/sections.js
// Układ strony głównej i podstron z kafelkami (wg projektów graficznych klienta).
//
// Każdy kafelek ma:
//   slug  - adres podstrony (np. "grupa-cyrkowa" -> /grupa-cyrkowa). Treść i zdjęcie podstrony
//           pochodzą ze strony WordPressa o TYM SAMYM slugu (zdjęcie = obrazek wyróżniający).
//           Gdy takiej strony w WP nie ma, podstrona nie powstaje, a kafelek nie jest linkiem
//           (bez strzałki). Wystarczy utworzyć stronę w WP i przebudować serwis.
//   href  - (opcjonalnie) gotowy adres, gdy kafelek prowadzi do istniejącej strony (np. /news).
//   label - napis na kafelku
//   icon  - nazwa ikony z biblioteki lucide (lista dostępnych w src/components/Icon/Icon.jsx)
//   color - kolor kwadratu z ikoną: green, brown, bordo, navy, teal
//
// DO POTWIERDZENIA z ośrodkiem: listy kafelków przepisane z projektów graficznych.

// --- Strona główna: dwie połowy ---
export const home = {
  slogan: 'Miejsce, w którym rozwijamy potencjał',
  halves: [
    {
      // Strona WP "szkola-branzowa" (jeśli istnieje) = link w tytule połowy
      slug: 'szkola-branzowa',
      theme: 'warm',
      eyebrow: 'Szkoła branżowa I stopnia',
      title: 'Szkoła zawodowa',
      lead: ['Praktyczne umiejętności', 'lepszy start w przyszłość'],
      tiles: [
        { slug: 'kucharz', label: 'Kucharz', icon: 'ChefHat', color: 'brown' },
        { slug: 'stolarz', label: 'Stolarz', icon: 'Hammer', color: 'brown' },
        { slug: 'aktualnosci', href: '/news', label: 'Aktualności', icon: 'Newspaper', color: 'brown' },
        {
          slug: 'nasze-dzialania',
          href: '/dzialania-wychowawczo-terapeutyczne',
          label: 'Nasze działania',
          icon: 'Users',
          color: 'brown',
        },
      ],
    },
    {
      // Strona WP "szkola-podstawowa" (jeśli istnieje) = link w tytule połowy
      slug: 'szkola-podstawowa',
      theme: 'green',
      eyebrow: 'Szkoła podstawowa',
      title: 'Klasy VI–VIII',
      lead: ['Nauka', 'Rozwój', 'Pasje', 'Wsparcie'],
      tiles: [
        { slug: 'nasz-dom', label: 'Nasz dom', icon: 'House', color: 'green' },
        {
          slug: 'zaplecze-sportowo-rekreacyjne',
          href: '/zaplecze-sportowo-rekreacyjne',
          label: 'Zaplecze sportowo-rekreacyjne',
          icon: 'Volleyball',
          color: 'green',
        },
        {
          slug: 'dzialania-wychowawczo-terapeutyczne',
          href: '/dzialania-wychowawczo-terapeutyczne',
          label: 'Działania wychowawczo-terapeutyczne',
          icon: 'HandHeart',
          color: 'green',
        },
        {
          slug: 'grupy-zainteresowan',
          href: '/grupy-zainteresowan',
          label: 'Grupy zainteresowań',
          icon: 'Users',
          color: 'green',
        },
        { slug: 'wolontariat', label: 'Wolontariat', icon: 'HeartHandshake', color: 'green' },
        {
          slug: 'festiwal-mlodziezy-bez-granic',
          label: 'Festiwal młodzieży bez granic',
          icon: 'PartyPopper',
          color: 'green',
        },
      ],
    },
  ],
};

// --- Podstrony z siatką kafelków ---
// Zdjęcie w nagłówku: obrazek wyróżniający strony WP o slugu podstrony.
// columns - (opcjonalnie) najwięcej kafelków w rzędzie, domyślnie 5.
export const sections = [
  {
    slug: 'grupy-zainteresowan',
    titleTop: 'Grupy',
    titleBottom: 'zainteresowań',
    words: ['Pasja', 'Rozwój', 'Wspólne doświadczenia'],
    note: 'Każdy talent ma znaczenie',
    tagline: 'Wspólne pasje tworzą silniejszych ludzi',
    columns: 4,
    tiles: [
      { slug: 'grupa-cyrkowa', label: 'Grupa cyrkowa', icon: 'Tent', color: 'bordo' },
      { slug: 'grupa-survival', label: 'Grupa survival', icon: 'Mountain', color: 'green' },
      { slug: 'grupa-jezdziecka', label: 'Grupa jeździecka', icon: 'ChessKnight', color: 'brown' },
      { slug: 'grupa-rowerowa', label: 'Grupa rowerowa', icon: 'Bike', color: 'teal' },
      { slug: 'grupa-wedkarska', label: 'Grupa wędkarska', icon: 'Fish', color: 'navy' },
      { slug: 'grupa-kulinarna', label: 'Grupa kulinarna', icon: 'ChefHat', color: 'brown' },
      { slug: 'grupa-wolontariatu', label: 'Grupa wolontariatu', icon: 'HandHeart', color: 'green' },
    ],
  },
  {
    slug: 'dzialania-wychowawczo-terapeutyczne',
    titleTop: 'Działania',
    titleBottom: 'wychowawczo-terapeutyczne',
    words: ['Wsparcie', 'Rozwój', 'Relacje', 'Lepsze jutro'],
    note: 'Razem w stronę lepszych możliwości',
    tagline: 'Wspólne doświadczenia tworzą silniejszych ludzi',
    tiles: [
      { slug: 'zjazdy-rodzicow', label: 'Zjazdy rodziców', icon: 'Users', color: 'brown' },
      { slug: 'spolecznosc-terapeutyczna', label: 'Społeczność terapeutyczna', icon: 'UsersRound', color: 'green' },
      {
        slug: 'wsparcie-wychowawcy-i-psychologa',
        label: 'Wsparcie wychowawcy i psychologa',
        icon: 'MessageCircle',
        color: 'green',
      },
      { slug: 'zajecia-socjoterapii', label: 'Zajęcia socjoterapii', icon: 'HandHeart', color: 'brown' },
      { slug: 'zajecia-sportowe', label: 'Zajęcia sportowe', icon: 'PersonStanding', color: 'green' },
      { slug: 'zajecia-artystyczne', label: 'Zajęcia artystyczne', icon: 'Palette', color: 'brown' },
      { slug: 'obozy-integracyjne', label: 'Obozy integracyjne', icon: 'TentTree', color: 'green' },
      { slug: 'wycieczki', label: 'Wycieczki', icon: 'MapPin', color: 'brown' },
      { slug: 'ergoterapia', label: 'Ergoterapia', icon: 'Settings', color: 'green' },
      { slug: 'nauka', label: 'Nauka', icon: 'BookOpen', color: 'brown' },
      { slug: 'zycie-duchowe', label: 'Życie duchowe', icon: 'Cross', color: 'green' },
      { slug: 'rozwoj-zainteresowan', label: 'Rozwój zainteresowań', icon: 'Guitar', color: 'brown' },
      { slug: 'zajecia-teatralne', label: 'Zajęcia teatralne', icon: 'Drama', color: 'green' },
      { slug: 'biofeedback', label: 'Biofeedback', icon: 'Brain', color: 'brown' },
    ],
  },
  {
    slug: 'zaplecze-sportowo-rekreacyjne',
    titleTop: 'Zaplecze',
    titleBottom: 'sportowo-rekreacyjne',
    words: ['Aktywność', 'Pasja', 'Integracja', 'Dobre relacje'],
    note: 'Ruch to lepsze jutro',
    tagline: 'Wspólna przestrzeń dla aktywnego rozwoju',
    tiles: [
      { slug: 'sala-widowiskowa', label: 'Sala widowiskowo-teatralna', icon: 'Drama', color: 'brown' },
      { slug: 'stadnina-koni', label: 'Stadnina koni', icon: 'ChessKnight', color: 'green' },
      { slug: 'zespol-boisk', label: 'Zespół boisk', icon: 'Goal', color: 'brown' },
      { slug: 'sala-gimnastyczna', label: 'Sala gimnastyczna', icon: 'Dumbbell', color: 'green' },
      { slug: 'ogrod', label: 'Ogród', icon: 'Sprout', color: 'brown' },
      { slug: 'stawy-rybne', label: 'Stawy rybne', icon: 'Fish', color: 'brown' },
      { slug: 'altana-z-grillem', label: 'Altana z grillem', icon: 'Flame', color: 'green' },
      { slug: 'kajaki', label: 'Kajaki', icon: 'Kayak', color: 'brown' },
      { slug: 'rowery', label: 'Rowery', icon: 'Bike', color: 'green' },
      { slug: 'silownia', label: 'Siłownia', icon: 'Dumbbell', color: 'green' },
    ],
  },
];

// Adres, pod który prowadzi kafelek, albo null, gdy nie ma dokąd prowadzić.
// Kafelek z własną podstroną (bez gotowego `href`) jest linkiem dopiero wtedy, gdy w WP istnieje
// strona o jego slugu - dzięki temu nie publikujemy pustych podstron "w przygotowaniu".
// pages - mapa slug -> strona z getAllPages() (src/lib/wordpress.js).
export function tileHref(tile, pages) {
  if (tile.href) return tile.href;
  return pages.has(tile.slug) ? `/${tile.slug}` : null;
}

// Kafelki gotowe do wyświetlenia: adres + zdjęcie z obrazka wyróżniającego strony WP o tym slugu.
export function withImages(tiles, pages) {
  return tiles.map((tile) => ({
    href: tileHref(tile, pages),
    label: tile.label,
    icon: tile.icon,
    color: tile.color,
    image: pages.get(tile.slug)?.cardImage ?? null,
  }));
}

// Podstrony kafelków i obu szkół, które mają swoją stronę w WP, razem ze stroną, z której się
// do nich wchodzi - potrzebne do wygenerowania podstron w src/pages/[slug].astro.
export function getTilePages(pages) {
  const result = [];
  const homeLink = { label: 'Strona główna', href: '/' };
  const add = (item, parent) => {
    if (!item.href && pages.has(item.slug)) result.push({ ...item, parent });
  };

  for (const half of home.halves) {
    add({ slug: half.slug, label: half.title }, homeLink);
    for (const tile of half.tiles) add(tile, homeLink);
  }

  for (const section of sections) {
    const parent = { label: `${section.titleTop} ${section.titleBottom}`, href: `/${section.slug}` };
    for (const tile of section.tiles) add(tile, parent);
  }

  return result;
}

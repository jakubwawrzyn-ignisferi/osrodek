// src/lib/wordpress.js
// Jedno miejsce do pobierania danych z WordPressa (REST API).
// Strony nie wołają fetch() bezpośrednio, tylko funkcje z tego pliku.

const WP_URL = (import.meta.env.WP_URL || '').replace(/\/+$/, '');

// Pobiera JSON z WP REST API.
// - W trybie dev (astro dev) błąd jest tylko logowany, a strona pokazuje treść zastępczą,
//   żeby dało się pracować nad wyglądem nawet przy wyłączonym WP.
// - Przy budowaniu produkcyjnym (astro build) błąd przerywa build. Dzięki temu
//   chwilowa awaria WP nie skończy się opublikowaniem pustej strony.
async function wpFetch(path) {
  if (!WP_URL) {
    return handleError(new Error('Brak zmiennej WP_URL. Ustaw ją w pliku .env (wzór w .env.example).'));
  }

  const url = `${WP_URL}/wp-json/wp/v2${path}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`WordPress zwrócił ${res.status} ${res.statusText} dla ${url}`);
    }
    return { data: await res.json(), headers: res.headers };
  } catch (error) {
    return handleError(error, url);
  }
}

function handleError(error, url = '') {
  if (import.meta.env.PROD) {
    throw error;
  }
  console.warn(`[wordpress] Nie udało się pobrać danych${url ? ` (${url})` : ''}: ${error.message}`);
  return null;
}

// WordPress zamienia znaki w tytułach na kody HTML (np. „ -> &#8222;, – -> &#8211;).
// Tytuły wstawiamy jako zwykły tekst, więc trzeba je zamienić z powrotem na znaki.
const NAMED_ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  hellip: '…', ndash: '–', mdash: '—', laquo: '«', raquo: '»',
  bdquo: '„', ldquo: '“', rdquo: '”', lsquo: '‘', rsquo: '’', sbquo: '‚',
};

export function decodeEntities(text = '') {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, name) => NAMED_ENTITIES[name.toLowerCase()] ?? match);
}

// Tytuł jako czysty tekst: bez znaczników HTML i z odkodowanymi znakami.
function plainTitle(rendered, fallback) {
  const text = decodeEntities((rendered || '').replace(/<[^>]*>/g, '')).trim();
  return text || fallback;
}

// Obrazek wyróżniający ustawiony w WP. `size` to nazwa rozmiaru wygenerowanego przez WP
// (np. 'medium_large' ~768 px) - na kafelki nie ma sensu ściągać pełnej rozdzielczości.
function featuredImage(item, size) {
  const media = item._embedded?.['wp:featuredmedia']?.[0];
  if (!media?.source_url) return null;
  const sized = size && media.media_details?.sizes?.[size]?.source_url;
  return { url: sized || media.source_url, alt: media.alt_text || '' };
}

// Pierwszy obraz z treści wpisu - zapasowo, gdy wpis nie ma obrazka wyróżniającego.
function firstContentImage(html = '') {
  const tag = html.match(/<img\b[^>]*>/i)?.[0];
  const url = tag?.match(/\bsrc="([^"]+)"/i)?.[1];
  if (!url) return null;
  const alt = tag.match(/\balt="([^"]*)"/i)?.[1] || '';
  return { url: decodeEntities(url), alt: decodeEntities(alt) };
}

// Zajawka jako czysty tekst. WP kończy skrócone zajawki znakiem "[…]" - zamieniamy go na "…".
function plainExcerpt(rendered = '') {
  return decodeEntities(rendered.replace(/<[^>]*>/g, ''))
    .replace(/\s*\[…\]\s*$/, '…')
    .replace(/\s+/g, ' ')
    .trim();
}

// Zamienia surowy obiekt z WP na prosty obiekt używany przez komponenty.
// Dzięki temu komponenty nie muszą znać struktury odpowiedzi WP.
function normalizePost(post) {
  const contentHtml = post.content?.rendered || '';
  return {
    id: post.id,
    slug: post.slug,
    date: post.date,
    dateLabel: formatDate(post.date),
    title: plainTitle(post.title?.rendered, 'Bez tytułu'),
    excerpt: plainExcerpt(post.excerpt?.rendered),
    contentHtml,
    // Obrazek wyróżniający - na górze strony wpisu.
    image: featuredImage(post),
    // Obraz na kafelek: wyróżniający, a jeśli go nie ma - pierwszy obraz z treści.
    cardImage: featuredImage(post, 'medium_large') || firstContentImage(contentHtml),
  };
}

function normalizePage(page) {
  return {
    id: page.id,
    slug: page.slug,
    title: plainTitle(page.title?.rendered, ''),
    contentHtml: page.content?.rendered || '',
    image: featuredImage(page),
    // Pola dodane wtyczką ACF (Advanced Custom Fields). Gdy strona nie ma żadnych pól,
    // ACF zwraca pustą tablicę zamiast obiektu - wtedy podstawiamy pusty obiekt.
    fields: page.acf && !Array.isArray(page.acf) ? page.acf : {},
  };
}

// Strona WP o podanym slugu albo null, jeśli nie istnieje / WP nie odpowiada.
export async function getPage(slug) {
  const result = await wpFetch(`/pages?slug=${encodeURIComponent(slug)}&_embed`);
  const page = result?.data?.[0];
  return page ? normalizePage(page) : null;
}

// Zamienia wartość pola obrazka z ACF na { url, alt }.
// W zależności od ustawień pola ACF zwraca ID obrazka, obiekt albo sam adres URL,
// więc obsługujemy wszystkie trzy warianty. `size` to preferowany rozmiar z WP
// (np. '2048x2048'); jeśli go nie ma, bierzemy oryginał.
export async function getImageField(value, size = 'large') {
  if (!value) return null;

  if (typeof value === 'string') {
    return { url: value, alt: '' };
  }

  if (typeof value === 'number') {
    const result = await wpFetch(`/media/${value}`);
    const media = result?.data;
    if (!media?.source_url) return null;
    return {
      url: media.media_details?.sizes?.[size]?.source_url || media.source_url,
      alt: media.alt_text || '',
    };
  }

  if (typeof value === 'object' && value.url) {
    return { url: value.sizes?.[size] || value.url, alt: value.alt || '' };
  }

  return null;
}

// Najnowsze wpisy (domyślnie 3).
export async function getLatestPosts(count = 3) {
  const result = await wpFetch(`/posts?per_page=${count}&_embed`);
  return (result?.data ?? []).map(normalizePost);
}

// Wszystkie wpisy. WP oddaje maksymalnie 100 na stronę, więc pobieramy kolejne strony.
export async function getAllPosts() {
  const posts = [];
  let page = 1;
  let totalPages = 1;

  do {
    const result = await wpFetch(`/posts?per_page=100&page=${page}&_embed`);
    if (!result) break;
    posts.push(...result.data);
    totalPages = Number(result.headers.get('X-WP-TotalPages')) || 1;
    page += 1;
  } while (page <= totalPages);

  return posts.map(normalizePost);
}

// Data w polskim formacie, np. "8 listopada 2026".
export function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

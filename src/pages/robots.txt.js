// src/pages/robots.txt.js - plik /robots.txt dla wyszukiwarek.
// Gdy znany jest adres strony (SITE_URL), dopisujemy link do mapy strony.
// Przy NOINDEX=true mapy strony nie ma. Indeksowanie blokuje wtedy znacznik noindex na każdej
// podstronie (Layout.astro), a nie "Disallow" - roboty muszą wejść na stronę, żeby go zobaczyć.
export function GET({ site }) {
  const lines = ['User-agent: *', 'Allow: /'];
  if (site && import.meta.env.NOINDEX !== 'true') {
    lines.push('', `Sitemap: ${new URL('/sitemap-index.xml', site).href}`);
  }
  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

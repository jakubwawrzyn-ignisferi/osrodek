// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Adres strony, np. https://mos.tiu.pl (zmienna SITE_URL w .env, wzór w .env.example).
// Dopóki nie jest ustawiony, nie powstaje mapa strony (sitemap), a w <head> brakuje znaczników
// wymagających pełnego adresu (canonical, og:url). Reszta strony działa normalnie.
// NOINDEX=true (adres tymczasowy) wyłącza mapę strony - strona ma nie trafiać do wyszukiwarek.
const { SITE_URL, NOINDEX } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const withSitemap = Boolean(SITE_URL) && NOINDEX !== 'true';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL || undefined,
  integrations: [react(), ...(withSitemap ? [sitemap()] : [])],
});

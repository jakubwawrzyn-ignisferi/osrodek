// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Docelowy adres strony, np. https://www.rozanystok-salezjanie.pl (zmienna SITE_URL w .env).
// Dopóki nie jest ustawiony, nie powstaje mapa strony (sitemap), a w <head> brakuje znaczników
// wymagających pełnego adresu (canonical, og:url). Reszta strony działa normalnie.
const { SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: SITE_URL || undefined,
  integrations: [react(), ...(SITE_URL ? [sitemap()] : [])],
});

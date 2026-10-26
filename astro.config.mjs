import { defineConfig } from 'astro/config';

// Sitio 100% estático: `npm run build` deja todo en dist/ y nginx lo sirve.
export default defineConfig({
  site: 'https://alterumingenieria.com',
  trailingSlash: 'ignore',
});

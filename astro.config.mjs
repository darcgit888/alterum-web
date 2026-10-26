import { defineConfig } from 'astro/config';

// Sitio 100% estático: `npm run build` deja todo en dist/ y nginx lo sirve.
export default defineConfig({
  site: 'https://alterumingenieria.com',
  trailingSlash: 'ignore',
  // politica-de-calidad.html en vez de politica-de-calidad/index.html: la dirección abre
  // directo, sin redirigir a la versión con "/" al final.
  build: { format: 'file' },
});

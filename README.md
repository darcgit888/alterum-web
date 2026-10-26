# Sitio web de ALTERUM Ingeniería

`alterumingenieria.com` · sitio estático hecho con [Astro](https://astro.build), publicado en el
servidor de Diego con Coolify.

## Arrancar en tu computadora

Necesitas [Node.js 22 o más](https://nodejs.org) y Git.

```bash
git clone https://github.com/darcgit888/alterum-web.git
cd alterum-web
npm install
npm run dev        # abre http://localhost:4321
```

## Dónde está cada cosa

| Archivo | Qué es |
|---|---|
| `src/data/empresa.ts` | Nombre, correo, servicios. **Todo dato del sitio sale de aquí** |
| `src/layouts/Base.astro` | Encabezado, menú y pie, iguales en todas las páginas |
| `src/pages/*.astro` | Una página por archivo: `index.astro` es `/`, `politica-de-calidad.astro` es `/politica-de-calidad` |
| `src/styles/global.css` | Colores de la marca (gris `#58585a`, amarillo `#ffb800`) y estilos generales |
| `public/` | Imágenes y archivos que se sirven tal cual |

## Cómo se trabaja (léelo antes del primer cambio)

1. **Nunca se trabaja sobre `main`.** Está bloqueada: lo que entra ahí sale al público.
2. Crea una rama por cada cambio: `git switch -c pagina-nosotros`.
3. Sube tu rama y abre un **Pull Request** en GitHub. Diego lo revisa y lo aprueba.
4. Al aprobarlo, el sitio se publica solo en unos minutos.

## Reglas del contenido

- **Nada inventado.** Ni obras, ni clientes, ni años de experiencia, ni cifras sin fuente.
  Si un dato no tiene de dónde salir, no va.
- **ISO 9001: siempre "en proceso de certificación".** Nunca "certificados".
- **La Política de Calidad está firmada.** No se corrige ni una coma en el sitio: cambiarla exige
  una revisión nueva con la consultora.
- **Logos de otras empresas** solo con su permiso.
- **Imágenes ligeras:** fotos en `.webp` o `.jpg`, máximo ~1600 px de ancho y menos de 300 KB.
  Nada de PNG pesados.
- **Ninguna contraseña ni clave en el código.** Este repositorio es público.
- Revisa cada página en el celular (375 px de ancho) antes de abrir el Pull Request.

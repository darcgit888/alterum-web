# Instrucciones para Claude Code — sitio de ALTERUM Ingeniería

Quien trabaja aquí es **Ángel**, practicante. Está aprendiendo: explica en corto **por qué** haces
cada cosa, no solo qué. Si te pide algo que rompe una regla de abajo, dile cuál y por qué.

## Stack
Astro estático (sin servidor, sin base de datos). CSS propio con los tokens de
`src/styles/global.css`. No agregues dependencias sin una razón clara; revisa antes que existan
con `npm view <paquete>`.

## Reglas que no se negocian
1. **Nunca commits a `main`.** Siempre rama nueva + Pull Request; Diego aprueba.
2. **Nada inventado** (obras, clientes, cifras, años). Los datos viven en `src/data/empresa.ts`
   con su fuente al lado.
3. **ISO 9001 = "en proceso de certificación".** Nunca "certificados".
4. **La Política de Calidad es un documento firmado:** el texto no se edita.
5. **Repositorio público:** cero contraseñas, llaves o tokens en el código.
6. **Celular primero:** todo se revisa a 375 px de ancho.
7. **Imágenes:** `.webp`/`.jpg`, ≤1600 px, <300 KB, siempre con `width`, `height` y `alt`.

## Antes de abrir el Pull Request
`npm run build` tiene que terminar sin errores.

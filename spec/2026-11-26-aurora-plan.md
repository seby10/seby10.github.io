# Plan de implementación: Aurora

Especificación: [2026-11-26-aurora.md](2026-11-26-aurora.md) · Rama: `rediseno/aurora` · Ejecución en línea, un commit por tarea.

**Restricciones globales** (de la especificación): JS total ≤ 70 KB comprimido · Lighthouse ≥ 95 en las cuatro categorías · axe 0 violaciones · 320–1440 px sin desborde · todo el contenido visible sin JS · `prefers-reduced-motion` sin animación · sin datos inventados · commits sin coautoría.

## Mapa de archivos

| Archivo | Responsabilidad |
|---|---|
| `src/data/perfil.ts` | Todo el copy que no es un proyecto (reemplaza `edicion.ts`) |
| `src/content.config.ts` | Esquema de `casos`: sin `nota` ni `porMejorar`, con `stack` |
| `src/styles/global.css` | Tokens, tipografía, layout, componentes |
| `src/layouts/Base.astro` | Metadatos, barra con logo, loader, scripts globales |
| `src/components/Logo.astro` | Monograma SC en SVG (constelación) |
| `src/components/Loader.astro` | Loader de primera visita |
| `src/components/Aurora.astro` | Canvas de la portada, luna y fondo CSS de respaldo |
| `src/components/Seccion.astro` | Cabecera de sección con título y número |
| `src/components/TarjetaProyecto.astro` | Tarjeta de proyecto |
| `src/scripts/aurora.ts` | Shader WebGL: aurora, estrellas, hiperespacio |
| `src/scripts/luna.ts` | Fase lunar del día |
| `src/scripts/movimiento.ts` | GSAP: descifrado, palabra que rota, entradas, brillo de tarjetas |
| `src/scripts/huevos.ts` | Estrellas fugaces, Konami, consola |
| `src/pages/index.astro` | Portada y secciones |
| `src/pages/casos/[id].astro` | Página de caso |
| `src/pages/404.astro` | Perdido en el espacio |

## Tareas

1. **Base visual y datos.** Instalar `gsap` y `@fontsource-variable/bricolage-grotesque`; quitar Fraunces. Escribir `perfil.ts` con el copy nuevo (revisado con `anti-ai-slop-writing`). Ajustar el esquema y los Markdown de casos (`stack`, quitar `nota`). Reescribir `global.css`. Nuevo `Base.astro` con logo y navegación. Borrar `Nota`, `Capitulo`, `Fila`, `edicion.ts`. Comprobar: `npm run build`.
2. **Portada y secciones** en HTML estático: portada, sobre mí, proyectos, más proyectos, experiencia, stack, formación, contacto. Comprobar en el navegador a 375 y 1280 px, sin JS.
3. **Página de caso** con la plantilla nueva. Comprobar los cinco casos.
4. **Aurora y luna.** Shader WebGL con estrellas, cursor, pausa fuera de pantalla, DPR ≤ 1,5, cuadro fijo con movimiento reducido, respaldo CSS sin WebGL. Fase lunar con prueba de fechas conocidas (luna llena y nueva) en `luna.ts`. Comprobar FPS y consola.
5. **Loader y movimiento GSAP.** Loader de primera visita (≤ 1,2 s, se salta). Descifrado del nombre, palabra que rota, entradas con ScrollTrigger, brillo de tarjetas. Comprobar con y sin movimiento reducido.
6. **Easter eggs y 404.** Estrella fugaz y deseo, Konami e hiperespacio, mensaje de consola, astronauta en la 404. Comprobar cada uno a mano.
7. **Cierre.** Favicon, `apple-touch-icon` y `og.png` con el monograma. Lighthouse, axe, anchos, teclado, peso del JS. Actualizar `README.md` y `PROYECTO.md`.

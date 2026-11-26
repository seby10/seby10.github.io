# seby10.github.io

Portafolio de Sebastián Constante, publicado en [seby10.github.io](https://seby10.github.io) en español y en [inglés](https://seby10.github.io/en/).

Noche profunda con celeste (el del Macará) y lima. Hecho con [Astro](https://astro.build), [GSAP](https://gsap.com) para el movimiento y una galaxia de partículas en WebGL escrita a mano, sin Three.js. Se publica solo en GitHub Pages.

Registro de decisiones: [PROYECTO.md](PROYECTO.md).

## Trabajar en local

Necesita Node 22.23 o superior.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # compila la versión publicada en dist/
npm run preview    # sirve dist/ para revisarla antes de publicar
npm run cv         # regenera los PDF del CV (necesita Microsoft Edge)
```

## Dónde está cada cosa

| Para cambiar | Archivo |
|---|---|
| Un proyecto | `src/content/casos/es/<id>.md` y `src/content/casos/en/<id>.md` (mismas claves) |
| Sus capturas | `src/assets/casos/` |
| Todo el texto del sitio y del CV | `src/i18n/es.ts` y `src/i18n/en.ts` (misma forma) |
| Correo, GitHub, LinkedIn | `datos` en `src/i18n/es.ts` |
| Los campos de un proyecto | `src/content.config.ts` |
| Colores, tipografía, espaciado | `src/styles/global.css` (tokens al inicio) |
| La portada y sus secciones | `src/components/Inicio.astro` |
| Página de un proyecto | `src/components/Caso.astro` |
| CV | `src/components/CV.astro` → `public/cv/*.pdf` con `npm run cv` |
| Logo (monograma SC) | `src/components/Logo.astro`, `public/favicon.svg` y la figura de `src/scripts/particulas.ts` |
| Iconos | `src/components/Icono.astro` (marcas de simple-icons e iconos propios) |
| Imagen al compartir | `public/og.png` y `public/og-en.png` (1200×630) |

### Movimiento

| Archivo | Qué hace |
|---|---|
| `src/scripts/particulas.ts` | Galaxia de partículas: forma el monograma, se dispersa al bajar, el cursor la aparta. Arranca con la primera interacción; sin GPU queda el cielo en CSS |
| `src/scripts/movimiento.ts` | GSAP: letras del título, palabra que rota, frase que se ilumina, carril horizontal de proyectos, entradas, cursor propio, botones magnéticos |
| `src/scripts/huevos.ts` | Easter eggs |

Con `prefers-reduced-motion` no se anima nada. Sin JavaScript todo el contenido se ve.

### Easter eggs

- Escribir «macara» o tocar el balón en «Fuera del código»: ¡Vamos, Macará! Las partículas forman MACARÁ, cae confeti celeste y azul y cruza un balón.
- ↑ ↑ ↓ ↓ ← → ← → B A: salto al hiperespacio.
- Clic en el cielo de la portada: estrella fugaz; atrapar tres concede un deseo.
- Un cohete en la consola del navegador.
- La 404 tiene un astronauta perdido.

## Recetas

### Añadir un proyecto

1. Guarda la captura en `src/assets/casos/`, de unos 1600 px de ancho. Sin datos reales de personas: difumina lo privado.
2. Crea `src/content/casos/es/<id>.md` y su par en `src/content/casos/en/<id>.md`. Copia uno parecido:
   - `seccion: caso` lo pone en el carril de proyectos con página propia; `seccion: archivo`, en «Más proyectos».
   - `orden` decide la posición.
   - `rol`: tu parte en una línea. `metricas`: datos que puedas demostrar (commits, tamaño del equipo).
   - Un valor que contenga `: ` va entre comillas.
3. El cuerpo del archivo es «El problema», en uno o dos párrafos.
4. `npm run dev`, revísalo en los dos idiomas y regenera el CV con `npm run cv`.

### Añadir experiencia, un certificado o una tecnología

Añade el elemento en `src/i18n/es.ts` y en `src/i18n/en.ts` (`experiencia.lista`, `formacion.logros` o `stack.grupos`), con la misma forma que los demás. Lo más reciente va primero. Un certificado con insignia en Credly lleva su enlace en `url`. Después, `npm run cv`.

### Cuando cambie tu situación

Revisa `portada` y `sobre` en los dos archivos de `src/i18n/`: es lo primero que se lee. Al conseguir empleo, cambia `portada.disponible`; al graduarte, `formacion.detalle`. Si cambia el titular, actualiza también el README de perfil de GitHub, LinkedIn y el CV.

### Escribir el texto

Directo y en primera persona. Qué hiciste, con qué y para quién. Nada de «apasionado», «innovador» o «soluciones»; ningún dato que no puedas demostrar.

## Publicar

Cada push a `main` compila y publica el sitio con `.github/workflows/deploy.yml`. Tarda un par de minutos; el avance se ve en la pestaña **Actions**.

Antes de publicar:

1. `npm run build` sin errores.
2. `npm run preview` y una vuelta por la portada y los casos, en el celular también.
3. Ningún dato privado nuevo en capturas ni textos.

GitHub Pages debe tener **Settings › Pages › Source** en **GitHub Actions**. Si está en «Deploy from a branch», el sitio queda en blanco.

Para revisar calidad después de un cambio grande: Lighthouse en la página publicada (Chrome o Edge, DevTools › Lighthouse). El 2026-11-26 dio 97–100 en rendimiento y 100 en accesibilidad, buenas prácticas y SEO, en celular y escritorio. Si algo baja, la causa suele ser una imagen nueva demasiado grande.

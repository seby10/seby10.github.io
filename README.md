# seby10.github.io

Portafolio de Sebastián Constante, publicado en [seby10.github.io](https://seby10.github.io).

Un cielo nocturno con aurora boreal en verde y celeste. Está hecho con [Astro](https://astro.build), [GSAP](https://gsap.com) para el movimiento y un shader WebGL escrito a mano para la aurora, sin Three.js. Se publica solo en GitHub Pages.

La especificación del diseño está en [spec/2026-11-26-aurora.md](spec/2026-11-26-aurora.md) y el registro de decisiones en [PROYECTO.md](PROYECTO.md).

## Trabajar en local

Necesita Node 22.23 o superior.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # compila la versión publicada en dist/
npm run preview    # sirve dist/ para revisarla antes de publicar
npm test           # comprueba el cálculo de la fase lunar
```

## Dónde está cada cosa

| Para cambiar | Archivo |
|---|---|
| Un proyecto | `src/content/casos/<nombre>.md` |
| Sus capturas | `src/assets/casos/` |
| Portada, sobre mí, experiencia, stack, formación, contacto | `src/data/perfil.ts` |
| Los campos que acepta un proyecto | `src/content.config.ts` |
| Colores, tipografía, espaciado | `src/styles/global.css` (tokens al inicio) |
| Barra, metadatos, loader | `src/layouts/Base.astro`, `src/components/Loader.astro` |
| Orden de las secciones | `src/pages/index.astro` |
| Retrato | `src/assets/sebastian.jpg` (cuadrado) |
| Logo (constelación SC) | `src/components/Logo.astro` y `public/favicon.svg` |
| Imagen al compartir, iconos | `public/og.png` (1200×630), `public/favicon.png`, `public/apple-touch-icon.png` |

### Movimiento

| Archivo | Qué hace |
|---|---|
| `src/scripts/aurora.ts` | Shader de la aurora, estrellas e hiperespacio. Arranca con la primera interacción o a los 3 s; sin GPU se queda el cielo en CSS |
| `src/scripts/movimiento.ts` | GSAP: loader, nombre que se descifra, palabra que rota, entradas al hacer scroll, brillo de tarjetas |
| `src/scripts/huevos.ts` | Easter eggs |
| `src/scripts/luna.ts` | Fase lunar del día |

Con `prefers-reduced-motion` no se anima nada. Sin JavaScript todo el contenido se ve igual.

### Easter eggs

- Un clic en el cielo de la portada lanza una estrella fugaz; atrapar tres concede un deseo.
- ↑ ↑ ↓ ↓ ← → ← → B A: salto al hiperespacio.
- Un mensaje en la consola del navegador.
- La luna muestra la fase real del día.
- La 404 tiene un astronauta perdido.

## Recetas

### Añadir un proyecto

1. Guarda las capturas en `src/assets/casos/`. PNG o JPG, de unos 1600 px de ancho. Sin datos reales de personas: si aparece algo privado, difumínalo antes.
2. Crea `src/content/casos/<nombre>.md`. Copia uno parecido y cambia los campos:
   - `seccion: caso` le da tarjeta grande y página propia; `seccion: archivo` lo deja en «Más proyectos».
   - `orden` decide la posición. El 1 es la tarjeta destacada.
   - `estado`: `en-uso`, `probado-detenido`, `academico` o `prototipo`.
   - `stack`: cuatro o cinco tecnologías, las que un reclutador buscaría.
   - `rol`: tu parte en una línea, para la tarjeta.
   - La primera figura es la imagen de la tarjeta.
   - Un valor que contenga `: ` va entre comillas.
3. En un caso, el cuerpo del archivo (debajo del segundo `---`) es «El problema», en uno o dos párrafos.
4. `npm run dev` y revísalo.

### Añadir experiencia, un certificado o una tecnología

Añade un elemento a `experiencia`, `formacion.logros` o `stack` en `src/data/perfil.ts`, con la misma forma que los demás. Lo más reciente va primero. Un certificado con insignia en Credly lleva su enlace en `url`.

### Cuando cambie tu situación

Revisa `perfil.rol`, `portada` y `sobreMi` en `src/data/perfil.ts`: es lo primero que se lee. Al conseguir empleo, cambia `portada.disponible`; al graduarte, `formacion.detalle`. Si cambia el titular, actualiza también el README de perfil de GitHub y LinkedIn.

### Escribir el texto

Directo y en primera persona. Qué hiciste, con qué y para quién. Nada de «apasionado», «innovador» o «soluciones»; ningún dato que no puedas demostrar.

## Publicar

Cada push a `main` compila y publica el sitio con `.github/workflows/deploy.yml`. Tarda un par de minutos; el avance se ve en la pestaña **Actions**.

Antes de publicar:

1. `npm run build` sin errores.
2. `npm run preview` y una vuelta por la portada y los casos, en el celular también.
3. Ningún dato privado nuevo en capturas ni textos.

GitHub Pages debe tener **Settings › Pages › Source** en **GitHub Actions**. Si está en «Deploy from a branch», el sitio queda en blanco.

Para revisar calidad después de un cambio grande: Lighthouse en la página publicada (Chrome o Edge, DevTools › Lighthouse). El 2026-11-26 dio 98 en rendimiento y 100 en accesibilidad, buenas prácticas y SEO, en celular y escritorio. Si algo baja, la causa suele ser una imagen nueva demasiado grande.

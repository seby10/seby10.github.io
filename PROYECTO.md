# Rediseño del portafolio — Edición 01

Registro de decisiones del rediseño de `seby10.github.io`, el README de perfil de GitHub y LinkedIn.
Sirve para retomar el trabajo sin perder contexto. Se actualiza al cerrar cada fase.

Última actualización: 2026-11-26 · Rama de trabajo: `rediseno/aurora`, lista para fusionar en `main`.

Cómo mantener el sitio: [README.md](README.md).

## Rediseño Aurora (2026-11-26)

Reemplaza el diseño «Edición 01». Ese diseño sigue completo en la rama `rediseno/edicion-01`, y lo que sigue en este archivo desde «Reglas de trabajo» es su registro.

- **Por qué:** el usuario quiso un sitio más directo para reclutadores y más visual. Repetir que es estudiante, el titular tachado y las notas al margen restaban en vez de sumar.
- **Copy:** directo y en primera persona. La condición de estudiante aparece una vez, en Formación. Se quitaron las notas al margen, «Por mejorar», «Fuera del código» (queda una línea en Contacto), los congresos y el cuadro de honor.
- **Diseño:** cielo nocturno (`#060E1C`) con verde `#4ADE80` y celeste `#7DD3FC`, Bricolage Grotesque en los títulos y un monograma «SC» como constelación.
- **Movimiento:** aurora en un shader WebGL propio, GSAP para el loader, el descifrado del nombre, la palabra que rota y las entradas. Referencias de The Prompts Factory (Factory logo loader, CIPHER, STANZA, MANIFESTO), implementadas desde cero según sus términos.
- **Rendimiento:** WebGL arranca con la primera interacción o a los 3 s y compila el shader en paralelo; sin GPU queda el cielo en CSS. Lighthouse del 2026-11-26: 98 / 100 / 100 / 100 en celular y escritorio. JS total: unos 48 KB comprimidos. axe: 0 violaciones en 7 páginas, con y sin movimiento reducido. Sin desborde de 320 a 1440 px.
- Especificación: [spec/2026-11-26-aurora.md](spec/2026-11-26-aurora.md). Plan: [spec/2026-11-26-aurora-plan.md](spec/2026-11-26-aurora-plan.md).

## Reglas de trabajo

- Una fase por vez. No se avanza sin aprobación explícita.
- No se inventa información: cada dato es **confirmado**, **por verificar** o **propuesto**.
- Nada se publica ni se cambia en GitHub o LinkedIn sin aprobación.
- El trabajo en empresas se describe en términos generales: sin direcciones internas, sin estructura de datos, sin capturas con datos reales.

## Estado de las fases

| Fase | Estado |
|---|---|
| 1 Auditoría | Aprobada |
| 2 Investigación | Aprobada |
| 3 Dirección creativa | Aprobada: concepto A, «Edición» |
| 4 Descubrimiento personal | Aprobada, con datos por verificar |
| 5 Estrategia narrativa | Aprobada |
| 6 Sistema de diseño | Aprobada, junto con Astro |
| 7 Prototipado | Aprobada, con Fraunces |
| 8 Desarrollo | Aprobada |
| 9 Contenido | Completa para publicar. Cinco casos y cinco proyectos de archivo con capturas reales. Las notas al margen y las líneas «Por mejorar» quedan como borrador: no salen publicadas hasta que el usuario las escriba |
| 10 GitHub y LinkedIn | GitHub aplicado. LinkedIn en borrador (`borradores/`), lo crea el usuario |
| 11 Validación | Validada el 2026-11-24. `noindex` retirado en la Fase 12 |
| 12 Entrega | Entregada el 2026-11-25: borradores ocultos en producción, `noindex` retirado, guía de mantenimiento en `README.md`. Falta publicar (ver «Cómo publicar») |

## Cómo ejecutar el sitio

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

| Para cambiar | Archivo |
|---|---|
| Experiencia, formación, herramientas, textos de capítulo, notas al margen | `src/data/edicion.ts` |
| Las imágenes de un proyecto | `src/assets/casos/`, y se declaran en `figuras` dentro del archivo del proyecto. La primera es también la vista previa de su fila |
| Un proyecto | `src/content/casos/<nombre>.md` (`seccion: caso` tiene página propia; `seccion: archivo` es solo una fila) |
| Los campos que debe tener un proyecto | `src/content.config.ts` |
| Colores, tipografía, espaciado | `src/styles/global.css` |
| Cabecera, barra e índice | `src/layouts/Base.astro` |
| El orden de los capítulos | `src/pages/index.astro` |

Las notas al margen sin fecha y los casos sin `porMejorar` son borradores: se ven con `npm run dev` y no salen en la compilación publicada (`import.meta.env.DEV`). Al darles fecha o texto, aparecen solos.

El sitio anterior (`index.html`, `css/`, `js/`, `images/`) se retiró de esta rama en la iteración 3. Sigue en `main` y en el historial de git.

## Cómo publicar

Nada se publica hasta completar estos pasos, en este orden:

1. Hacer commit en `rediseno/edicion-01` y subir la rama. (Los borradores ya no bloquean: se ocultan solos en producción, y `noindex` se retiró.)
2. Revisar `npm run build` y `npm run preview`.
3. En GitHub, **Settings > Pages > Source**, elegir **GitHub Actions**. Hacerlo antes del paso 4: si `main` recibe la rama con la fuente aún en «Deploy from a branch», GitHub serviría la raíz del repositorio, que ya no tiene `index.html`, y el sitio quedaría en blanco.
4. Fusionar la rama en `main`. El flujo `.github/workflows/deploy.yml` compila y publica en cada push a `main`; también se puede lanzar a mano desde la pestaña Actions.

Los PDF de `docs/` (certificados con el número de cédula) se sacaron del repositorio el 2026-11-25 y quedan solo en local; `.gitignore` los excluye. Siguen en el historial de git. Para mostrar un certificado en el sitio, mejor enlazar su insignia de Credly que subir el PDF.

| Archivo | Qué hace |
|---|---|
| `public/og.png` | Imagen que aparece al compartir el enlace (1200×630) |
| `public/favicon.png`, `public/apple-touch-icon.png` | Iconos |
| `public/robots.txt` | Permite el rastreo y apunta al sitemap |
| `src/pages/sitemap.xml.ts` | Genera el sitemap con la portada y cada caso |
| `src/pages/404.astro` | Página de error |

## Iteraciones de la Fase 8

| Iteración | Alcance | Estado |
|---|---|---|
| 1 | Los nueve tramos, índice, una página por caso, contenido separado del diseño | Aprobada |
| 2 | Imágenes: foto, capturas de los proyectos, vista previa al pasar el cursor | Aprobada. Faltan capturas de gym-agent, Gas-System y el panel de cocina de Kaphiy |
| 3 | SEO, Open Graph, favicon, página 404, despliegue con GitHub Actions, retirar el sitio anterior | Entregada. Los PDF de `docs/` se sacaron del repositorio en la Fase 12 |

Fuera de alcance por ahora: el indicador de capítulo actual en la barra. Se añade si hace falta.

## Decisiones aprobadas

- **Concepto:** el sitio es el número actual de una publicación personal. Cada hito sale una edición nueva.
- **Hilo narrativo:** «Siempre hay una versión mejor».
- **Firma:** edición a la vista.
  - Una corrección tachada en la portada, una sola vez.
  - Notas al margen, en primera persona y con fecha.
  - Una línea «Por mejorar» en cada caso.
- **Orden:** Portada · 01 Nota del editor · 02 En el trabajo · 03 Casos · 04 Archivo · 05 Método · 06 Ahora · 07 Fuera del código · Colofón.
- **Casos a fondo:** Kaphiy (con la landing de Praliné dentro), detector de velocidad y placas, gym-agent, Gas-System.
- **Archivo:** Procoineec, ecualización tonal, Sentient.
- **Plantilla de caso:** problema, mi parte, decisiones, estado, por mejorar, enlaces.
- **Estados de un proyecto:** en uso · probado y detenido · académico · prototipo.
- **Voz:** primera persona, frases cortas, verbos concretos. Sin «apasionado», «domino» ni «soluciones innovadoras».
- **Nombre público:** Sebastián Constante.
- **Idioma:** español primero, con la estructura lista para una versión en inglés.
- **Movimiento:** lo inmersivo es un momento puntual, no todo el sitio. Scroll nativo.
- **Descartado:** ReadOn Blog y Mantenimiento de Activos; la retícula visible como firma; WebGL y librerías de scroll.

## Sistema de diseño (propuesto)

### Tipografía

| Rol | Familia | Uso |
|---|---|---|
| Títulos | Fraunces (variable, ejes `opsz` y `wght`) | Portada, títulos de capítulo y de caso |
| Texto | Instrument Sans | Párrafos, filas, navegación |
| Metadatos | IBM Plex Mono | Numeración, fechas, estados, datos de edición |

Escala fluida, con cuerpo de 18 px:

| Paso | Tamaño | Uso |
|---|---|---|
| `meta` | 13 px | Metadatos en mono |
| `small` | 15 px | Notas al margen, pies |
| `body` | 18 px | Texto |
| `lead` | 22 px | Entradilla |
| `h3` | 28 px | Título de caso |
| `h2` | `clamp(32px, 4vw, 48px)` | Título de capítulo |
| `display` | `clamp(48px, 9vw, 120px)` | Nombre en portada |

Ancho de línea del texto: 60 a 70 caracteres. Las fuentes se alojan en el propio sitio, en `woff2` y con subconjunto latino.

### Color

Un solo acento. Sin degradados ni sombras.

| Token | Claro | Oscuro | Contraste sobre papel (claro / oscuro) |
|---|---|---|---|
| `--papel` | `#F3EFE6` | `#141311` | — |
| `--tinta` | `#1A1814` | `#ECE7DC` | 15,5 / 15,1 |
| `--tinta-2` | `#5E584F` | `#A39C90` | 6,1 / 6,8 |
| `--filete` | `#CFC8BA` | `#3A3631` | Solo decorativo |
| `--acento` | `#B8300E` | `#FF6A3D` | 5,3 / 6,5 |

El tema oscuro sigue la preferencia del sistema; no hay interruptor. El acento se usa en numeración, enlaces y la corrección de portada, nunca en bloques grandes.

### Retícula y espaciado

- 12 columnas en escritorio (máximo 1200 px), 8 en tableta, 4 en móvil.
- En escritorio el texto ocupa 7 columnas y el margen 3: ahí viven las notas al margen.
- En móvil la nota al margen baja al flujo, sangrada y con filete a la izquierda.
- Escala de espacio: 4, 8, 12, 16, 24, 32, 48, 64, 96, 144 px. Entre capítulos, 144 px en escritorio y 96 px en móvil.
- Esquinas rectas (radio 0 a 2 px). Filetes de 1 px.

### Componentes

| Componente | Función |
|---|---|
| Barra de edición | Nombre, capítulo actual, índice y contacto. Fija y fina |
| Índice | Lista numerada de capítulos. En móvil, a pantalla completa |
| Cabecera de capítulo | Número en mono, título en serif, filete |
| Fila | Una sola pieza para proyectos, archivo, experiencia y certificados |
| Caso | Los seis campos de la plantilla |
| Nota al margen | Texto corto, fecha en mono |
| Corrección | Texto tachado y su reemplazo. Solo en portada |
| Estado | Texto en mono precedido por un punto. No es una píldora |
| Figura | Captura con marco de 1 px y pie |
| Colofón | Contacto, CV, enlaces y datos de la edición |

Sin biblioteca de iconos: texto, flechas tipográficas y, como mucho, tres o cuatro SVG en línea.

### Movimiento

| Momento | Qué hace | Límite |
|---|---|---|
| Corrección de portada | Tacha el titular viejo y deja la frase nueva | Una vez por carga, 1,2 s como máximo |
| Cabeceras de capítulo | El filete se traza al entrar en pantalla | Solo con animación ligada al scroll en CSS; sin ella, estático |
| Fila con cursor | Muestra una vista previa del proyecto | Solo con puntero fino; la información nunca depende del hover |
| Índice | Abre y cierra | 250 ms |
| Paso de portada a caso | Transición de vista | Mejora opcional |

Reglas: solo `opacity` y `transform`; duraciones de 150, 250 y 600 ms; todo el contenido es visible sin JavaScript; con `prefers-reduced-motion` no hay animación y se muestra el estado final.

### Accesibilidad

- Objetivo: WCAG 2.2 AA.
- Foco visible: contorno de 2 px en color de acento.
- Áreas táctiles de 44 px como mínimo.
- Enlaces subrayados dentro del texto.
- Enlace de salto al contenido, un solo `h1`, jerarquía de títulos sin saltos.

## Arquitectura técnica (propuesta)

- **Astro**, con el contenido en colecciones (un archivo por proyecto, experiencia y certificado).
- **CSS propio** con los tokens de arriba. Sin Tailwind y sin librerías de animación.
- **Despliegue** con GitHub Actions hacia GitHub Pages.

Motivo: hoy añadir un proyecto es copiar y pegar HTML. Con colecciones se añade un archivo y la interfaz no cambia. Astro entrega HTML estático sin JavaScript por defecto.

Costo: aparece un paso de compilación, y la fuente de GitHub Pages pasa de «rama» a «GitHub Actions» en la configuración del repositorio.

Alternativas consideradas: HTML a mano (no escala el contenido), Eleventy (equivalente, menos cercano a React y TypeScript), Next.js (más de lo que un sitio estático necesita).

## Capturas de proyectos

Las capturas de `src/assets/casos/` se tomaron con cada proyecto corriendo en local, con bases de datos propias en Docker y datos de prueba, nunca con las bases reales de los equipos. La placa del vehículo en la captura del detector está difuminada a propósito: es un vehículo real.

## Validación (Fase 11)

Medido el 2026-11-24 sobre la compilación de producción:

| Prueba | Resultado |
|---|---|
| Lighthouse, portada y caso, móvil y escritorio | Rendimiento 99–100, accesibilidad 100, buenas prácticas 100. SEO 69 solo por `noindex`; sin él, 100 (2026-11-25) |
| LCP / CLS / TBT en móvil | 1,7–2,0 s / ≤ 0,011 / 0 ms |
| Peso transferido | 133 KB la portada en móvil, 181 KB una página de caso |
| axe (WCAG 2.2 AA y buenas prácticas), 5 páginas en claro y oscuro | 0 violaciones |
| Anchos 320, 375, 768, 1024 y 1440 px, 7 páginas | Sin desborde horizontal; áreas táctiles ≥ 24 px |
| Teclado | Enlace de salto, foco visible en todos los controles, índice abre con Enter y cierra con Escape |
| Movimiento reducido | Sin animaciones; se muestra el estado final |
| Sin JavaScript | Todo el contenido visible |
| Enlaces | 35 revisados, ninguno roto |

Para repetirlo: `npm run build`, `npx astro preview` y Lighthouse sobre la dirección que indique.

## Datos por verificar

- En LinkedIn, lo marcado **[verificar]** en `borradores/linkedin.md`.

## Pendientes fuera del rediseño

- Crear el perfil de LinkedIn con `borradores/linkedin.md` y añadir su enlace al README de perfil de GitHub y a Contacto.
- Pasar la portada de LinkedIn y el README de perfil de GitHub a la paleta Aurora.
- Subir la foto nueva (`borradores/foto/`) como avatar de GitHub y foto de LinkedIn.
- Hacer privado el repositorio `landing` y revisar la descripción de los 14 repositorios restantes.
- Gas-System: el equipo debe rotar las credenciales que quedaron en el historial. `techstore_quality`: revocar el token incrustado en la URL del remoto.
- Opcional: versión del sitio en inglés. La estructura ya separa contenido y diseño.

## Decisiones de la Fase 12

- **Borradores ocultos en producción** en vez de bloquear la publicación hasta tener todas las notas: el sitio sale completo y cada nota aparece cuando tiene fecha.
- **Guía de mantenimiento en `README.md`**, no en este archivo: es lo que GitHub muestra al abrir el repositorio y lo que se consulta al añadir algo. Este archivo queda como registro de decisiones.

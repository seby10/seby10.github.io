# Rediseño del portafolio — Edición 01

Registro de decisiones del rediseño de `seby10.github.io`, el README de perfil de GitHub y LinkedIn.
Sirve para retomar el trabajo sin perder contexto. Se actualiza al cerrar cada fase.

Última actualización: 2026-11-16 · Rama de trabajo: `rediseno/edicion-01` · `main` sigue siendo el sitio publicado.

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
| 9 Contenido | En curso. Cinco casos y cinco proyectos de archivo con capturas reales; faltan las notas al margen y las líneas «Por mejorar» del usuario |
| 10 GitHub y LinkedIn | Borradores entregados en `borradores/` (fuera de git), pendientes de aprobación |
| 11 Validación | Pendiente |
| 12 Entrega | Pendiente |

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

Todo lo marcado como `BORRADOR` en `src/data/edicion.ts` y las notas con fecha «Borrador» se reescriben en la Fase 9.

El sitio anterior (`index.html`, `css/`, `js/`, `images/`) se retiró de esta rama en la iteración 3. Sigue en `main` y en el historial de git.

## Cómo publicar

Nada se publica hasta completar estos pasos, en este orden:

1. Reescribir los textos marcados como borrador (Fase 9) y quitar `noindex` de `src/layouts/Base.astro` (Fase 11).
2. Hacer commit en `rediseno/edicion-01` y subir la rama.
3. En GitHub, **Settings > Pages > Source**, elegir **GitHub Actions**. Hacerlo antes del paso 4: si `main` recibe la rama con la fuente aún en «Deploy from a branch», GitHub serviría la raíz del repositorio, que ya no tiene `index.html`, y el sitio quedaría en blanco.
4. Fusionar la rama en `main`. El flujo `.github/workflows/deploy.yml` compila y publica en cada push a `main`; también se puede lanzar a mano desde la pestaña Actions.

Al publicar, los PDF de `docs/` dejan de servirse: solo se publica lo que hay en `public/` y lo que genera Astro. Para mostrar alguno, se copia a `public/docs/`.

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
| 3 | SEO, Open Graph, favicon, página 404, despliegue con GitHub Actions, retirar el sitio anterior | Entregada. Los PDF de `docs/` siguen sin decidir |

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

## Datos por verificar

- Fechas de las prácticas en Gala Corp.
- Mi parte en cada sistema de la pasantía y en el asistente de pedidos de Kaphiy.
- Periodo de la beca de excelencia académica.
- Lecturas para el capítulo «Fuera del código».
- Fecha de cada nota al margen.

## Pendientes fuera del rediseño

- Decidir si se retiran de `docs/` los certificados que contienen el número de cédula.
- Crear un correo profesional y el perfil de LinkedIn.
- Completar README y capturas de los repositorios destacados (fases 9 y 10).

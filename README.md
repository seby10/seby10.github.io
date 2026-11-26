# seby10.github.io

Portafolio de Sebastián Constante, publicado en [seby10.github.io](https://seby10.github.io).

El sitio funciona como una publicación: cada versión es una **edición** con número y fecha, y cada proyecto cuenta qué quedó por mejorar. Está hecho con [Astro](https://astro.build), sin frameworks de CSS ni librerías de animación, y se publica solo en GitHub Pages.

Las decisiones de diseño y el registro del rediseño están en [PROYECTO.md](PROYECTO.md).

## Trabajar en local

Necesita Node 22.23 o superior.

```bash
npm install
npm run dev        # http://localhost:4321, con los borradores a la vista
npm run build      # compila la versión publicada en dist/
npm run preview    # sirve dist/ para revisarla antes de publicar
```

## Dónde está cada cosa

| Para cambiar | Archivo |
|---|---|
| Un proyecto | `src/content/casos/<nombre>.md` |
| Sus capturas | `src/assets/casos/` |
| Experiencia, formación, herramientas, «Ahora», notas al margen, datos de la edición | `src/data/edicion.ts` |
| Los campos que acepta un proyecto | `src/content.config.ts` |
| Colores, tipografía, espaciado | `src/styles/global.css` |
| Cabecera, barra, índice, metadatos | `src/layouts/Base.astro` |
| Orden y contenido de los capítulos | `src/pages/index.astro` |
| Retrato | `src/assets/sebastian.jpg` (cuadrado) |
| Imagen al compartir, iconos | `public/og.png` (1200×630), `public/favicon.png`, `public/apple-touch-icon.png` |

## Borradores

Lo que aún no está escrito se ve en `npm run dev` y **no sale en la versión publicada**:

- Una nota al margen sin `fecha`.
- Un caso sin `porMejorar` (la línea «Por mejorar» no aparece).

Para publicar una nota de la portada, dale fecha en `src/pages/index.astro`:

```astro
<Nota texto={notas.trabajo} fecha="Dic 2026" de="En el trabajo" />
```

En un caso, la fecha va en su archivo:

```yaml
nota:
  texto: Lo construimos, lo probamos en la cafetería y los números no dieron.
  fecha: Dic 2026
porMejorar: Medir el costo por pedido antes de construir.
```

## Recetas

### Añadir un proyecto

1. Guarda las capturas en `src/assets/casos/`. PNG o JPG, de unos 1600 px de ancho. Sin datos reales de personas: si aparece algo privado, difumínalo antes.
2. Crea `src/content/casos/<nombre>.md`. Copia uno parecido y cambia los campos:
   - `seccion: caso` le da página propia; `seccion: archivo` lo deja como una fila.
   - `orden` decide la posición (1 va primero).
   - `estado`: `en-uso`, `probado-detenido`, `academico` o `prototipo`.
   - La primera figura es también la vista previa de la fila.
   - Un valor que contenga `: ` va entre comillas.
3. En un caso, el cuerpo del archivo (debajo del segundo `---`) es el problema, en uno o dos párrafos. Si lo dejas vacío, la página dice «Caso en redacción».
4. `npm run dev` y revísalo.

### Añadir experiencia, un certificado o una herramienta

Añade un elemento a `experiencia`, `formacion` o `metodo.herramientas` en `src/data/edicion.ts`, con la misma forma que los demás. Los más recientes van primero. Un certificado con insignia en Credly lleva su enlace en `url`.

### Cambiar lo que estás haciendo ahora

`portada.estado` (las tres líneas bajo tu nombre) y `ahora` en `src/data/edicion.ts`. Revísalos cada vez que cambie tu trabajo o tus estudios: es lo primero que se lee.

### Sacar una edición nueva

Una edición nueva marca un hito: un empleo, la graduación, un proyecto grande.

1. Sube `edicion.numero` y cambia `edicion.fecha` en `src/data/edicion.ts`.
2. Si cambió el titular, cambia `portada.antes` (la frase tachada) y `portada.frase`.
3. Revisa «Ahora», la experiencia y las notas al margen: lo que ya no es cierto se quita.
4. Actualiza la portada del README de perfil de GitHub y LinkedIn si cambió la frase.

## Publicar

Cada push a `main` compila y publica el sitio con `.github/workflows/deploy.yml`. Tarda un par de minutos; el avance se ve en la pestaña **Actions**.

Antes de publicar:

1. `npm run build` sin errores.
2. `npm run preview` y una vuelta por la portada y los casos, en el celular también.
3. Ningún dato privado nuevo en capturas ni textos.

GitHub Pages debe tener **Settings › Pages › Source** en **GitHub Actions**. Si está en «Deploy from a branch», el sitio queda en blanco.

Para revisar calidad después de un cambio grande: Lighthouse en la página publicada (Chrome o Edge, DevTools › Lighthouse). El 2026-11-24 dio 99–100 en rendimiento y 100 en accesibilidad y buenas prácticas; si algo baja, la causa suele ser una imagen nueva demasiado grande.

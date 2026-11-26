import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un archivo por proyecto en src/content/casos. El cuerpo del Markdown es el «problema».
// seccion: «caso» tiene página propia y tarjeta grande; «archivo» va en «Más proyectos».
const casos = defineCollection({
  // Un archivo por idioma: es/<id>.md y en/<id>.md, con las mismas claves.
  loader: glob({ base: './src/content/casos', pattern: '{es,en}/*.md' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      resumen: z.string(),
      anio: z.number(),
      orden: z.number(),
      seccion: z.enum(['caso', 'archivo']).default('caso'),
      estado: z.enum(['en-uso', 'probado-detenido', 'academico', 'prototipo']),
      stack: z.array(z.string()).default([]),
      // Mi parte en una línea, para la tarjeta.
      rol: z.string().optional(),
      // Datos verificables del proyecto: commits, tamaño del equipo, etc.
      metricas: z.array(z.object({ valor: z.string(), texto: z.string() })).default([]),
      estadoDetalle: z.string().optional(),
      equipo: z.string().optional(),
      parte: z.array(z.string()).default([]),
      decisiones: z.array(z.object({ titulo: z.string(), texto: z.string() })).default([]),
      enlaces: z.array(z.object({ texto: z.string(), url: z.url() })).default([]),
      // La primera figura es también la imagen de la tarjeta.
      figuras: z.array(z.object({ src: image(), alt: z.string(), pie: z.string().optional() })).default([]),
    }),
});

export const collections = { casos };

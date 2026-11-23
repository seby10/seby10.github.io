import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un archivo por proyecto en src/content/casos. El cuerpo del Markdown es el «problema».
// seccion: «caso» tiene página propia; «archivo» es solo una fila en la portada.
const casos = defineCollection({
  loader: glob({ base: './src/content/casos', pattern: '*.md' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      resumen: z.string(),
      anio: z.number(),
      orden: z.number(),
      seccion: z.enum(['caso', 'archivo']).default('caso'),
      estado: z.enum(['en-uso', 'probado-detenido', 'academico', 'prototipo']),
      estadoDetalle: z.string().optional(),
      equipo: z.string().optional(),
      parte: z.array(z.string()).default([]),
      decisiones: z.array(z.object({ titulo: z.string(), texto: z.string() })).default([]),
      porMejorar: z.string().optional(),
      enlaces: z.array(z.object({ texto: z.string(), url: z.url() })).default([]),
      nota: z.object({ texto: z.string(), fecha: z.string() }).optional(),
      // La primera figura es también la vista previa de la fila en la portada.
      figuras: z.array(z.object({ src: image(), alt: z.string(), pie: z.string().optional() })).default([]),
    }),
});

export const collections = { casos };

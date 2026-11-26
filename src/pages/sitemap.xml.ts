import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// ponytail: sitemap a mano para una docena de páginas; @astrojs/sitemap si el sitio crece mucho.
export const GET: APIRoute = async ({ site }) => {
  const casos = await getCollection('casos', (c) => c.data.seccion === 'caso');
  const rutas = [
    '/',
    '/en/',
    ...casos.map((c) => {
      const [lang, id] = c.id.split('/');
      return lang === 'en' ? `/en/projects/${id}/` : `/casos/${id}/`;
    }),
  ];
  const urls = rutas.map((r) => `  <url><loc>${new URL(r, site)}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

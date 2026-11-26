// Genera public/cv/*.pdf desde las páginas compiladas /cv/ y /en/cv/ de dist/.
// Uso: npm run cv (compila, genera y vuelve a compilar). Necesita Microsoft Edge, o CANAL=chrome.
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { chromium } from 'playwright-core';

const tipos = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.jpg': 'image/jpeg' };
const navegador = await chromium.launch({ channel: process.env.CANAL ?? 'msedge' });
try {
  const pagina = await navegador.newPage();
  // Sirve dist/ directamente, sin levantar un servidor.
  await pagina.route('http://cv.local/**', async (ruta) => {
    let camino = decodeURIComponent(new URL(ruta.request().url()).pathname);
    if (camino.endsWith('/')) camino += 'index.html';
    try {
      const cuerpo = await readFile(join('dist', camino));
      await ruta.fulfill({ body: cuerpo, contentType: tipos[extname(camino)] ?? 'application/octet-stream' });
    } catch {
      await ruta.fulfill({ status: 404 });
    }
  });
  for (const [ruta, archivo] of [
    ['/cv/', 'Sebastian-Constante-CV-ES.pdf'],
    ['/en/cv/', 'Sebastian-Constante-CV-EN.pdf'],
  ]) {
    await pagina.goto(`http://cv.local${ruta}`, { waitUntil: 'networkidle' });
    await pagina.emulateMedia({ media: 'print' });
    await pagina.pdf({ path: `public/cv/${archivo}`, format: 'A4', printBackground: true, preferCSSPageSize: true });
    console.log('ok', archivo);
  }
} finally {
  await navegador.close();
}

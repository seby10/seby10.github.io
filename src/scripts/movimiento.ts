// Movimiento del sitio con GSAP. Todo el contenido ya está en el HTML: esto solo lo anima.
// Con movimiento reducido no se anima nada y el loader no aparece.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const html = document.documentElement;
const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;

function cerrarLoader() {
  delete html.dataset.loader;
  try {
    sessionStorage.setItem('visto', '1');
  } catch {}
}

if (quieto) {
  cerrarLoader();
} else {
  gsap.registerPlugin(ScrollTrigger);
  html.classList.add('con-movimiento');
  loader().then(() => {
    descifrar();
    entradaPortada();
  });
  rotar();
  revelar();
  brillo();
}

/** Monograma que se traza estrella por estrella y se rellena. Se salta con clic o tecla. */
function loader(): Promise<void> {
  const caja = document.querySelector<HTMLElement>('.loader');
  if (!('loader' in html.dataset) || !caja) return Promise.resolve();
  return new Promise((listo) => {
    const tl = gsap.timeline({
      onComplete: () => {
        cerrarLoader();
        listo();
      },
    });
    // Estado inicial en CSS (.loader .astro / .trazo) para que no parpadee antes de GSAP.
    tl.set(caja.querySelectorAll('.astro'), { scale: 0, transformOrigin: 'center' })
      .to(caja.querySelectorAll('.astro'), {
        scale: 1,
        opacity: 1,
        duration: 0.25,
        stagger: 0.035,
        ease: 'back.out(3)',
      })
      .to(caja.querySelectorAll('.trazo'), { strokeDashoffset: 0, duration: 0.6, ease: 'power2.inOut' }, 0.1)
      .from('.loader-nombre', { opacity: 0, y: 6, duration: 0.3 }, 0.45)
      .to(caja, { opacity: 0, duration: 0.35, ease: 'power1.in' }, 0.85);
    const saltar = () => tl.progress(1);
    caja.addEventListener('click', saltar, { once: true });
    addEventListener('keydown', saltar, { once: true });
  });
}

/** El texto se descifra de izquierda a derecha (referencia: CIPHER). */
function descifrar() {
  const signos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/*+#';
  document.querySelectorAll<HTMLElement>('[data-descifrar]').forEach((el) => {
    const texto = el.textContent ?? '';
    el.setAttribute('aria-label', texto);
    el.style.minHeight = `${el.offsetHeight}px`; // sin saltos de diseño
    const estado = { p: 0 };
    gsap.to(estado, {
      p: 1,
      duration: 0.9,
      ease: 'power2.out',
      onUpdate: () => {
        const hasta = Math.floor(estado.p * texto.length);
        el.textContent = [...texto]
          .map((ch, i) => (i < hasta || ch === ' ' ? ch : signos[(Math.random() * signos.length) | 0]))
          .join('');
      },
      onComplete: () => {
        el.textContent = texto;
        el.removeAttribute('aria-label');
        el.style.minHeight = '';
      },
    });
  });
}

function entradaPortada() {
  const piezas = document.querySelectorAll('.portada-texto > :not(h1), .luna');
  if (piezas.length) gsap.from(piezas, { opacity: 0, y: 18, duration: 0.7, stagger: 0.07, ease: 'power3.out' });
}

/** La palabra de «Construyo …» cambia cada 2,6 s (referencia: STANZA). */
function rotar() {
  const el = document.querySelector<HTMLElement>('[data-rotar]');
  if (!el) return;
  const palabras: string[] = JSON.parse(el.dataset.rotar ?? '[]');
  let i = 0;
  setInterval(() => {
    if (document.hidden) return;
    i = (i + 1) % palabras.length;
    gsap
      .timeline()
      .to(el, { y: -14, opacity: 0, duration: 0.28, ease: 'power2.in' })
      .add(() => {
        el.textContent = palabras[i];
      })
      .fromTo(el, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' });
  }, 2600);
}

/** Entradas al hacer scroll; los títulos se barren de izquierda a derecha (referencia: MANIFESTO). */
function revelar() {
  const abajo = gsap.utils
    .toArray<HTMLElement>('[data-revelar]')
    .filter((el) => el.getBoundingClientRect().top > innerHeight * 0.9);
  const titulos = abajo.filter((el) => el.matches('.seccion-cab'));
  const bloques = abajo.filter((el) => !el.matches('.seccion-cab'));

  titulos.forEach((cab) => {
    const h2 = cab.querySelector('h2');
    gsap.set(h2, { clipPath: 'inset(0 100% 0 0)' });
    ScrollTrigger.create({
      trigger: cab,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        cab.classList.add('visto');
        gsap.to(h2, { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power3.inOut' });
      },
    });
  });

  gsap.set(bloques, { opacity: 0, y: 28 });
  ScrollTrigger.batch(bloques, {
    start: 'top 88%',
    once: true,
    onEnter: (lote) => gsap.to(lote, { opacity: 1, y: 0, duration: 0.65, stagger: 0.07, ease: 'power3.out', overwrite: true }),
  });
}

/** El borde de las tarjetas brilla donde está el cursor. */
function brillo() {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-brillo]').forEach((t) => {
    t.addEventListener('pointermove', (e) => {
      const r = t.getBoundingClientRect();
      t.style.setProperty('--mx', `${e.clientX - r.left}px`);
      t.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

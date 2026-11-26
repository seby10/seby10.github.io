// Easter eggs. Ninguno bloquea contenido ni roba el foco.
// - Escribir «macara» o tocar el balón: ¡Vamos, Macará! (partículas, confeti y balón).
// - ↑ ↑ ↓ ↓ ← → ← → B A: salto al hiperespacio.
// - Clic en el cielo de la portada: estrella fugaz; atrapar tres concede un deseo.
// - Un mensaje en la consola.
import { datos } from '../i18n/es';
import es from '../i18n/es';
import en from '../i18n/en';
import { avisar } from './movimiento';

const t = document.documentElement.lang === 'en' ? en : es;
const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;

consola();
teclas();
document.querySelectorAll('[data-macara]').forEach((b) => b.addEventListener('click', macara));
if (!quieto) estrellasFugaces();

function consola() {
  const cohete = String.raw`
      /\
     /  \      ¿Revisando el código? / Peeking at the code?
    | SC |     Astro + GSAP + WebGL escrito a mano.
    |    |     ${datos.repo}
   /|/\/\|\    ${datos.correo}
  /_|    |_\
     ^^^^      Pista: ↑ ↑ ↓ ↓ ← → ← → B A`;
  console.log(`%c${cohete}`, 'color:#6ec8f5;font-family:monospace;font-size:12px');
}

function teclas() {
  const konami = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
  let k = 0;
  let escrito = '';
  addEventListener('keydown', (e) => {
    if ((e.target as Element).closest?.('input, textarea')) return;
    const tecla = e.key.toLowerCase();
    k = tecla === konami[k] ? k + 1 : tecla === konami[0] ? 1 : 0;
    if (k === konami.length) {
      k = 0;
      scrollTo({ top: 0, behavior: quieto ? 'auto' : 'smooth' });
      dispatchEvent(new Event('hiperespacio'));
    }
    escrito = (escrito + tecla.normalize('NFD').replace(/[̀-ͯ]/g, '')).slice(-6);
    if (escrito === 'macara') macara();
  });
}

/** ¡Vamos, Macará! Celeste y azul, como la camiseta del Ídolo de Ambato. */
function macara() {
  const caja = document.createElement('div');
  const titulo = document.createElement('strong');
  titulo.textContent = t.huevos.macara;
  const sub = document.createElement('span');
  sub.textContent = t.huevos.macaraSub;
  caja.append(titulo, sub);
  avisar(caja, 'macara', 6500);
  dispatchEvent(new Event('macara'));
  if (quieto) return;

  const colores = ['#6ec8f5', '#0b2a5b', '#ffffff', '#8fd6f8'];
  for (let i = 0; i < 70; i++) {
    const p = document.createElement('span');
    p.className = 'confeti';
    p.style.left = `${Math.random() * 100}vw`;
    p.style.background = colores[i % colores.length];
    document.body.append(p);
    const caida = innerHeight + 80;
    p.animate(
      [
        { transform: `translate(0, 0) rotate(0deg)` },
        { transform: `translate(${(Math.random() - 0.5) * 240}px, ${caida}px) rotate(${Math.random() * 900}deg)` },
      ],
      { duration: 2200 + Math.random() * 1800, delay: Math.random() * 500, easing: 'cubic-bezier(.25,.6,.4,1)' },
    ).onfinish = () => p.remove();
  }

  // Un balón cruza la pantalla rebotando.
  const balon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  balon.setAttribute('viewBox', '0 0 24 24');
  balon.setAttribute('class', 'balon-vuela');
  balon.setAttribute('aria-hidden', 'true');
  balon.innerHTML =
    '<circle cx="12" cy="12" r="10.5" fill="#fff" stroke="#0b2a5b" stroke-width="1.2"/><path d="m12 7.5 3.3 2.4-1.3 3.9h-4l-1.3-3.9z" fill="#0b2a5b"/><path d="M12 1.5v6M15.3 9.9l6-2M14 13.8l3.5 5M10 13.8l-3.5 5M8.7 9.9l-6-2" stroke="#0b2a5b" stroke-width="1.2" fill="none"/>';
  document.body.append(balon);
  const w = innerWidth, h = innerHeight;
  balon.animate(
    [
      { transform: `translate(-90px, ${h * 0.2}px) rotate(0)` },
      { transform: `translate(${w * 0.25}px, ${h - 90}px) rotate(240deg)`, offset: 0.3 },
      { transform: `translate(${w * 0.5}px, ${h * 0.35}px) rotate(480deg)`, offset: 0.55 },
      { transform: `translate(${w * 0.75}px, ${h - 90}px) rotate(720deg)`, offset: 0.8 },
      { transform: `translate(${w + 90}px, ${h * 0.45}px) rotate(960deg)` },
    ],
    { duration: 3200, easing: 'linear' },
  ).onfinish = () => balon.remove();
}

/** Estrellas fugaces en la portada: un clic lanza una; atrapar tres concede un deseo. */
function estrellasFugaces() {
  const cielo = document.querySelector<HTMLElement>('.portada');
  if (!cielo) return;
  let atrapadas = 0;
  let visible = true;
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(cielo);

  const lanzar = (x?: number, y?: number) => {
    const r = cielo.getBoundingClientRect();
    const inicioX = x ?? r.width * (0.35 + Math.random() * 0.6);
    const inicioY = y ?? r.height * (0.08 + Math.random() * 0.3);
    const angulo = 140 + Math.random() * 20;
    const distancia = 280 + Math.random() * 200;
    const rad = (angulo * Math.PI) / 180;
    const estrella = document.createElement('span');
    estrella.className = 'fugaz';
    estrella.setAttribute('aria-hidden', 'true');
    estrella.dataset.cursor = '★';
    estrella.style.left = `${inicioX - 144}px`;
    estrella.style.top = `${inicioY}px`;
    cielo.append(estrella);
    estrella.animate(
      [
        { transform: `translate(0, 0) rotate(${angulo}deg)`, opacity: 0 },
        { opacity: 1, offset: 0.15 },
        { transform: `translate(${Math.cos(rad) * distancia}px, ${Math.sin(rad) * distancia}px) rotate(${angulo}deg)`, opacity: 0 },
      ],
      { duration: 1200, easing: 'cubic-bezier(.3,.6,.4,1)' },
    ).onfinish = () => estrella.remove();
    estrella.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      estrella.remove();
      if (++atrapadas !== 3) return;
      const caja = document.createElement('div');
      const titulo = document.createElement('strong');
      titulo.textContent = t.huevos.deseoTitulo;
      const p = document.createElement('p');
      const a = document.createElement('a');
      a.href = `mailto:${datos.correo}`;
      a.textContent = t.huevos.escribeme;
      p.append(`${t.huevos.deseo} `, a);
      caja.append(titulo, p);
      avisar(caja, '', 9000);
    });
  };

  cielo.addEventListener('pointerdown', (e) => {
    if ((e.target as Element).closest('a, button')) return;
    const r = cielo.getBoundingClientRect();
    lanzar(e.clientX - r.left, e.clientY - r.top);
  });
  const programar = () =>
    setTimeout(() => {
      if (visible && !document.hidden) lanzar();
      programar();
    }, 5000 + Math.random() * 6000);
  programar();
}

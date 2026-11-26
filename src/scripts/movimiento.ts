// Movimiento del sitio con GSAP. Todo el contenido ya está en el HTML: esto solo lo anima.
// Con movimiento reducido no se anima nada; las utilidades (reloj, copiar, barra) funcionan igual.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const html = document.documentElement;
const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fino = matchMedia('(hover: hover) and (pointer: fine)').matches;

reloj();
copiar();
barra();

if (!quieto) {
  gsap.registerPlugin(ScrollTrigger);
  html.classList.add('con-movimiento');
  entradaTitulos();
  rotar();
  iluminar();
  carrilHorizontal();
  entrar();
  if (fino) {
    cursor();
    magnetico();
    brillo();
    vistaFilas();
  }
}

/** Hora local de Ambato en la portada. */
function reloj() {
  const el = document.querySelector('[data-reloj]');
  if (!el) return;
  const f = new Intl.DateTimeFormat('es-EC', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Guayaquil' });
  const poner = () => (el.textContent = f.format(new Date()));
  poner();
  setInterval(poner, 15000);
}

export function avisar(contenido: string | HTMLElement, clase = '', ms = 3200) {
  const zona = document.querySelector('.aviso');
  if (!zona) return;
  // Un elemento se usa tal cual como tarjeta; un texto se envuelve en una.
  const caja = typeof contenido === 'string' ? document.createElement('div') : contenido;
  if (typeof contenido === 'string') caja.textContent = contenido;
  if (clase) caja.classList.add(clase);
  zona.replaceChildren(caja);
  caja.animate([{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }], { duration: 350, easing: 'cubic-bezier(.22,1,.36,1)' });
  if (ms) setTimeout(() => caja.isConnected && caja.remove(), ms);
}

function copiar() {
  document.querySelectorAll<HTMLButtonElement>('[data-copiar]').forEach((b) => {
    b.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(b.dataset.copiar!);
        avisar(b.dataset.copiado!);
      } catch {
        location.href = `mailto:${b.dataset.copiar}`;
      }
    });
  });
}

/** La barra se vuelve sólida al bajar, se esconde al seguir bajando y vuelve al subir. */
function barra() {
  const b = document.querySelector('.barra');
  if (!b) return;
  let antes = scrollY;
  addEventListener('scroll', () => {
    const y = scrollY;
    b.classList.toggle('solida', y > 40);
    b.classList.toggle('oculta', y > 400 && y > antes && !quieto);
    antes = y;
  }, { passive: true });
}

/** Títulos grandes: cada letra sube desde abajo (sin dividir el texto para lectores de pantalla). */
function entradaTitulos() {
  document.querySelectorAll<HTMLElement>('[data-dividir]').forEach((el) => {
    const texto = el.textContent ?? '';
    // El texto entero queda para lectores de pantalla; las letras animadas se ocultan.
    // Altura fija mientras se reconstruye, para que nada debajo se mueva.
    el.style.minHeight = `${el.offsetHeight}px`;
    const leible = document.createElement('span');
    leible.className = 'oculto';
    leible.textContent = texto;
    el.replaceChildren(leible);
    for (const palabra of texto.split(' ')) {
      const p = document.createElement('span');
      p.style.display = 'inline-block';
      p.style.overflow = 'hidden';
      p.style.verticalAlign = 'top';
      // Margen para que las itálicas y los acentos no se recorten.
      p.style.padding = '0.12em 0.14em 0.08em 0';
      p.style.margin = '-0.12em -0.14em -0.08em 0';
      p.setAttribute('aria-hidden', 'true');
      for (const ch of palabra) {
        const l = document.createElement('span');
        l.textContent = ch;
        l.style.display = 'inline-block';
        p.append(l);
      }
      el.append(p, ' ');
    }
    const letras = el.querySelectorAll(':scope > span > span');
    const enPortada = el.getBoundingClientRect().top < innerHeight;
    gsap.from(letras, {
      yPercent: 110,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.03,
      delay: enPortada ? 0.1 : 0,
      scrollTrigger: enPortada ? undefined : { trigger: el, start: 'top 85%', once: true },
    });
  });
}

/** La palabra de «Construyo …» cambia con un giro vertical (referencia: STANZA). */
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
      .to(el, { yPercent: -110, duration: 0.35, ease: 'power3.in' })
      .add(() => {
        el.textContent = palabras[i];
      })
      .fromTo(el, { yPercent: 110 }, { yPercent: 0, duration: 0.55, ease: 'expo.out' });
  }, 2600);
}

/** «Sobre mí»: las palabras se encienden una a una con el scroll. */
function iluminar() {
  const frase = document.querySelector('[data-iluminar]');
  if (!frase) return;
  const piezas = frase.querySelectorAll('.palabra, .retrato-en-linea, .icono-en-linea');
  gsap.set(frase.querySelectorAll('.retrato-en-linea, .icono-en-linea'), { scale: 0.4, opacity: 0.2 });
  gsap.to(piezas, {
    opacity: 1,
    scale: 1,
    stagger: 0.1,
    ease: 'none',
    scrollTrigger: { trigger: frase, start: 'top 80%', end: 'bottom 45%', scrub: 0.6 },
  });
}

/** Proyectos en un carril horizontal fijado mientras se hace scroll (solo en pantallas anchas). */
function carrilHorizontal() {
  const seccion = document.querySelector<HTMLElement>('.proyectos');
  const pin = seccion?.querySelector<HTMLElement>('.carril-pin');
  const carril = pin?.querySelector<HTMLElement>('.carril');
  if (!seccion || !pin || !carril) return;
  ScrollTrigger.matchMedia({
    '(min-width: 60rem)': () => {
      seccion.classList.add('horizontal');
      const distancia = () => carril.scrollWidth - innerWidth;
      const tween = gsap.to(carril, {
        x: () => -distancia(),
        ease: 'none',
        scrollTrigger: { trigger: pin, pin: true, start: 'top top', end: () => `+=${distancia()}`, scrub: 0.8, invalidateOnRefresh: true },
      });
      // Cada imagen se desplaza un poco más lento que su tarjeta (paralaje).
      carril.querySelectorAll('.ventana').forEach((img) => {
        gsap.fromTo(img, { xPercent: -5 }, {
          xPercent: 5,
          ease: 'none',
          scrollTrigger: { trigger: img.closest('.proyecto'), containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
        });
      });
      return () => seccion.classList.remove('horizontal');
    },
  });
}

/** Bloques que entran al hacer scroll. */
function entrar() {
  const abajo = gsap.utils.toArray<HTMLElement>('[data-entrar]').filter((el) => el.getBoundingClientRect().top > innerHeight * 0.9);
  gsap.set(abajo, { opacity: 0, y: 40 });
  ScrollTrigger.batch(abajo, {
    start: 'top 90%',
    once: true,
    onEnter: (lote) => gsap.to(lote, { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: 'expo.out', overwrite: true }),
  });
}

/** Cursor propio: punto que sigue al instante, aro que llega con retraso y etiqueta sobre lo que se puede abrir. */
function cursor() {
  const c = document.querySelector<HTMLElement>('.cursor');
  if (!c) return;
  html.classList.add('con-cursor');
  const punto = c.querySelector<HTMLElement>('.cursor-punto')!;
  const aro = c.querySelector<HTMLElement>('.cursor-aro')!;
  const texto = c.querySelector<HTMLElement>('.cursor-texto')!;
  const px = gsap.quickSetter(punto, 'x', 'px'), py = gsap.quickSetter(punto, 'y', 'px');
  const ax = gsap.quickTo(aro, 'x', { duration: 0.45, ease: 'power3' }), ay = gsap.quickTo(aro, 'y', { duration: 0.45, ease: 'power3' });
  addEventListener('pointermove', (e) => {
    px(e.clientX);
    py(e.clientY);
    ax(e.clientX);
    ay(e.clientY);
    c.classList.remove('oculto');
  }, { passive: true });
  document.addEventListener('pointerleave', () => c.classList.add('oculto'));
  document.addEventListener('pointerover', (e) => {
    const el = (e.target as Element).closest<HTMLElement>('a, button, [data-cursor]');
    const etiqueta = el?.dataset.cursor;
    c.classList.toggle('etiqueta-activa', !!etiqueta);
    c.classList.toggle('enlace', !!el && !etiqueta);
    texto.textContent = etiqueta ?? '';
  });
}

/** Botones que se acercan al cursor. */
function magnetico() {
  document.querySelectorAll<HTMLElement>('.magnetico').forEach((b) => {
    const x = gsap.quickTo(b, 'x', { duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    const y = gsap.quickTo(b, 'y', { duration: 0.5, ease: 'elastic.out(1, 0.4)' });
    b.addEventListener('pointermove', (e) => {
      const r = b.getBoundingClientRect();
      x((e.clientX - r.left - r.width / 2) * 0.3);
      y((e.clientY - r.top - r.height / 2) * 0.4);
    });
    b.addEventListener('pointerleave', () => {
      x(0);
      y(0);
    });
  });
}

/** Brillo que sigue al cursor en tarjetas y teclas. */
function brillo() {
  document.querySelectorAll<HTMLElement>('[data-brillo]').forEach((t) => {
    t.addEventListener('pointermove', (e) => {
      const r = t.getBoundingClientRect();
      t.style.setProperty('--mx', `${e.clientX - r.left}px`);
      t.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/** «Más proyectos»: la captura flota junto al cursor. */
function vistaFilas() {
  document.querySelectorAll<HTMLElement>('.fila[data-vista]').forEach((fila) => {
    const img = fila.querySelector<HTMLElement>('.fila-vista');
    if (!img) return;
    const x = gsap.quickTo(img, 'x', { duration: 0.6, ease: 'power3' });
    const y = gsap.quickTo(img, 'y', { duration: 0.6, ease: 'power3' });
    fila.addEventListener('pointerenter', () => fila.classList.add('viendo'));
    fila.addEventListener('pointerleave', () => fila.classList.remove('viendo'));
    fila.addEventListener('pointermove', (e) => {
      x(e.clientX + 24);
      y(e.clientY - img.offsetHeight / 2);
    });
  });
}

// Easter eggs. Ninguno bloquea contenido ni roba el foco; con movimiento reducido solo queda el de la consola.
import { perfil } from '../data/perfil';

const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;

consola();
if (!quieto) {
  estrellasFugaces();
  konami();
}

function consola() {
  const cohete = String.raw`
      /\
     /  \      ¿Revisando el código?
    | SC |     Este sitio es Astro, GSAP y un shader escrito a mano.
    |    |     El repositorio: ${perfil.repo}
   /|/\/\|\    Si quieres hablar de trabajo: ${perfil.correo}
  /_|    |_\
     ^^^^      Pista: prueba ↑ ↑ ↓ ↓ ← → ← → B A en la portada.`;
  console.log(`%c${cohete}`, 'color:#7dd3fc;font-family:monospace;font-size:12px');
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
    const inicioX = x ?? r.width * (0.3 + Math.random() * 0.65);
    const inicioY = y ?? r.height * (0.08 + Math.random() * 0.3);
    // Ángulo de pantalla (0 = derecha, 90 = abajo): cae hacia abajo y a la izquierda.
    const angulo = 140 + Math.random() * 20;
    const distancia = 260 + Math.random() * 200;
    const rad = (angulo * Math.PI) / 180;
    const dx = Math.cos(rad) * distancia;
    const dy = Math.sin(rad) * distancia;
    const estrella = document.createElement('span');
    estrella.className = 'fugaz';
    estrella.setAttribute('aria-hidden', 'true');
    // La cabeza (extremo derecho) arranca en el punto del clic.
    estrella.style.left = `${inicioX - 144}px`;
    estrella.style.top = `${inicioY}px`;
    cielo.append(estrella);
    const anim = estrella.animate(
      [
        { transform: `translate(0, 0) rotate(${angulo}deg)`, opacity: 0 },
        { opacity: 1, offset: 0.15 },
        { transform: `translate(${dx}px, ${dy}px) rotate(${angulo}deg)`, opacity: 0 },
      ],
      { duration: 1100, easing: 'cubic-bezier(.3,.6,.4,1)' },
    );
    anim.onfinish = () => estrella.remove();
    estrella.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      estrella.remove();
      atrapadas++;
      if (atrapadas === 3) deseo();
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
    }, 6000 + Math.random() * 6000);
  programar();
}

function deseo() {
  const caja = document.createElement('div');
  caja.className = 'deseo';
  caja.setAttribute('role', 'status');
  caja.innerHTML = `
    <strong>Atrapaste tres estrellas fugaces.</strong>
    <p>Pide un deseo: ¿trabajamos juntos? <a href="mailto:${perfil.correo}">Escríbeme</a>.</p>
    <button type="button">Cerrar</button>`;
  caja.querySelector('button')!.addEventListener('click', () => caja.remove());
  document.body.append(caja);
  caja.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], {
    duration: 400,
    easing: 'cubic-bezier(.22,1,.36,1)',
  });
}

/** ↑ ↑ ↓ ↓ ← → ← → B A: salto al hiperespacio. */
function konami() {
  const codigo = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
  let i = 0;
  addEventListener('keydown', (e) => {
    i = e.key.toLowerCase() === codigo[i] ? i + 1 : e.key.toLowerCase() === codigo[0] ? 1 : 0;
    if (i < codigo.length) return;
    i = 0;
    if (!document.querySelector('.cielo canvas.lista')) return;
    scrollTo({ top: 0, behavior: 'smooth' });
    dispatchEvent(new Event('hiperespacio'));
  });
}

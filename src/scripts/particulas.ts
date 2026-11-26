// Galaxia de partículas en WebGL puro: al cargar, parte de las estrellas forma la constelación «SC»;
// al bajar se dispersan; el cursor las aparta. Escucha los eventos «hiperespacio» y «macara».

const VERT = `
attribute vec3 aG;   // posición en la galaxia
attribute vec3 aF;   // posición en la figura (z < -50: no participa)
attribute float aS;  // semilla 0..1
uniform float uT, uMorph, uScroll, uWarp, uAsp, uDpr;
uniform vec2 uRaton, uCentro, uFigura;
uniform float uEscala;
uniform vec3 uC1, uC2;
varying vec3 vCol;
varying float vA;

void main(){
  // Galaxia: gira más rápido cerca del centro, inclinada hacia el visitante.
  vec3 g = aG;
  float r = length(g.xz);
  float ang = uT * (0.03 + 0.05 / (0.4 + r));
  g.xz = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * g.xz;
  float inc = 1.05 - uScroll * 0.5;
  g.yz = mat2(cos(inc), -sin(inc), sin(inc), cos(inc)) * g.yz;
  float z = g.z + 3.2;
  vec2 pg = g.xy / z * 2.6;
  pg *= 1.0 + uWarp * fract(aS * 13.7 + uT * 0.9) * 2.5;
  pg.x /= uAsp;
  pg += uCentro;
  float tamG = (1.2 + aS * 1.8) * (3.2 / z);

  // Figura: coordenadas de pantalla, con un leve temblor vivo.
  float enFigura = step(-50.0, aF.z);
  vec2 pf = aF.xy * uEscala;
  pf.x /= uAsp;
  pf += uFigura + 0.006 * vec2(sin(uT * 1.7 + aS * 50.0), cos(uT * 1.3 + aS * 40.0));
  float m = enFigura * smoothstep(0.0, 1.0, clamp(uMorph * 1.6 - aS * 0.6, 0.0, 1.0));
  m *= 1.0 - clamp(uScroll * 1.8, 0.0, 1.0);

  vec2 p = mix(pg, pf, m);

  // El cursor empuja.
  vec2 d = (p - uRaton) * vec2(uAsp, 1.0);
  float l = length(d);
  p += normalize(d + 1e-5) / vec2(uAsp, 1.0) * smoothstep(0.28, 0.0, l) * 0.09;

  gl_Position = vec4(p, 0.0, 1.0);
  gl_PointSize = mix(tamG, 2.2 + aS * 1.6, m) * uDpr;
  vCol = aS > 0.86 ? vec3(0.95, 0.97, 1.0) : mix(uC1, uC2, smoothstep(0.2, 0.8, aS));
  vA = mix(0.35 + 0.65 * aS, 1.0, m) * (0.7 + 0.3 * sin(uT * (1.0 + aS * 3.0) + aS * 60.0));
}`;

const FRAG = `
precision mediump float;
varying vec3 vCol;
varying float vA;
void main(){
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d);
  gl_FragColor = vec4(vCol * a * vA, a * vA);
}`;

type Figura = Float32Array; // pares x, y normalizados

// Misma geometría que src/components/Logo.astro: arcos (centro x, y, radio, ángulo inicial y final en grados).
const ARCOS = [
  [17, 22, 9, -27.9, -270],
  [17, 40, 9, -90, 152],
  [48, 31, 18, -45, -315],
];

/** Puntos a lo largo del monograma SC, con un pequeño cúmulo como satélite. */
function figuraLogo(n: number): Figura {
  const out = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) {
    let x: number, y: number;
    if (i % 9 === 0) {
      const a = Math.random() * 6.283, r = Math.random() ** 0.7 * 3.4;
      x = 64 + Math.cos(a) * r;
      y = 31 + Math.sin(a) * r;
    } else {
      // Más puntos en la C, que es el arco más largo.
      const k = Math.random() < 0.5 ? 2 : i % 2;
      const [cx, cy, r, a0, a1] = ARCOS[k];
      const ang = ((a0 + (a1 - a0) * Math.random()) * Math.PI) / 180;
      const grosor = (Math.random() - 0.5) * 4.2;
      x = cx + Math.cos(ang) * (r + grosor);
      y = cy + Math.sin(ang) * (r + grosor);
    }
    out[i * 2] = (x - 36) / 24;
    out[i * 2 + 1] = -(y - 31) / 24;
  }
  return out;
}

/** Puntos de un texto dibujado en un canvas 2D (para el easter egg). */
function figuraTexto(texto: string, n: number): Figura {
  const c = document.createElement('canvas');
  c.width = 900;
  c.height = 260;
  const x = c.getContext('2d')!;
  x.fillStyle = '#fff';
  x.font = '800 150px "Geist Variable", system-ui, sans-serif';
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.fillText(texto, 450, 135);
  const px = x.getImageData(0, 0, 900, 260).data;
  const llenos: number[] = [];
  for (let yy = 0; yy < 260; yy += 3) for (let xx = 0; xx < 900; xx += 3) if (px[(yy * 900 + xx) * 4 + 3] > 128) llenos.push(xx, yy);
  const out = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) {
    const k = ((Math.random() * llenos.length) / 2) | 0;
    out[i * 2] = (llenos[k * 2] - 450) / 130 + (Math.random() - 0.5) * 0.01;
    out[i * 2 + 1] = -(llenos[k * 2 + 1] - 130) / 130;
  }
  return out;
}

export function iniciarParticulas(canvas: HTMLCanvasElement) {
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // El cielo CSS ya se ve; WebGL entra con la primera interacción (mover, tocar, hacer scroll o una tecla).
  let hecho = false;
  const eventos = ['pointermove', 'pointerdown', 'keydown', 'scroll', 'touchstart'];
  const empezar = () => {
    if (hecho) return;
    hecho = true;
    eventos.forEach((e) => removeEventListener(e, empezar));
    montar(canvas, quieto);
  };
  eventos.forEach((e) => addEventListener(e, empezar, { once: true, passive: true }));
  // ponytail: sin temporizador; quien solo mira sin mover nada ve el cielo CSS. Con un temporizador, Lighthouse en móvil cuenta el arranque de WebGL como bloqueo.
}

function montar(canvas: HTMLCanvasElement, quieto: boolean) {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: true, premultipliedAlpha: true, powerPreference: 'low-power' });
  if (!gl) return;
  const info = gl.getExtension('WEBGL_debug_renderer_info');
  const gpu = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : '';
  // Sin GPU real, cada cuadro cuesta demasiado: se queda el cielo en CSS. `?gl` lo fuerza para capturas.
  if (/swiftshader|llvmpipe|software|basic render/i.test(gpu) && !location.search.includes('gl')) return;

  const prog = gl.createProgram()!;
  for (const [tipo, src] of [
    [gl.VERTEX_SHADER, VERT],
    [gl.FRAGMENT_SHADER, FRAG],
  ] as const) {
    const sh = gl.createShader(tipo)!;
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    gl.attachShader(prog, sh);
  }
  gl.linkProgram(prog);
  // Compilación en paralelo cuando el navegador lo permite: no bloquea la página.
  const par = gl.getExtension('KHR_parallel_shader_compile');
  const esperar = () => {
    if (par && !gl.getProgramParameter(prog, par.COMPLETION_STATUS_KHR)) return requestAnimationFrame(esperar);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return console.warn(gl.getProgramInfoLog(prog));
    arrancar(gl, prog, canvas, quieto);
  };
  esperar();
}

function arrancar(gl: WebGLRenderingContext, prog: WebGLProgram, canvas: HTMLCanvasElement, quieto: boolean) {
  gl.useProgram(prog);
  const movil = innerWidth < 760;
  const N = movil ? 3600 : 7000;
  const enFigura = Math.floor(N * 0.42);

  // Galaxia de tres brazos más un halo de estrellas lejanas.
  const g = new Float32Array(N * 3);
  const s = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    s[i] = Math.random();
    if (i % 5 === 0) {
      const a = Math.random() * 6.283, b = Math.acos(Math.random() * 2 - 1), r = 2 + Math.random() * 2;
      g.set([Math.sin(b) * Math.cos(a) * r, Math.cos(b) * r * 0.6, Math.sin(b) * Math.sin(a) * r], i * 3);
    } else {
      const r = Math.random() ** 1.7 * 1.8;
      const brazo = ((i % 3) / 3) * 6.283 + r * 2.4;
      const disp = () => (Math.random() - 0.5) * (0.12 + r * 0.32);
      g.set([Math.cos(brazo) * r + disp(), disp() * 0.4, Math.sin(brazo) * r + disp()], i * 3);
    }
  }
  const f = new Float32Array(N * 3);
  const ponerFigura = (fig: Figura) => {
    for (let i = 0; i < N; i++) {
      if (i < enFigura) f.set([fig[i * 2], fig[i * 2 + 1], 0], i * 3);
      else f.set([0, 0, -99], i * 3);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, bf);
    gl.bufferData(gl.ARRAY_BUFFER, f, gl.DYNAMIC_DRAW);
  };

  const buffer = (datos: Float32Array, nombre: string, tam: number) => {
    const b = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, datos, gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, nombre);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, tam, gl.FLOAT, false, 0, 0);
    return b;
  };
  buffer(g, 'aG', 3);
  buffer(s, 'aS', 1);
  const bf = buffer(f, 'aF', 3);
  ponerFigura(figuraLogo(enFigura));

  const u = Object.fromEntries(
    ['uT', 'uMorph', 'uScroll', 'uWarp', 'uAsp', 'uDpr', 'uRaton', 'uCentro', 'uFigura', 'uEscala', 'uC1', 'uC2'].map((n) => [n, gl.getUniformLocation(prog, n)]),
  );
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE); // aditivo: las estrellas que se cruzan brillan más

  const celeste = [0.43, 0.78, 0.96], lima = [0.79, 0.96, 0.38];
  const macara = [[0.43, 0.78, 0.96], [0.1, 0.25, 0.6]];
  let colores = [celeste, lima];

  let asp = 1;
  const ajustar = () => {
    const dpr = Math.min(devicePixelRatio, 1.75);
    canvas.width = Math.round(canvas.clientWidth * dpr);
    canvas.height = Math.round(canvas.clientHeight * dpr);
    asp = canvas.width / canvas.height;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform1f(u.uAsp, asp);
    gl.uniform1f(u.uDpr, dpr);
    const ancho = asp > 1.1;
    gl.uniform2f(u.uCentro, ancho ? 0.42 : 0.0, ancho ? 0.05 : 0.32);
    gl.uniform2f(u.uFigura, ancho ? 0.5 : 0.0, ancho ? 0.18 : 0.5);
    gl.uniform1f(u.uEscala, ancho ? 0.42 : 0.3);
  };
  ajustar();
  new ResizeObserver(ajustar).observe(canvas);

  const raton = { x: 9, y: 9, tx: 9, ty: 9 };
  addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    raton.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
    raton.ty = -(((e.clientY - r.top) / r.height) * 2 - 1);
  }, { passive: true });

  let morph = 0, morphObj = 1, warp = 0, warpHasta = 0;
  addEventListener('hiperespacio', () => (warpHasta = performance.now() + 2200));
  let volver = 0;
  addEventListener('macara', () => {
    ponerFigura(figuraTexto('MACARÁ', enFigura));
    colores = macara;
    morph = 0;
    if (!corriendo) pintar(performance.now());
    clearTimeout(volver);
    volver = window.setTimeout(() => {
      ponerFigura(figuraLogo(enFigura));
      colores = [celeste, lima];
      morph = 0;
    }, 7000);
  });

  const inicio = performance.now();
  let visible = true;
  let corriendo = false;
  const pintar = (ahora: number) => {
    const t = (ahora - inicio) / 1000;
    raton.x += (raton.tx - raton.x) * 0.12;
    raton.y += (raton.ty - raton.y) * 0.12;
    morph += (morphObj - morph) * 0.025;
    warp += ((ahora < warpHasta ? 1 : 0) - warp) * 0.06;
    const scroll = Math.min(1, Math.max(0, scrollY / (canvas.clientHeight * 0.9)));
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(u.uT, quieto ? 20 : t);
    gl.uniform1f(u.uMorph, quieto ? 1 : morph);
    gl.uniform1f(u.uScroll, scroll);
    gl.uniform1f(u.uWarp, warp);
    gl.uniform2f(u.uRaton, raton.x, raton.y);
    gl.uniform3fv(u.uC1, colores[0]);
    gl.uniform3fv(u.uC2, colores[1]);
    gl.drawArrays(gl.POINTS, 0, N);
    corriendo = !quieto && visible && !document.hidden;
    if (corriendo) requestAnimationFrame(pintar);
  };
  const reanudar = () => {
    if (!corriendo && visible && !document.hidden && !quieto) requestAnimationFrame(pintar);
  };
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    reanudar();
  }).observe(canvas);
  document.addEventListener('visibilitychange', reanudar);
  pintar(performance.now());
  canvas.classList.add('lista');
}

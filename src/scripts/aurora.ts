// Cielo de la portada en un solo shader: aurora en verde y celeste, estrellas que titilan
// y el salto al hiperespacio (evento «hiperespacio»). Sin librerías.

const VERTICES = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;

const FRAGMENTOS = `
precision mediump float;
uniform vec2 uRes;
uniform float uT;
uniform vec2 uRaton;
uniform float uSalto;

float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float ruido(vec2 p){
  vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);
}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*ruido(p);p*=2.03;a*=.5;}return v;}

float estrellas(vec2 uv,float escala,float t){
  vec2 g=uv*escala,c=floor(g),f=fract(g)-.5;
  float r=h(c);
  if(r<.88)return 0.;
  vec2 pos=vec2(h(c+3.1),h(c+7.7))-.5;
  float d=length(f-pos*.7);
  float titila=.6+.4*sin(t*(1.+r*3.)+r*40.);
  return smoothstep(.09,0.,d)*titila*(r-.88)*8.;
}

void main(){
  vec2 uv=gl_FragCoord.xy/uRes;
  float asp=uRes.x/uRes.y;
  vec2 q=vec2(uv.x*asp,uv.y);
  float t=uT;

  // Fondo: más claro hacia el horizonte.
  vec3 col=mix(vec3(.04,.09,.17),vec3(.024,.055,.11),uv.y);

  // Estrellas en dos capas; el ratón las mueve apenas (paralaje).
  vec2 par=(uRaton-.5)*.02;
  float s=estrellas(q+par,90.,t)+estrellas(q+par*2.+7.,160.,t*1.3)*.7;
  col+=vec3(.85,.92,1.)*s*smoothstep(.15,.6,uv.y);

  // Aurora: tres cortinas con borde inferior nítido y rayos hacia arriba.
  float x=uv.x*asp+(uRaton.x-.5)*.15;
  for(int i=0;i<3;i++){
    float fi=float(i);
    float base=.5+fi*.08+.09*sin(x*1.1+t*.15+fi*2.1)+.04*sin(x*3.7-t*.22+fi)+.18*(fbm(vec2(x*.9+fi*5.,t*.05))-.5);
    float d=uv.y-base;
    float forma=d>0.?exp(-d*(3.+fi*1.5)):exp(-d*d*1400.);
    float rayos=pow(fbm(vec2(x*22.+fi*3.,t*.1)),1.6)*2.2;
    float brillo=forma*rayos*(.75-fi*.18)*(.75+.25*sin(t*.4+fi*1.7));
    vec3 tono=mix(vec3(.25,.9,.5),vec3(.45,.82,1.),clamp(fi*.45+.3*sin(x*.8+t*.1),0.,1.));
    col+=tono*brillo*.7;
  }

  // Hiperespacio: las estrellas se estiran en líneas desde el centro.
  if(uSalto>0.){
    vec2 d=(uv-.5)*vec2(asp,1.);
    float a=atan(d.y,d.x),r=length(d);
    float id=floor(a*90.);
    float linea=step(.93,h(vec2(id,1.)))*smoothstep(.0,.35,fract(r*1.5-t*2.5+h(vec2(id,2.))*9.));
    col+=vec3(.75,.93,1.)*linea*smoothstep(.02,.4,r)*uSalto;
  }

  gl_FragColor=vec4(col,1.);
}`;

export function iniciarAurora(canvas: HTMLCanvasElement) {
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const arrancar = () => montar(canvas, quieto);
  if ('requestIdleCallback' in window) requestIdleCallback(arrancar, { timeout: 1500 });
  else setTimeout(arrancar, 300);
}

function montar(canvas: HTMLCanvasElement, quieto: boolean) {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
  if (!gl) return; // Queda el cielo en CSS.

  const prog = gl.createProgram()!;
  for (const [tipo, src] of [
    [gl.VERTEX_SHADER, VERTICES],
    [gl.FRAGMENT_SHADER, FRAGMENTOS],
  ] as const) {
    const sh = gl.createShader(tipo)!;
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) return console.warn(gl.getShaderInfoLog(sh));
    gl.attachShader(prog, sh);
  }
  gl.linkProgram(prog);
  gl.useProgram(prog);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const p = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(p);
  gl.vertexAttribPointer(p, 2, gl.FLOAT, false, 0, 0);

  const u = (n: string) => gl.getUniformLocation(prog, n);
  const uRes = u('uRes'), uT = u('uT'), uRaton = u('uRaton'), uSalto = u('uSalto');

  // ponytail: resolución fija al 70 % con DPR ≤ 1,5; la aurora es suave y no necesita más.
  const ajustar = () => {
    const escala = Math.min(devicePixelRatio, 1.5) * 0.7;
    canvas.width = Math.round(canvas.clientWidth * escala);
    canvas.height = Math.round(canvas.clientHeight * escala);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uRes, canvas.width, canvas.height);
  };
  ajustar();
  new ResizeObserver(ajustar).observe(canvas);

  const raton = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
  addEventListener('pointermove', (e) => {
    raton.tx = e.clientX / innerWidth;
    raton.ty = 1 - e.clientY / innerHeight;
  }, { passive: true });

  let salto = 0;
  let saltoHasta = 0;
  addEventListener('hiperespacio', () => {
    saltoHasta = performance.now() + 2000;
    if (!corriendo) pintar(performance.now());
  });

  const inicio = performance.now() - 12000; // empieza con la aurora ya formada
  let visible = true;
  let corriendo = false;

  const dibujar = (ahora: number) => {
    raton.x += (raton.tx - raton.x) * 0.04;
    raton.y += (raton.ty - raton.y) * 0.04;
    const objetivo = ahora < saltoHasta ? 1 : 0;
    salto += (objetivo - salto) * 0.08;
    // El salto acelera el tiempo para que las líneas corran.
    gl.uniform1f(uT, (ahora - inicio) / 1000 + salto * 4);
    gl.uniform2f(uRaton, raton.x, raton.y);
    gl.uniform1f(uSalto, salto);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  const pintar = (ahora: number) => {
    dibujar(ahora);
    const activo = !quieto || salto > 0.01 || ahora < saltoHasta;
    corriendo = activo && visible && !document.hidden;
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

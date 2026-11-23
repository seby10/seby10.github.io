// Todo el contenido que no es un proyecto vive aquí. Para añadir una experiencia,
// un certificado o una herramienta, se añade un elemento a la lista correspondiente.
// Los proyectos van en src/content/casos, un archivo por proyecto.

export const edicion = {
  numero: '01',
  fecha: 'Nov 2026',
  lugar: 'Ambato',
  correo: 'sebastianconstante04@hotmail.com',
  github: 'https://github.com/seby10',
};

export const capitulos = [
  { num: '01', id: 'nota-del-editor', titulo: 'Nota del editor' },
  { num: '02', id: 'en-el-trabajo', titulo: 'En el trabajo' },
  { num: '03', id: 'casos', titulo: 'Casos' },
  { num: '04', id: 'archivo', titulo: 'Archivo' },
  { num: '05', id: 'metodo', titulo: 'Método' },
  { num: '06', id: 'ahora', titulo: 'Ahora' },
  { num: '07', id: 'fuera-del-codigo', titulo: 'Fuera del código' },
  { num: '—', id: 'colofon', titulo: 'Colofón' },
] as const;

export const ESTADOS = {
  'en-uso': 'En uso',
  'probado-detenido': 'Probado y detenido',
  academico: 'Académico',
  prototipo: 'Prototipo',
} as const;

export const portada = {
  antes: 'Software Engineer & Full Stack Developer',
  frase: 'Estudio Ingeniería en Software y construyo aplicaciones web. Aplico IA en ellas.',
  estado: [
    { rotulo: 'Ahora', texto: 'Pasante de TIC en la Empresa Eléctrica Ambato' },
    { rotulo: 'Graduación', texto: 'Mediados de 2027, Universidad Técnica de Ambato' },
    { rotulo: 'Disponible', texto: 'Primer empleo y proyectos freelance' },
  ],
};

// BORRADOR: textos de la Fase 8 escritos con datos confirmados. Se reescriben en la Fase 9.
export const notaDelEditor = [
  'Estudio el último año de Ingeniería en Software en la Universidad Técnica de Ambato. Me gradúo a mediados de 2027.',
  'Lo que más disfruto es resolver problemas y descubrir que siempre hay algo que mejorar y lugares que todavía no exploro. Por eso este sitio es una edición: una versión con fecha, que sé que voy a corregir.',
  'Construyo aplicaciones web y aplico IA en ellas. Trabajo con especificaciones y con agentes de programación.',
];

export const experiencia = [
  {
    fecha: 'Jul 2026 – Ene 2027',
    lugar: 'Empresa Eléctrica Ambato',
    texto:
      'Pasante de TIC. Desarrollo y mantenimiento de sistemas internos, entre ellos un módulo de reportes y tableros con Angular, Spring Boot y Oracle.',
    tipo: 'Pasantía',
  },
  {
    fecha: '8 semanas',
    lugar: 'Gala Corp',
    texto:
      'Prácticas preprofesionales. Trabajé en equipo en la landing de Procoineec, publicada en procoineec.com, con Vite, React y Tailwind.',
    tipo: 'Prácticas',
  },
  {
    fecha: '2026',
    lugar: 'Praliné Coffee House',
    texto: 'Una landing que la cafetería usa hoy, con menú, horario y Wi-Fi, y el sistema de pedidos Kaphiy.',
    tipo: 'Cliente',
  },
];

export const metodo = {
  principios: [
    { titulo: 'Primero la especificación', texto: 'Escribo qué se va a construir antes de construirlo.' },
    { titulo: 'Agentes con contexto', texto: 'Delego en agentes de programación y les dejo por escrito el contexto del proyecto.' },
    { titulo: 'Pruebas', texto: 'Unitarias, de integración y de extremo a extremo donde el proyecto lo pide.' },
  ],
  // BORRADOR: clasificación deducida de los repositorios. Falta que la confirme.
  herramientas: [
    { estado: 'Uso a diario', lista: 'Angular, Spring Boot, Java, Oracle, SQL, Git' },
    {
      estado: 'En proyectos',
      lista:
        'TypeScript, Next.js, React, NestJS, Prisma, PostgreSQL, Python, Streamlit, YOLOv8, lógica difusa, Docker, Vitest, Playwright, Tailwind',
    },
    { estado: 'Explorando', lista: 'Seguridad ofensiva, aplicaciones con modelos de lenguaje' },
  ],
};

export const ahora = [
  {
    fecha: 'Hasta ene 2027',
    titulo: 'Pasantía en la Empresa Eléctrica Ambato',
    texto: 'Seis meses en el área de TIC.',
    tipo: 'Pasantía',
  },
  {
    fecha: '2027',
    titulo: 'Tesis',
    texto:
      'Evaluación experimental de mecanismos de validación automatizada para la consistencia de registros clínicos en atención primaria rural sin conectividad. Propuesta aprobada en octubre de 2026.',
    tipo: 'Titulación',
  },
  { fecha: 'En curso', titulo: 'Ethical hacking', texto: 'Curso en marcha.', tipo: 'Curso' },
];

export const formacion = [
  {
    fecha: 'Sep 2026',
    titulo: 'Data Science Essentials with Python',
    texto: 'Cisco Networking Academy.',
    tipo: 'Certificado',
    url: 'https://www.credly.com/badges/07105a04-b961-4d80-a985-87d34e53c057/public_url',
  },
  { fecha: '2024', titulo: 'Network Support and Security', texto: 'Cisco Networking Academy.', tipo: 'Certificado' },
  { fecha: 'Jun 2024', titulo: 'Introducción a IoT', texto: 'Cisco Networking Academy.', tipo: 'Certificado' },
  {
    fecha: '2024',
    titulo: 'Conference on Computer Science, Electronics and Industrial Engineering',
    texto: 'Universidad Técnica de Ambato.',
    tipo: 'Congreso',
  },
  {
    fecha: 'Nov 2023',
    titulo: 'Emerging Research Frontiers in Computer Science, Electronics, and Industrial Engineering',
    texto: 'Curso de 40 horas del congreso CSEI, Universidad Técnica de Ambato.',
    tipo: 'Curso',
  },
  {
    fecha: '2024 – 2025',
    titulo: 'Excelencia académica',
    texto: 'Periodo septiembre 2024 – febrero 2025, Universidad Técnica de Ambato.',
    tipo: 'Reconocimiento',
  },
  { fecha: '2022', titulo: 'Cuadro de honor', texto: 'Promoción 2022, Unidad Educativa San Pío X.', tipo: 'Reconocimiento' },
];

export const idiomas = 'Español, lengua materna. Inglés avanzado. Francés básico, en práctica.';

export const fueraDelCodigo = [
  'Entreno. Leo y escribo sobre la vida, la mejora personal y lo que voy encontrando en la carrera.',
  'Edito video con After Effects y Premiere, y hago diseño gráfico por gusto.',
];

// BORRADOR: notas al margen propuestas en la Fase 5. Cada una se reescribe y se fecha.
export const notas = {
  editor: 'Durante un tiempo este sitio decía «Software Engineer». Todavía no lo soy. Prefiero decir lo que hago hoy.',
  trabajo:
    'En la empresa eléctrica casi nada empieza de cero. La mayor parte del trabajo es entender lo que ya existe antes de tocarlo.',
  metodo: 'Para delegar en un agente primero tengo que escribir qué quiero. Casi siempre descubro ahí que no lo tenía tan claro.',
  fuera: 'Escribo para ordenar lo que siento. Varias de estas notas salieron de ahí.',
};

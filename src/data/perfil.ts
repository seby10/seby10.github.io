// Todo el texto que no es un proyecto vive aquí. Los proyectos van en src/content/casos.

export const perfil = {
  nombre: 'Sebastián Constante',
  rol: 'Desarrollador full stack',
  correo: 'sebastianconstante04@hotmail.com',
  github: 'https://github.com/seby10',
  repo: 'https://github.com/seby10/seby10.github.io',
  lugar: 'Ambato, Ecuador',
};

export const portada = {
  // «Construyo …»: la primera es la que se lee sin JavaScript; las demás rotan.
  construyo: ['aplicaciones web', 'APIs con NestJS', 'productos con IA', 'paneles en tiempo real'],
  stack: ['NestJS', 'Next.js', 'PostgreSQL'],
  disponible: 'Disponible para empleo y freelance',
  modalidad: 'Ambato, Ecuador · presencial o remoto',
};

export const secciones = [
  { id: 'sobre-mi', titulo: 'Sobre mí' },
  { id: 'proyectos', titulo: 'Proyectos' },
  { id: 'experiencia', titulo: 'Experiencia' },
  { id: 'stack', titulo: 'Stack' },
  { id: 'formacion', titulo: 'Formación' },
  { id: 'contacto', titulo: 'Contacto' },
] as const;

export const sobreMi = [
  'Hoy hago la pasantía de TIC en la Empresa Eléctrica Ambato, donde trabajo sobre sistemas internos que ya están en producción, con Angular, Spring Boot y Oracle.',
  'Por mi cuenta y con mi equipo construyo aplicaciones web con NestJS, Next.js y PostgreSQL; cuando el problema lo pide les sumo IA, como el asistente de pedidos de Kaphiy o el detector que lee placas.',
  'Antes de programar escribo qué voy a construir. Después delego partes en agentes de programación y cierro con pruebas.',
];

export const ESTADOS = {
  'en-uso': 'En uso',
  'probado-detenido': 'Probado con cliente',
  academico: 'Académico',
  prototipo: 'Prototipo',
} as const;

export const experiencia = [
  {
    cargo: 'Pasante de TIC',
    lugar: 'Empresa Eléctrica Ambato',
    fecha: 'Jul 2026 – Ene 2027',
    logros: [
      'Construí el módulo de reportes y tableros del departamento de Relaciones Industriales.',
      'Desarrollé un sprint nuevo del sistema de declaración de conflicto de intereses.',
      'Mejoré los sistemas de transportes y de nómina.',
    ],
    stack: ['Angular', 'Spring Boot', 'Java', 'Oracle'],
  },
  {
    cargo: 'Desarrollador web freelance',
    lugar: 'Praliné Coffee House',
    fecha: '2026',
    logros: [
      'Hice la landing que la cafetería usa a diario, con menú bilingüe, horario y Wi-Fi.',
      'Con mi equipo construimos Kaphiy, su sistema de pedidos por QR, y lo probamos en el local.',
    ],
    stack: [],
  },
  {
    cargo: 'Prácticas de desarrollo web',
    lugar: 'Gala Corp',
    fecha: 'Jun – Ago 2025',
    logros: ['Desarrollé en equipo la landing de Procoineec, que sigue publicada en procoineec.com.'],
    stack: ['React', 'Vite', 'Tailwind'],
  },
];

export const stack = [
  {
    grupo: 'Uso a diario',
    lista: ['TypeScript', 'Next.js', 'NestJS', 'PostgreSQL', 'Angular', 'Spring Boot', 'Java', 'Oracle', 'SQL', 'Git'],
  },
  {
    grupo: 'En proyectos',
    lista: ['React', 'Prisma', 'Python', 'Streamlit', 'YOLOv8', 'Lógica difusa', 'Docker', 'Vitest', 'Playwright', 'Tailwind'],
  },
  { grupo: 'Explorando', lista: ['Seguridad ofensiva', 'Aplicaciones con LLM'] },
];

export const formacion = {
  carrera: 'Ingeniería en Software',
  universidad: 'Universidad Técnica de Ambato',
  fecha: '2022 – 2027',
  detalle:
    'Último año. Mi tesis evalúa mecanismos de validación automatizada para registros clínicos en atención primaria rural sin conexión.',
  logros: [
    { fecha: '2025', titulo: 'Beca de excelencia académica', texto: 'Universidad Técnica de Ambato.' },
    {
      fecha: 'Sep 2026',
      titulo: 'Data Science Essentials with Python',
      texto: 'Cisco Networking Academy.',
      url: 'https://www.credly.com/badges/07105a04-b961-4d80-a985-87d34e53c057/public_url',
    },
    { fecha: '2024', titulo: 'Network Support and Security', texto: 'Cisco Networking Academy.' },
    { fecha: 'Jun 2024', titulo: 'Introducción a IoT', texto: 'Cisco Networking Academy.' },
  ],
  idiomas: [
    { idioma: 'Español', nivel: 'Nativo' },
    { idioma: 'Inglés', nivel: 'Avanzado' },
    { idioma: 'Francés', nivel: 'Básico' },
  ],
};

export const contacto = {
  frase: 'Si tienes un puesto, un proyecto freelance o una idea que quieras probar, escríbeme.',
  personal:
    'Cuando no programo, diseño, edito video en After Effects y Premiere o leo algo de introspección o de arquitectura de software.',
};

// Todo el texto del sitio en español. en.ts tiene la misma forma; los proyectos van en src/content/casos.

export const datos = {
  nombre: 'Sebastián Constante',
  correo: 'sebastianconstante04@hotmail.com',
  github: 'https://github.com/seby10',
  linkedin: 'https://www.linkedin.com/in/sebasti%C3%A1n-constante-b8b447452',
  repo: 'https://github.com/seby10/seby10.github.io',
  zonaHoraria: 'America/Guayaquil',
};

const es = {
  lang: 'es',
  locale: 'es_EC',
  rutas: { inicio: '/', caso: '/casos/', cv: '/cv/', otro: '/en/' },
  cvPdf: '/cv/Sebastian-Constante-CV-ES.pdf',
  meta: {
    titulo: 'Sebastián Constante · Desarrollador full stack',
    descripcion:
      'Desarrollador full stack en Ambato, Ecuador. Construyo aplicaciones web con NestJS, Next.js y PostgreSQL, y les sumo IA.',
  },
  nav: {
    proyectos: 'Proyectos',
    experiencia: 'Experiencia',
    sobre: 'Sobre mí',
    contacto: 'Contacto',
    cv: 'CV',
    idioma: 'EN',
    idiomaLargo: 'Read in English',
    saltar: 'Saltar al contenido',
    inicio: 'inicio',
  },
  portada: {
    disponible: 'Disponible para empleo y freelance',
    rol: 'Desarrollador full stack',
    antes: 'Construyo',
    rota: ['aplicaciones web', 'APIs', 'productos con IA', 'paneles en tiempo real'],
    stack: ['NestJS', 'Next.js', 'PostgreSQL', 'TypeScript'],
    verProyectos: 'Ver proyectos',
    descargarCv: 'Descargar CV',
    lugar: 'Ambato, Ecuador',
    hora: 'hora local',
    bajar: 'Baja',
  },
  sobre: {
    titulo: 'Sobre mí',
    // Las piezas entre llaves se sustituyen por el retrato y los iconos.
    frase: [
      'Soy Sebastián {retrato}, desarrollador full stack en Ambato.',
      'Hoy trabajo en los sistemas internos de la Empresa Eléctrica Ambato {rayo} con Angular, Spring Boot y Oracle.',
      'Por mi cuenta y con mi equipo construyo aplicaciones web con NestJS y Next.js, y cuando el problema lo pide, les sumo IA {chispa}',
    ],
    como: [
      { titulo: 'Primero la especificación', texto: 'Escribo qué voy a construir antes de tocar código.' },
      { titulo: 'Agentes con contexto', texto: 'Delego partes en agentes de programación y les dejo el contexto por escrito.' },
      { titulo: 'Pruebas', texto: 'Unitarias, de integración y de extremo a extremo donde el proyecto lo pide.' },
    ],
  },
  proyectos: {
    titulo: 'Proyectos',
    intro: 'Cinco proyectos contados a fondo: qué resolví, qué hice yo y con qué.',
    verCaso: 'Ver caso',
    miParte: 'Mi parte',
    codigo: 'Código',
    mas: 'Más proyectos',
    arrastra: 'Desliza',
    estados: {
      'en-uso': 'En uso',
      'probado-detenido': 'Probado con cliente',
      academico: 'Académico',
      prototipo: 'Prototipo',
    },
  },
  experiencia: {
    intro: 'Dónde he trabajado con sistemas y clientes reales.',
    titulo: 'Experiencia',
    lista: [
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
    ],
  },
  stack: {
    titulo: 'Stack',
    grupos: [
      {
        grupo: 'Uso a diario',
        lista: ['TypeScript', 'Next.js', 'NestJS', 'PostgreSQL', 'Angular', 'Spring Boot', 'Java', 'Oracle', 'Git'],
      },
      {
        grupo: 'En proyectos',
        lista: ['React', 'Prisma', 'Python', 'Docker', 'Vitest', 'Playwright', 'Tailwind', 'YOLOv8'],
      },
      { grupo: 'Explorando', lista: ['Seguridad ofensiva', 'Aplicaciones con LLM'] },
    ],
  },
  formacion: {
    titulo: 'Formación',
    carrera: 'Ingeniería en Software',
    universidad: 'Universidad Técnica de Ambato',
    fecha: '2022 – 2027',
    detalle:
      'Último año. Mi tesis evalúa mecanismos de validación automatizada para registros clínicos en atención primaria rural sin conexión.',
    logrosTitulo: 'Logros y certificados',
    logros: [
      {
        fecha: 'Nov 2026',
        titulo: 'Python Essentials 2',
        texto: 'Cisco Networking Academy.',
        url: 'https://www.credly.com/badges/b577b629-6079-469b-a8bf-0835ed1baf8c/public_url',
      },
      { fecha: 'En curso', titulo: 'Google Cloud Computing Foundations', texto: 'Google Cloud.' },
      { fecha: 'En curso', titulo: 'Ethical Hacking', texto: 'Curso en marcha.' },
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
    idiomasTitulo: 'Idiomas',
    idiomas: [
      { idioma: 'Español', nivel: 'Nativo' },
      { idioma: 'Inglés', nivel: 'Avanzado' },
      { idioma: 'Francés', nivel: 'Básico' },
    ],
  },
  fuera: {
    titulo: 'Fuera del código',
    lista: [
      { icono: 'diseno', texto: 'Diseño gráfico' },
      { icono: 'video', texto: 'Edición de video en After Effects y Premiere' },
      { icono: 'libro', texto: 'Libros de introspección y de arquitectura de software' },
      { icono: 'balon', texto: 'Hincha del Macará' },
    ],
  },
  contacto: {
    titulo: '¿Hablamos?',
    frase: 'Si tienes un puesto, un proyecto freelance o una idea que quieras probar, escríbeme.',
    copiar: 'Copiar correo',
    copiado: 'Correo copiado',
    escribir: 'Escribirme',
  },
  pie: {
    hecho: 'Hecho con Astro, GSAP y WebGL escrito a mano',
    pista: 'Hay cosas escondidas en este cielo. Pista: el Ídolo de Ambato.',
  },
  caso: {
    volver: 'Todos los proyectos',
    problema: 'El problema',
    parte: 'Mi parte',
    estado: 'Estado',
    decisiones: 'Decisiones',
    siguiente: 'Siguiente proyecto',
  },
  huevos: {
    deseoTitulo: 'Atrapaste tres estrellas fugaces.',
    deseo: 'Pide un deseo: ¿trabajamos juntos?',
    escribeme: 'Escríbeme',
    cerrar: 'Cerrar',
    macara: '¡Vamos, Macará!',
    macaraSub: 'El Ídolo de Ambato. Celeste de corazón.',
  },
  error: {
    titulo: 'Perdido en el espacio',
    texto: 'Esta página no existe o se movió. La nave vuelve a la portada cuando quieras.',
    volver: 'Volver a la portada',
  },
  cv: {
    titulo: 'Currículum',
    perfil:
      'Desarrollador full stack. Construyo aplicaciones web con NestJS, Next.js y PostgreSQL y les sumo IA cuando el problema lo pide. Hoy hago la pasantía de TIC en la Empresa Eléctrica Ambato. Trabajo con especificaciones, agentes de programación y pruebas.',
    secciones: {
      perfil: 'Perfil',
      experiencia: 'Experiencia',
      proyectos: 'Proyectos',
      formacion: 'Formación',
      certificados: 'Logros y certificados',
      stack: 'Tecnologías',
      idiomas: 'Idiomas',
    },
    imprimir: 'Descargar PDF',
  },
};

export default es;
export type Textos = typeof es;

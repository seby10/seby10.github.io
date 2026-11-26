import type { Textos } from './es';

// Same shape as es.ts.
const en: Textos = {
  lang: 'en',
  locale: 'en_US',
  rutas: { inicio: '/en/', caso: '/en/projects/', cv: '/en/cv/', otro: '/' },
  cvPdf: '/cv/Sebastian-Constante-CV-EN.pdf',
  meta: {
    titulo: 'Sebastián Constante · Full-stack developer',
    descripcion:
      "Full-stack developer in Ambato, Ecuador. I build web apps with NestJS, Next.js and PostgreSQL, and add AI when it's useful.",
  },
  nav: {
    proyectos: 'Projects',
    experiencia: 'Experience',
    sobre: 'About',
    contacto: 'Contact',
    cv: 'CV',
    idioma: 'ES',
    idiomaLargo: 'Leer en español',
    saltar: 'Skip to content',
    inicio: 'home',
  },
  portada: {
    disponible: 'Open to full-time roles and freelance',
    rol: 'Full-stack developer',
    antes: 'I build',
    rota: ['web apps', 'APIs', 'AI-powered products', 'real-time dashboards'],
    stack: ['NestJS', 'Next.js', 'PostgreSQL', 'TypeScript'],
    verProyectos: 'See projects',
    descargarCv: 'Download CV',
    lugar: 'Ambato, Ecuador',
    hora: 'local time',
    bajar: 'Scroll',
  },
  sobre: {
    titulo: 'About',
    frase: [
      "I'm Sebastián {retrato}, a full-stack developer based in Ambato, Ecuador.",
      "Right now I work on internal systems at Empresa Eléctrica Ambato {rayo}, the regional power utility, with Angular, Spring Boot and Oracle.",
      "On my own and with my team I build web apps with NestJS and Next.js, and when the problem calls for it, I add AI {chispa}",
    ],
    como: [
      { titulo: 'Spec first', texto: 'I write down what I am going to build before I touch any code.' },
      { titulo: 'Agents with context', texto: 'I hand parts of the work to coding agents and give them the context in writing.' },
      { titulo: 'Tests', texto: 'Unit, integration and end-to-end, wherever the project needs them.' },
    ],
  },
  proyectos: {
    titulo: 'Projects',
    intro: 'Five projects in depth: the problem, what I did and what I used.',
    verCaso: 'Case study',
    miParte: 'My part',
    codigo: 'Code',
    mas: 'More projects',
    arrastra: 'Scroll',
    estados: {
      'en-uso': 'In use',
      'probado-detenido': 'Tested with a client',
      academico: 'Academic',
      prototipo: 'Prototype',
    },
  },
  experiencia: {
    intro: 'Where I have worked on real systems, for real clients.',
    titulo: 'Experience',
    lista: [
      {
        cargo: 'IT Intern',
        lugar: 'Empresa Eléctrica Ambato',
        fecha: 'Jul 2026 – Jan 2027',
        logros: [
          'Built the reporting and dashboard module for the Industrial Relations department.',
          'Delivered a new sprint of the conflict-of-interest declaration system.',
          'Improved the transportation and payroll systems.',
        ],
        stack: ['Angular', 'Spring Boot', 'Java', 'Oracle'],
      },
      {
        cargo: 'Freelance web developer',
        lugar: 'Praliné Coffee House',
        fecha: '2026',
        logros: [
          'Built the landing page the coffee shop uses every day: bilingual menu, opening hours and Wi-Fi.',
          'With my team we built Kaphiy, its QR ordering system, and tested it on site.',
        ],
        stack: [],
      },
      {
        cargo: 'Web development intern',
        lugar: 'Gala Corp',
        fecha: 'Jun – Aug 2025',
        logros: ['Built, as part of a team, the Procoineec landing page, still live at procoineec.com.'],
        stack: ['React', 'Vite', 'Tailwind'],
      },
    ],
  },
  stack: {
    titulo: 'Stack',
    grupos: [
      {
        grupo: 'Daily',
        lista: ['TypeScript', 'Next.js', 'NestJS', 'PostgreSQL', 'Angular', 'Spring Boot', 'Java', 'Oracle', 'Git'],
      },
      {
        grupo: 'In projects',
        lista: ['React', 'Prisma', 'Python', 'Docker', 'Vitest', 'Playwright', 'Tailwind', 'YOLOv8'],
      },
      { grupo: 'Exploring', lista: ['Offensive security', 'LLM apps'] },
    ],
  },
  formacion: {
    titulo: 'Education',
    carrera: 'B.Eng. in Software Engineering',
    universidad: 'Universidad Técnica de Ambato',
    fecha: '2022 – 2027',
    detalle:
      'Final year. My thesis evaluates automated validation mechanisms for clinical records in offline rural primary care.',
    logrosTitulo: 'Awards and certificates',
    logros: [
      {
        fecha: 'Nov 2026',
        titulo: 'Python Essentials 2',
        texto: 'Cisco Networking Academy.',
        url: 'https://www.credly.com/badges/b577b629-6079-469b-a8bf-0835ed1baf8c/public_url',
      },
      { fecha: 'In progress', titulo: 'Google Cloud Computing Foundations', texto: 'Google Cloud.' },
      { fecha: 'In progress', titulo: 'Ethical Hacking', texto: 'Course underway.' },
      { fecha: '2025', titulo: 'Academic excellence scholarship', texto: 'Universidad Técnica de Ambato.' },
      {
        fecha: 'Sep 2026',
        titulo: 'Data Science Essentials with Python',
        texto: 'Cisco Networking Academy.',
        url: 'https://www.credly.com/badges/07105a04-b961-4d80-a985-87d34e53c057/public_url',
      },
      { fecha: '2024', titulo: 'Network Support and Security', texto: 'Cisco Networking Academy.' },
      { fecha: 'Jun 2024', titulo: 'Introduction to IoT', texto: 'Cisco Networking Academy.' },
    ],
    idiomasTitulo: 'Languages',
    idiomas: [
      { idioma: 'Spanish', nivel: 'Native' },
      { idioma: 'English', nivel: 'Advanced' },
      { idioma: 'French', nivel: 'Basic' },
    ],
  },
  fuera: {
    titulo: 'Off the clock',
    lista: [
      { icono: 'diseno', texto: 'Graphic design' },
      { icono: 'video', texto: 'Video editing in After Effects and Premiere' },
      { icono: 'libro', texto: 'Books on self-reflection and software architecture' },
      { icono: 'balon', texto: 'Macará fan' },
    ],
  },
  contacto: {
    titulo: "Let's talk",
    frase: "If you have a role, a freelance project or an idea you want to try, write to me.",
    copiar: 'Copy email',
    copiado: 'Email copied',
    escribir: 'Email me',
  },
  pie: {
    hecho: 'Built with Astro, GSAP and hand-written WebGL',
    pista: "There are hidden things in this sky. Hint: Ambato's idol.",
  },
  caso: {
    volver: 'All projects',
    problema: 'The problem',
    parte: 'My part',
    estado: 'Status',
    decisiones: 'Decisions',
    siguiente: 'Next project',
  },
  huevos: {
    deseoTitulo: 'You caught three shooting stars.',
    deseo: 'Make a wish: shall we work together?',
    escribeme: 'Email me',
    cerrar: 'Close',
    macara: '¡Vamos, Macará!',
    macaraSub: "Ambato's idol. Sky blue at heart.",
  },
  error: {
    titulo: 'Lost in space',
    texto: "This page doesn't exist or it moved. The ship can take you back home anytime.",
    volver: 'Back to home',
  },
  cv: {
    titulo: 'Résumé',
    perfil:
      "Full-stack developer. I build web apps with NestJS, Next.js and PostgreSQL and add AI when the problem calls for it. I'm currently an IT intern at Empresa Eléctrica Ambato. I work spec-first, with coding agents and with tests.",
    secciones: {
      perfil: 'Profile',
      experiencia: 'Experience',
      proyectos: 'Projects',
      formacion: 'Education',
      certificados: 'Awards and certificates',
      stack: 'Technologies',
      idiomas: 'Languages',
    },
    imprimir: 'Download PDF',
  },
};

export default en;

/**
 * Los 7 programas. Cada uno genera su propia página automáticamente.
 *
 * Procedencia del contenido:
 *   - `descripcion` marcada REAL  -> copiada literal del sitio actual.
 *   - `descripcion` marcada NUEVA -> redactada a partir de los episodios
 *     publicados. PENDIENTE DE VALIDACIÓN por Talentópolis.
 */
import episodios from "./episodios.json";

// NOTA: "Talentópolis PodCast" se eliminó — sus episodios eran en realidad la
// T2 de Organizaciones del Mañana, que ya está incluida en ese programa.
const P = [
  {
    slug: "organizaciones-del-manana-podcast",
    nombre: "Organizaciones del Mañana",
    tagline: "Historias reales y herramientas que se aplican hoy",
    // REAL — literal del sitio actual.
    descripcion: [
      "Organizaciones del Mañana te invita a acompañar a Andrés Cardemil y su equipo en un viaje transformador: historias reales, expertas reflexivas y recomendaciones que realmente se aplican en tu trabajo hoy.",
      "Descubre cómo adaptarte con agilidad, anticiparte a las exigencias del mercado y construir un propósito que resuene con los desafíos de nuestra época. Sé protagonista: impacta tu entorno profesional, impulsa innovación y prospera en el presente, porque el futuro empieza ahora.",
    ],
    portada: "/assets/images/E3_Talentopolis-600.webp",
    portadaAlt: "Portada del podcast Organizaciones del Mañana",
    conductor: "Andrés Cardemil",
    spotify: "https://open.spotify.com/playlist/20EiQzZa0x0DYSuGkewPAP",
    temporada: "5ª Temporada",
  },
  {
    slug: "delaulaalacancha-podcast",
    nombre: "Del Aula a la Cancha",
    tagline: "CFT / IP Santo Tomás",
    // REAL — literal del sitio actual.
    descripcion: [
      "Porque el conocimiento técnico ya no es un «plus», es el estándar para quienes buscan marcar la diferencia. Si tu objetivo es salir del «aprender» pasivo y entrar en la cancha real, aquí tienes tu brújula sonora.",
      "Escuchar relatos de transformación: desde el aula hasta liderar proyectos reales. Conocer herramientas concretas y tácticas que puedes aplicar mañana.",
    ],
    portada: "/assets/images/E2_Talentopolis-600.webp",
    portadaAlt: "Portada del podcast Del Aula a la Cancha",
    conductor: "Cristián Arenas",
    spotify: "https://open.spotify.com/playlist/5D9GJFOX7SjeNlY7UOuCka",
    temporada: "1ª Temporada",
  },
  {
    slug: "mujeres-sin-pausa-podcast",
    nombre: "Mujer Hoy: Sin Límites",
    tagline: "La menopausia no es un cierre, es una puerta",
    // REAL — literal del sitio actual.
    descripcion: [
      "Aquí celebramos la sabiduría que solo dan los años, el coraje de redefinirse y la dignidad de liderar con propósito. La menopausia no es un cierre, es una puerta abierta a la mejor versión de ti misma.",
      "Conducido por la Dra. Francisca Valdivieso, ginecóloga y referente, cada episodio reúne a mujeres que han transformado sus desafíos en plataformas de liderazgo, fe y reinvención. Historias reales, sin filtro, que inspiran y empoderan.",
    ],
    // REAL — literal del sitio actual.
    paraQuien: [
      "Sientes que llegó la hora de poner tu voz al centro.",
      "Quieres dejar de sobrevivir… y empezar a liderar tu nueva etapa.",
      "Buscas comunidad, coraje y cambio real.",
    ],
    portada: "/assets/images/E0_Talentopolis-600.webp",
    portadaAlt: "Portada del podcast Mujer Hoy: Sin Límites",
    conductor: "Dra. Francisca Valdivieso",
    spotify: "https://open.spotify.com/playlist/5bXKhfbmaIvVYHibCDhkRn",
    temporada: "2ª Temporada",
  },
  {
    slug: "coffebreak-con-talento",
    nombre: "CoffeeBreak con Talento",
    tagline: "Profesionales que ayudan a otros profesionales",
    // NUEVA — redactada a partir de los 5 episodios publicados.
    descripcion: [
      "¿Estás listo para dirigir tu vida y alcanzar el éxito que siempre has soñado? CoffeeBreak con Talento son conversaciones breves y directas con profesionales que comparten lo que de verdad les funcionó.",
      "Liderazgo, ciberseguridad, innovación, formación continua e internacionalización: cada episodio deja una idea aplicable, en el tiempo que dura un café.",
    ],
    portada: "/assets/images/E7_Talentopolis-600.webp",
    portadaAlt: "Portada del podcast CoffeeBreak con Talento",
    conductor: "Andrés Cardemil",
    // PENDIENTE: en el sitio actual esta página incrusta la MISMA playlist de
    // Spotify que «Organizaciones del Mañana». Falta la playlist propia.
    spotify: null,
    temporada: "1ª Temporada",
  },
  {
    slug: "capsulas-para-el-exito",
    nombre: "Conocimiento Encapsulado",
    tagline: "Ideas del futuro del trabajo, en cápsulas de pocos minutos",
    // NUEVA — redactada a partir de las 6 cápsulas publicadas.
    descripcion: [
      "Formato breve, sin relleno. Cada cápsula toma una tendencia que ya está cambiando la forma en que trabajamos y la explica en pocos minutos.",
      "Exoesqueletos, ropa inteligente, realidad mixta, gamificación o burnout laboral: lo que necesitas saber para no quedarte atrás, sin dedicarle una hora.",
    ],
    portada: "/assets/images/Cuadrado-programa-600.webp",
    portadaAlt: "Portada de Conocimiento Encapsulado",
    conductor: null,
    spotify: "https://open.spotify.com/show/033TvIfkjP1UzmHeNidKfy",
    temporada: "Cápsulas",
  },
  {
    slug: "kolumnalaboral-podcast",
    nombre: "Kolumna Laboral",
    tagline: "¡El futuro del trabajo es hoy!",
    // NUEVA — redactada a partir de los episodios publicados.
    descripcion: [
      "Kolumna Laboral entra en los temas que las organizaciones suelen esquivar: negociación colectiva, relaciones laborales y el rol de las personas dentro de la empresa.",
      "Conducido junto a Christian Kolubakin, ex gerente de personas y asesor de empresas, con la mirada práctica de quien ha estado a ambos lados de la mesa.",
    ],
    portada: "/assets/images/E5_Talentopolis-600.webp",
    portadaAlt: "Portada del podcast Kolumna Laboral",
    conductor: "Christian Kolubakin",
    // PENDIENTE: en el sitio actual incrusta la MISMA playlist que «Talentópolis
    // PodCast». Falta la playlist propia.
    spotify: null,
    temporada: "1ª Temporada",
  },

  // --- Programas incorporados desde el brochure B2B 2026 -------------------
  {
    slug: "cisos-club",
    nombre: "CISO's Club",
    tagline: "El espacio de los líderes de ciberseguridad",
    // REAL — literal del brochure 2026.
    descripcion: [
      "Espacio exclusivo para líderes de ciberseguridad, analizando riesgos y tendencias globales.",
      "Un formato pensado para CISOs y responsables de seguridad que necesitan contexto, no titulares: qué está pasando, qué implica para su organización y cómo se están preparando otros.",
    ],
    // Esta es la carátula que el sitio anterior mostraba enlazada por error a
    // «Talentópolis PodCast»; el brochure confirma que pertenece aquí.
    portada: "/assets/images/E1_Talentopolis-600.webp",
    portadaAlt: "Portada del podcast CISO's Club",
    conductor: "Alejandro González",
    spotify: "https://open.spotify.com/show/3PLzg4cnPl2UifUuGLUdUr",
    temporada: "1ª Temporada",
  },
  {
    slug: "finanzas-del-futuro",
    nombre: "Finanzas del Futuro",
    tagline: "Economía, mercados y activos digitales",
    // REAL — literal del brochure 2026.
    descripcion: [
      "Análisis y proyecciones sobre el mundo económico y nuevas tendencias financieras en activos digitales.",
      "Un programa para entender hacia dónde se mueve el dinero y qué significa para empresas y profesionales.",
    ],
    portada: "/assets/images/prog-finanzas-600.webp",
    portadaAlt: "Portada del podcast Finanzas del Futuro",
    conductor: "Cristóbal Pereira",
    spotify: "https://open.spotify.com/show/1KRj25ihnIH6Vk006DNPDv",
    temporada: "1ª Temporada",
  },
  {
    slug: "mujer-sin-pausa-podcast",
    nombre: "Mujer Sin Pausa",
    tagline: "¡Lo mejor está por venir!",
    // REAL — literal del sitio anterior (WordPress).
    descripcion: [
      "¡Mujer Sin Pausa! Un pódcast hecho para mujeres que están disfrutando de la mitad de la vida, que es cuando el éxito laboral y personal se entrelazan para crear un futuro lleno de oportunidades.",
      "Las conductoras Dra. Francisca Valdivieso y Dra. María de los Ángeles Larraín, ambas reconocidas ginecólogas, conversan con diversas y destacadas invitadas. Cada una con historias inspiradoras que nos demuestran que el Liderazgo femenino está dibujando un mejor Futuro hoy!",
    ],
    portada: "/assets/images/prog-mujer-sin-pausa-600.webp",
    portadaAlt: "Portada del podcast Mujer Sin Pausa",
    conductor: "Dra. Francisca Valdivieso y Dra. María de los Ángeles Larraín",
    spotify: null,
    temporada: "1ª Temporada",
  },
  {
    slug: "resility",
    nombre: "Resility",
    tagline: "Un PodCast de Ciberseguridad, IA y Tech",
    // REAL — literal del brochure 2026.
    descripcion: [
      "Entrevistas B2B ejecutivas con CTOs, CISOs, CIOs, abogados tech y especialistas financieros: ciberseguridad empresarial, IA aplicada a negocios, transformación digital, fintech y marco legal del mundo digital.",
    ],
    portada: "/assets/images/prog-resility-600.webp",
    portadaAlt: "Portada del podcast Resility",
    conductor: "Patricio Campos",
    spotify: null,
    temporada: "1ª Temporada",
  },
  {
    slug: "delaulaalacancha-t2",
    nombre: "Del Aula a la Cancha T2",
    tagline: "CFT / IP Santo Tomás",
    // REAL — misma descripción que la Temporada 1 (mismo programa, nueva
    // temporada).
    descripcion: [
      "Porque el conocimiento técnico ya no es un «plus», es el estándar para quienes buscan marcar la diferencia. Si tu objetivo es salir del «aprender» pasivo y entrar en la cancha real, aquí tienes tu brújula sonora.",
      "Escuchar relatos de transformación: desde el aula hasta liderar proyectos reales. Conocer herramientas concretas y tácticas que puedes aplicar mañana.",
    ],
    portada: "/assets/images/prog-delaulaalacancha-t2-600.webp",
    portadaAlt: "Portada del podcast Del Aula a la Cancha, Temporada 2",
    conductor: "Cristián Arenas",
    spotify: null,
    temporada: "2ª Temporada · En emisión",
  },
  {
    slug: "comunicarte",
    nombre: "ComunicArte",
    tagline: "Comunicación estratégica, cultura y pensamiento ejecutivo",
    // REAL — literal de la página propia que tenía este programa.
    descripcion: [
      "Conversaciones sobre comunicación, liderazgo, cultura y el arte de expresar ideas con impacto. Cada episodio, una invitada o invitado que ha marcado la conversación pública en Chile, en un formato cercano y de alto nivel editorial.",
      "Un espacio donde la conversación fluye entre la cultura, el arte y el pensamiento ejecutivo — con la mirada estratégica de Macarena Saavedra.",
    ],
    portada: "/assets/images/prog-comunicarte-600.webp",
    portadaAlt: "Portada del podcast ComunicArte",
    conductor: "Macarena Saavedra",
    spotify: null,
    temporada: "1ª Temporada · En emisión",
  },
];

/**
 * Próximos lanzamientos. Fuente: brochure B2B 2026.
 * No tienen página propia todavía: se anuncian en la rejilla de programas.
 */
export const proximamente = [
  {
    nombre: "IngenIA Conmigo",
    destacado: true,
    badge: "MUY PRONTO · NUEVO ESTRENO",
    portada: "/assets/images/prog-ingenia-600.webp",
    portadaAlt: "Portada del próximo podcast IngenIA Conmigo",
    descripcion:
      "¿Cómo será la ingeniería en 2050? Se está construyendo ahora mismo, en cada decisión, proyecto y carrera que arranca hoy. IngenIA Conmigo conecta ese futuro con el presente: " +
      "conversaciones con líderes de industria, académicos y egresados sobre el valor real de la ingeniería en Chile, y hacia dónde nos está llevando. " +
      "Conduce Juan José Negroni, en colaboración con la Universidad Santo Tomás.",
  },
];

export const programas = P.map((p) => {
  // temporadas: [{ temporada, videos: [{id,titulo,thumb}] }], en orden real de
  // las playlists de YouTube.
  const temporadas = episodios[p.slug] ?? [];
  const totalEpisodios = p.episodiosManual ?? temporadas.reduce((n, t) => n + t.videos.length, 0);
  return {
    ...p,
    url: `/${p.slug}/`,
    temporadas,
    totalEpisodios,
    tieneTemporadas: temporadas.length > 1,
  };
});

export const getPrograma = (slug) => programas.find((p) => p.slug === slug);

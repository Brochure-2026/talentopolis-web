/**
 * Los 7 servicios. Cada uno genera su página desde esta misma estructura.
 *
 * Procedencia:
 *   origen: "real"      -> texto literal del sitio actual.
 *   origen: "reubicado" -> texto real del sitio, tomado de otra página.
 *   origen: "nuevo"     -> redactado aquí. PENDIENTE DE VALIDACIÓN.
 */

export const servicios = [
  {
    slug: "podcast",
    nombre: "Tu propio Podcast",
    titulo: "Crea tu propio podcast con Talentópolis",
    origen: "real",
    icono: "mic",
    resumen:
      "Producción llave en mano: de la idea al episodio publicado, y el podcast es 100% tuyo.",
    intro:
      "¿Tienes una idea, un mensaje o una historia que merece ser escuchada? En Talentópolis te ayudamos a convertirlo en un podcast profesional, listo para conquistar audiencias.",
    incluyeTitulo: "¿Qué incluye nuestro servicio?",
    incluye: [
      ["Conceptualización", "Te guiamos en la definición del formato, tono y estructura."],
      ["Grabación", "En estudio profesional o de manera remota."],
      ["Edición y postproducción", "Calidad de sonido impecable, música, intros y branding sonoro."],
      ["Distribución", "Opcional en las principales plataformas: Spotify, Apple Podcasts, YouTube y más."],
    ],
    porqueTitulo: "¿Por qué con nosotros?",
    porque: [
      "Producción llave en mano: tú hablas, nosotros hacemos el resto.",
      "Independencia total: el podcast es 100% tuyo, sin depender de nuestros canales.",
      "Experiencia real en creación de contenidos para marcas, expertos y emprendedores.",
      "Escalable: desde un piloto hasta temporadas completas.",
    ],
    cierreTitulo: "Dale voz a tus ideas",
    cierre:
      "Con Talentópolis puedes pasar de una buena idea a un podcast que inspire, entretenga y posicione tu marca o perfil personal.",
  },

  {
    slug: "produccion-audiovisual",
    nombre: "Producción Audiovisual",
    titulo: "Producción audiovisual",
    origen: "real",
    icono: "video",
    resumen:
      "Spots, cápsulas, comunicados y campañas de marca con calidad profesional de principio a fin.",
    intro:
      "Tu historia, tu marca o tu evento merecen verse con calidad profesional. En Talentópolis transformamos ideas en contenidos audiovisuales que conectan, inspiran y generan impacto real.",
    incluyeTitulo: "¿Qué hacemos?",
    incluye: [
      ["Cobertura de eventos", "Corporativos, personales, lanzamientos y conferencias."],
      ["Campañas de marca", "Spots publicitarios, cápsulas y contenido para redes sociales."],
      ["Comunicados de prensa en video", "Mensajes claros y con producción profesional."],
      ["Recuerdos audiovisuales", "Piezas memorables para hitos especiales."],
    ],
    porqueTitulo: "¿Por qué elegirnos?",
    porque: [
      "Producción llave en mano, desde la idea hasta la postproducción.",
      "Equipo técnico y humano con experiencia en medios y marcas.",
      "Contenidos optimizados para múltiples plataformas: TV, web y redes sociales.",
      "Flexibilidad: proyectos personales, corporativos o de gran escala.",
    ],
    cierreTitulo: "Eleva tu comunicación",
    cierre:
      "Con Talentópolis no solo obtienes un video: obtienes una herramienta de comunicación poderosa que multiplica la presencia de tu marca y te ayuda a llegar más lejos.",
  },

  {
    slug: "produccion-audiovisual-media-partner-2",
    nombre: "Cobertura de Eventos y Media Partner",
    titulo: "Cobertura de eventos y media partner",
    origen: "real",
    icono: "event",
    resumen:
      "Registramos, producimos y difundimos tu evento, y lo convertimos en contenido que sigue circulando.",
    intro:
      "Haz que tu evento no solo se viva, sino que también se recuerde. En Talentópolis nos encargamos de registrar, producir y difundir tus eventos con un nivel audiovisual profesional, convirtiéndolos en contenido de alto impacto para tu marca.",
    incluyeTitulo: "¿Qué hacemos?",
    incluye: [
      ["Cobertura completa", "Grabación y transmisión en vivo de conferencias, lanzamientos, ferias, aniversarios o encuentros especiales."],
      ["Producción de contenido", "Cápsulas, entrevistas y clips listos para redes sociales."],
      ["Media Partner", "Alianza estratégica para amplificar tu evento en nuestras plataformas y comunidad."],
      ["Postproducción", "Edición y entrega de las piezas finales listas para publicar."],
    ],
    porqueTitulo: "¿Por qué elegir Talentópolis?",
    porque: [
      "Equipo técnico especializado en producción de eventos en vivo.",
      "Difusión multiplataforma: presencial, digital y redes sociales.",
      "Opción de integrar tu marca en contenidos con mayor alcance.",
      "Flexibilidad: proyectos corporativos, culturales o personales.",
    ],
    cierreTitulo: "Convierte tu evento en contenido",
    cierre:
      "Con Talentópolis, tu evento no termina cuando bajan las luces: lo transformamos en una pieza de comunicación que sigue sumando valor y visibilidad.",
  },

  {
    slug: "alianzas-comerciales",
    nombre: "Alianzas Comerciales",
    titulo: "Alianzas comerciales",
    // La página vivía vacía en el sitio actual. Este texto es REAL: estaba
    // publicado en la home, en la sección «Alianzas Comerciales».
    origen: "reubicado",
    icono: "handshake",
    resumen:
      "Alianzas hechas a medida para marcas y líderes que quieren ser parte del cambio en el mundo del trabajo.",
    intro:
      "En Talentópolis no hacemos networking, construimos futuro. Por eso, invitamos a marcas, empresas y líderes con visión a sumar fuerzas con nosotros. Te abrimos las puertas (y las cámaras) para amplificar tu visibilidad, fortalecer tu posicionamiento y conectar con audiencias que valoran propósito, innovación y contenido con impacto.",
    incluyeTitulo: "¿Qué tipo de alianzas diseñamos?",
    incluye: [
      ["Auspicio", "Presencia de tu marca dentro de nuestros programas y temporadas."],
      ["Patrocinio", "Respaldo institucional a proyectos y contenidos concretos."],
      ["Canje", "Intercambio de valor sin inversión directa de por medio."],
      ["Co-creación", "Formatos nuevos diseñados junto a tu marca."],
    ],
    porqueTitulo: "¿Por qué sumarte?",
    porque: [
      "Audiencias que valoran propósito, innovación y contenido con impacto.",
      "Beneficio mutuo: el diseño de cada alianza parte de tus objetivos.",
      "Amplificación en todas nuestras plataformas y comunidad.",
      "Proyección exponencial: de una acción puntual a una relación de largo plazo.",
    ],
    cierreTitulo: "Este es el momento",
    cierre:
      "¿Buscas auspiciar, patrocinar, canjear o co-crear contenidos de alto valor? Si tu marca quiere ser parte del cambio en el mundo del trabajo, este es el momento. Y este, el escenario.",
  },

  {
    slug: "auspicios-y-patrocinio",
    nombre: "Auspicios & Patrocinios",
    titulo: "Auspicios y patrocinios",
    origen: "real",
    icono: "star",
    resumen:
      "Integra tu marca en podcasts, programas, cápsulas y transmisiones con audiencias reales.",
    intro:
      "Haz que tu marca brille en contenidos que inspiran. En Talentópolis ofrecemos espacios de auspicio y patrocinio para que empresas y marcas se integren en podcasts, programas, cápsulas digitales o transmisiones en vivo con audiencias reales y en crecimiento.",
    incluyeTitulo: "¿Qué ofrecemos?",
    incluye: [
      ["Presencia de marca", "En programas y temporadas completas."],
      ["Menciones integradas", "Dentro de podcasts y cápsulas, con naturalidad."],
      ["Branding audiovisual", "En transmisiones y piezas de difusión."],
      ["Opciones flexibles", "Desde un episodio hasta una serie completa."],
    ],
    porqueTitulo: "¿Por qué auspiciar con Talentópolis?",
    porque: [
      "Acceso a una audiencia segmentada e interesada en innovación, cultura y talento.",
      "Producción premium: tu marca se asocia con contenido de calidad.",
      "Reportes de impacto y métricas claras de visibilidad.",
      "Oportunidad de posicionar tu marca en formatos frescos y relevantes.",
    ],
    cierreTitulo: "Conviértete en socio estratégico",
    cierre:
      "Los auspiciadores de Talentópolis no solo obtienen visibilidad: se convierten en aliados de proyectos que conectan con comunidades auténticas.",
  },

  {
    slug: "canjes",
    nombre: "Canjes & Colaboraciones",
    titulo: "Canjes y colaboraciones",
    origen: "real",
    icono: "swap",
    resumen:
      "Visibilidad para tu producto o servicio sin inversión directa: un intercambio de valor.",
    intro:
      "¿Quieres darle visibilidad a tu producto o servicio sin necesidad de inversión directa? En Talentópolis creemos en el poder de los acuerdos colaborativos: un intercambio de valor donde tu marca gana exposición y nosotros integramos lo mejor de tu propuesta en nuestros contenidos.",
    incluyeTitulo: "¿Cómo funciona?",
    incluye: [
      ["Nos compartes tu producto o servicio", "Cuéntanos qué ofreces y a quién quieres llegar."],
      ["Diseñamos una integración creativa", "Dentro de nuestros programas, podcasts, cápsulas o transmisiones."],
      ["Tu marca obtiene presencia", "Frente a una audiencia real y segmentada."],
      ["Ambos ganamos", "Una colaboración transparente y estratégica."],
    ],
    porqueTitulo: "¿Por qué sumarte?",
    porque: [
      "Ideal para startups, marcas emergentes y emprendedores con visión.",
      "Exposición en formatos digitales innovadores.",
      "Flexibilidad: desde menciones en cápsulas hasta presencia en transmisiones en vivo.",
      "Networking: formar parte de la comunidad Talentópolis abre nuevas puertas.",
    ],
    cierreTitulo: "Colaboremos",
    cierre:
      "Si tu propuesta aporta valor, nosotros nos encargamos de amplificarla. No es gasto, es alianza.",
  },

  {
    slug: "estudio-de-grabacion",
    nombre: "Estudio de Grabación",
    titulo: "Grabación donde la necesites",
    // Reescrito según Talentópolis: no hay un estudio fijo; graban en múltiples
    // locaciones y los detalles/tarifas se definen en la cotización.
    origen: "real",
    icono: "studio",
    resumen:
      "No nos atamos a un set fijo: llevamos la producción a la locación que mejor funcione para tu contenido.",
    intro:
      "No trabajamos con un único estudio. Llevamos nuestro equipo y producción a la locación que mejor se adapte a tu proyecto: oficinas, universidades, eventos, sets o espacios de nuestros partners. Grabamos donde surja la mejor historia.",
    incluyeTitulo: "¿Qué grabamos?",
    incluye: [
      ["Podcast y video podcast", "Grabación multicámara con audio profesional."],
      ["Entrevistas y cápsulas", "Formatos cortos listos para redes sociales."],
      ["Cursos e-learning", "Producción de contenido formativo para empresas e instituciones."],
      ["Contenido corporativo", "Comunicados, formación interna y mensajes de marca."],
    ],
    porqueTitulo: "¿Por qué producción móvil?",
    porque: [
      "Flexibilidad total: elegimos la locación según el proyecto, sin atarte a un lugar.",
      "Llevamos el equipo técnico y humano donde haga falta.",
      "El ambiente adecuado para cada contenido, en vez de un set genérico.",
      "Salida directa a postproducción con nuestro propio equipo.",
    ],
    cierreTitulo: "Hablemos de tu grabación",
    cierre:
      "Los detalles técnicos y las tarifas se definen en la cotización, según tu proyecto y la locación. Escríbenos y lo armamos a tu medida.",
    // Lugares donde hemos grabado (se pueden ir sumando más).
    lugares: {
      titulo: "Algunos de los lugares donde hemos grabado",
      items: [
        {
          nombre: "DoubleTree by Hilton Santiago – Vitacura",
          direccion: "Av. Vitacura 2727, Las Condes",
          mapa: "/assets/images/mapa-vitacura.webp",
          comollegar:
            "https://www.google.com/maps/dir/?api=1&destination=Av.+Vitacura+2727,+Las+Condes,+Santiago",
        },
        {
          nombre: "Centro ACHS Salud – Las Condes",
          direccion: "Av. Las Condes 6830, Las Condes",
          mapa: "/assets/images/mapa-achs.webp",
          comollegar:
            "https://www.google.com/maps/dir/?api=1&destination=Av.+Las+Condes+6830,+Las+Condes,+Santiago",
        },
        {
          nombre: "Oficina Talentópolis – Providencia",
          direccion: "Antonio Bellet 444, Of. 203, Providencia",
          mapa: "/assets/images/mapa-oficina.webp",
          comollegar:
            "https://www.google.com/maps/dir/?api=1&destination=Antonio+Bellet+444,+Providencia,+Santiago",
        },
      ],
    },
  },

  {
    slug: "manejo-de-redes-sociales",
    nombre: "Manejo de Redes Sociales",
    titulo: "Manejo de redes sociales",
    // Servicio que figura en el brochure 2026 y que no estaba en la web.
    origen: "real",
    icono: "swap",
    resumen:
      "Gestión estratégica de comunidades, contenido diario y optimización de tu presencia digital.",
    intro:
      "Gestión estratégica de comunidades, creación de contenido diario y optimización de presencia digital. Cerramos el círculo: producimos el contenido y también lo hacemos circular.",
    incluyeTitulo: "¿Qué incluye?",
    incluye: [
      ["Estrategia de contenido", "Definimos qué publicar, dónde y con qué frecuencia."],
      ["Producción diaria", "Piezas nativas para cada red, a partir de tu material."],
      ["Gestión de comunidad", "Respuesta e interacción con tu audiencia."],
      ["Optimización y reporte", "Medimos qué funciona y ajustamos el rumbo."],
    ],
    porqueTitulo: "¿Por qué con nosotros?",
    porque: [
      "Somos productora: el contenido no se externaliza, lo hacemos nosotros.",
      "Reutilizamos tu material audiovisual en vez de partir de cero cada semana.",
      "Coherencia entre lo que produces y lo que publicas.",
      "Escalable: desde una red hasta tu ecosistema digital completo.",
    ],
    cierreTitulo: "Que tu contenido circule",
    cierre:
      "Producir buen contenido es la mitad del trabajo. La otra mitad es que llegue a quien tiene que llegar.",
  },
];

export const getServicio = (slug) => servicios.find((s) => s.slug === slug);

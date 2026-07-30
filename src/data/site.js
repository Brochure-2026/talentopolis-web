/**
 * Datos globales del sitio.
 * Editar aquí cambia la cabecera, el pie y los metadatos de TODAS las páginas.
 */

export const site = {
  nombre: "Talentópolis",
  dominio: "https://talentopolis.cl",
  claim: "¡El futuro del trabajo es hoy!",
  descripcion:
    "Productora audiovisual y medio de comunicación multiplataforma en Santiago de Chile. " +
    "Podcast, video podcast, webinars y contenido corporativo para empresas, líderes y expertos.",
};

export const contacto = {
  telefono: "+56 9 4740 4142",
  telefonoE164: "56947404142",
  email: "contacto@talentopolis.cl",
  direccion: "Antonio Bellet 444, Of. 203",
  comuna: "Providencia, Región Metropolitana, Chile",
  mapa: "https://share.google/dx74NzzvAYbMZaJua",
};

export const whatsappUrl = (texto = "Hola, quiero solicitar un servicio de Talentópolis.") =>
  `https://wa.me/${contacto.telefonoE164}?text=${encodeURIComponent(texto)}`;

export const redes = [
  { nombre: "YouTube", url: "https://www.youtube.com/@talentopolis", icono: "youtube" },
  { nombre: "LinkedIn", url: "https://www.linkedin.com/company/talent%C3%B3polis-oficial/", icono: "linkedin" },
  { nombre: "Instagram", url: "https://www.instagram.com/talentopolis/", icono: "instagram" },
  { nombre: "TikTok", url: "https://www.tiktok.com/@talentopolis", icono: "tiktok" },
  { nombre: "Facebook", url: "https://www.facebook.com/TalentopolisOficial/", icono: "facebook" },
];

/** Plataformas donde se distribuye el contenido. */
export const plataformas = [
  { nombre: "Spotify", img: "/assets/images/logo-001.webp" },
  { nombre: "Apple Podcasts", img: "/assets/images/logo-004.webp" },
  { nombre: "YouTube", img: "/assets/images/logo-003.webp" },
  { nombre: "YouTube Music", img: "/assets/images/logo-002.webp" },
  { nombre: "LinkedIn", img: "/assets/images/logo-008.webp" },
  { nombre: "Instagram", img: "/assets/images/logo-005.webp" },
  { nombre: "TikTok", img: "/assets/images/logo-007.webp" },
  { nombre: "Facebook", img: "/assets/images/logo-006.webp" },
];

/** Estructura del menú. Las rutas replican las del sitio actual. */
export const menu = [
  { texto: "Inicio", url: "/" },
  {
    texto: "Programas",
    url: "/#programas",
    hijos: [
      { texto: "ComunicArte", url: "/comunicarte/" },
      { texto: "Organizaciones del Mañana", url: "/organizaciones-del-manana-podcast/" },
      { texto: "Del Aula a la Cancha", url: "/delaulaalacancha-podcast/" },
      { texto: "Mujer Hoy: Sin Límites", url: "/mujeres-sin-pausa-podcast/" },
      { texto: "CoffeeBreak con Talento", url: "/coffebreak-con-talento/" },
      { texto: "Conocimiento Encapsulado", url: "/capsulas-para-el-exito/" },
      { texto: "Kolumna Laboral", url: "/kolumnalaboral-podcast/" },
      { texto: "CISO's Club", url: "/cisos-club/" },
      { texto: "Finanzas del Futuro", url: "/finanzas-del-futuro/" },
    ],
  },
  {
    texto: "Nosotros",
    url: "/equipo/",
    hijos: [
      { texto: "Equipo", url: "/equipo/" },
      { texto: "Partners", url: "/partners/" },
    ],
  },
  {
    texto: "Servicios",
    url: "/servicios/",
    hijos: [
      { texto: "Tu propio Podcast", url: "/podcast/" },
      { texto: "Producción Audiovisual", url: "/produccion-audiovisual/" },
      { texto: "Cobertura de Eventos y Media Partner", url: "/produccion-audiovisual-media-partner-2/" },
      { texto: "Alianzas Comerciales", url: "/alianzas-comerciales/" },
      { texto: "Auspicios & Patrocinios", url: "/auspicios-y-patrocinio/" },
      { texto: "Canjes & Colaboraciones", url: "/canjes/" },
      { texto: "Estudio de Grabación", url: "/estudio-de-grabacion/" },
      { texto: "Manejo de Redes Sociales", url: "/manejo-de-redes-sociales/" },
    ],
  },
  {
    texto: "Contacto",
    url: "/contacto/",
    hijos: [{ texto: "Redes Sociales", url: "/redes-sociales/" }],
  },
];

/**
 * Métricas de audiencia.
 * Fuente: brochure B2B 2026 (repo Brochure-2026/talentopolis, index.html,
 * que es la versión sincronizada; el PDF del repo está desactualizado).
 */
export const metricas = [
  // Datos en vivo de YouTube Data API (jul. 2026): 7.720 subs · 1.418.892 views
  // · 470 vídeos. Los tres verificados; el resto proviene del brochure 2026.
  { valor: "+7.7K", etiqueta: "Suscriptores" },
  { valor: "+470", etiqueta: "Vídeos publicados" },
  { valor: "+1.4M", etiqueta: "Views" },
  { valor: "+7.8K", etiqueta: "Followers en otras RR.SS." },
  { valor: "+19.7K", etiqueta: "Likes" },
  { valor: "+45.9K", etiqueta: "Horas de visualización" },
];

/**
 * Distribución televisiva. Es el diferenciador que no estaba contado en
 * ninguna parte de la web anterior.
 */
export const television = {
  titular: "+100",
  bajada: "cableoperadores locales e internacionales",
  texto:
    "Nuestros contenidos no solo se producen: se distribuyen estratégicamente " +
    "en canales digitales y televisivos, maximizando visibilidad, alcance y " +
    "reutilización del contenido.",
  principal: { nombre: "Visión Plus TV", img: "/assets/images/tv/visionplus.webp" },
  operadores: [
    { nombre: "América Vivo", img: "/assets/images/tv/americavivo.webp" },
    { nombre: "GTD Telesur", img: "/assets/images/tv/gtdtelesur.webp" },
    { nombre: "Mundo", img: "/assets/images/tv/mundo.webp" },
    { nombre: "TV Cables de Chile", img: "/assets/images/tv/tvcables.webp" },
    { nombre: "Zapping", img: "/assets/images/tv/zapping.webp" },
  ],
};

/** Lo que recibe el cliente en cada proyecto. Fuente: brochure 2026. */
export const entregables = [
  { icono: "video", titulo: "Episodios completos", texto: "En audio y vídeo, listos para publicar." },
  { icono: "mic", titulo: "Cápsulas verticales", texto: "Reels, TikTok y Shorts a partir del episodio." },
  { icono: "swap", titulo: "Pauta editorial y guiones", texto: "La estructura narrativa de cada entrega." },
  { icono: "star", titulo: "Piezas gráficas y miniaturas", texto: "Identidad visual coherente en cada canal." },
  { icono: "studio", titulo: "Grabación y postproducción", texto: "Dirección técnica, periodística y edición profesional." },
  { icono: "event", titulo: "Publicación y distribución", texto: "Lanzamiento en los canales que correspondan." },
];

/**
 * Equipo. Fuente: brochure B2B 2026, que corrige y amplía lo que había en la
 * web anterior (faltaba una persona y dos perfiles de LinkedIn).
 */
export const equipo = [
  {
    nombre: "Andrés Cardemil",
    cargo: "Dirección Ejecutiva y Conducción",
    email: "acardemil@talentopolis.cl",
    foto: "/assets/images/equipo/andres.webp",
    linkedin: "https://www.linkedin.com/in/andres-cardemil-oliva/",
  },
  {
    nombre: "Claudina Villanueva",
    cargo: "Producción Ejecutiva Comercial",
    email: "cvillanueva@talentopolis.cl",
    foto: "/assets/images/equipo/claudina.webp",
    linkedin: "https://www.linkedin.com/in/claudinavillanueva/",
  },
  {
    nombre: "Lucas Núñez",
    cargo: "Gestor de Marketing y Contenidos",
    // Dominio unificado a talentopolis.cl (el usuario escribió "talentopoli.cl",
    // sin la "s"; a confirmar si fuera el dominio corto).
    email: "lnunez@talentopolis.cl",
    foto: "/assets/images/equipo/lucas.webp",
    // Confirmado por Talentópolis (jul. 2026).
    linkedin: "https://www.linkedin.com/in/lucastalentop%C3%B3lis",
  },
  {
    nombre: "Freddy Alexis",
    // El brochure lo nombra "Freddy Alexis"; la web anterior, "Freddy Silva".
    cargo: "Dirección Periodística",
    email: "falexis@talentopolis.cl",
    foto: "/assets/images/equipo/freddy.webp",
    linkedin: "https://www.linkedin.com/in/freddy-alexis-166873118/",
  },
  {
    nombre: "Claudio Oyarzún",
    cargo: "Gerente General",
    // Foto pendiente: Lucas la envía luego -> reemplazar null por la ruta
    // (ej. "/assets/images/equipo/claudio.webp") cuando llegue.
    foto: null,
    linkedin: "https://www.linkedin.com/in/claudiooyarzunfracei/",
  },
  {
    nombre: "Sergio Sayago",
    cargo: "Publicista",
    // Foto pendiente: Lucas la envía luego -> reemplazar null por la ruta
    // (ej. "/assets/images/equipo/sergio.webp") cuando llegue.
    foto: null,
    linkedin: "https://www.linkedin.com/in/sayago/",
  },
];

/**
 * Red de aliados audiovisuales. Fuente: brochure B2B 2026, banner bajo el
 * equipo. Son los logotipos de los programas propios, presentados como la
 * red de producción audiovisual de Talentópolis.
 */
export const aliados = [
  { nombre: "Organizaciones del Mañana", img: "/assets/images/red/odm.webp" },
  { nombre: "Del Aula a la Cancha", img: "/assets/images/red/aula.webp" },
  { nombre: "CoffeeBreak con Talento", img: "/assets/images/red/coffee.webp" },
  { nombre: "Mujer Hoy: Sin Límites", img: "/assets/images/red/mujer.webp" },
  { nombre: "CISO's Club", img: "/assets/images/red/cisos.webp" },
  { nombre: "Finanzas del Futuro", img: "/assets/images/red/finanzas.webp" },
  { nombre: "ComunicArte", img: "/assets/images/red/comunicarte.webp" },
  { nombre: "Conocimiento Encapsulado", img: "/assets/images/red/encapsulado.webp" },
  { nombre: "Kolumna Laboral", img: "/assets/images/red/kolumna.webp" },
];

/** Auspiciadores verificados en las páginas de programa del sitio actual. */
export const partners = [
  // `alto` = altura del logo en px (los compactos/cuadrados necesitan más para
  // igualar el peso visual de los horizontales).
  { nombre: "HumanNet", img: "/assets/images/partners/humannet.webp", alto: 52, url: "https://www.humannet.cl/" },
  { nombre: "Metatalentum", img: "/assets/images/partners/metatalentum.webp", alto: 40, url: "https://www.metatalentum.ai/" },
  { nombre: "CoLaboro Learning", img: "/assets/images/partners/colaboro.webp", alto: 60, url: "https://colaborolearning.com/" },
  { nombre: "Visión Plus", img: "/assets/images/partners/visionplus.webp", alto: 88, url: "https://visionplustv.cl/" },
  { nombre: "ACHS Salud", img: "/assets/images/partners/achs.webp", alto: 60, url: "https://www.achs.cl/" },
];

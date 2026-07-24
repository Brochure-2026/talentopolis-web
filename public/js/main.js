/* ==========================================================================
   TALENTÓPOLIS — interacciones
   Sin dependencias. Idempotente: se re-ejecuta en cada navegación con las
   transiciones de página de Astro (evento astro:page-load), y los listeners
   globales se registran una sola vez.
   ========================================================================== */
(() => {
  "use strict";

  // Guard: si el script se re-ejecuta durante una transición de página, no
  // volvemos a registrar el listener de astro:page-load.
  if (window.__tpBooted) return;
  window.__tpBooted = true;

  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const soporteGSAP = () => window.gsap && window.ScrollTrigger;
  let globalesListos = false;
  let smoothIniciado = false;

  /* ------------------------------------------------------------------------
     Listeners globales (window/document): se registran UNA vez. Consultan el
     DOM en el momento del evento, así siguen funcionando tras cada navegación.
     ---------------------------------------------------------------------- */
  function registrarGlobales() {
    if (globalesListos) return;
    globalesListos = true;

    let ticking = false;
    const alScroll = () => {
      const y = scrollY;
      document.querySelector(".site-header")?.classList.toggle("is-scrolled", y > 24);
      document.querySelector("[data-top]")?.classList.toggle("is-shown", y > 700);
      const bar = document.querySelector("[data-progress]");
      if (bar) {
        const h = document.documentElement.scrollHeight - innerHeight;
        bar.style.transform = "scaleX(" + (h > 0 ? Math.min(y / h, 1) : 0) + ")";
      }
      ticking = false;
    };
    addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(alScroll); }
    }, { passive: true });

    // Anclas de la misma página → scroll suave con Lenis (descontando el header).
    addEventListener("click", (e) => {
      const lenis = window.__lenis;
      if (!lenis) return;
      const a = e.target.closest("a");
      const href = a?.getAttribute("href");
      if (!href || href === "#") return;
      let url;
      try { url = new URL(a.href); } catch { return; }
      if (url.pathname !== location.pathname || !url.hash) return;
      const destino = document.querySelector(url.hash);
      if (!destino) return;
      e.preventDefault();
      const header = document.querySelector(".site-header")?.offsetHeight || 0;
      // data-scroll-nudge: px extra hacia abajo, para enmarcar el contenido de
      // la sección (p. ej. "Ver programas" baja hasta ver los cards completos).
      const nudge = Number(a.dataset.scrollNudge) || 0;
      lenis.scrollTo(destino, { offset: -(header + 8) + nudge });
      history.pushState(null, "", url.hash);
    });

    addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      const lista = document.querySelector(".nav__list.is-open");
      if (!lista) return;
      lista.classList.remove("is-open");
      const toggle = document.querySelector(".nav__toggle");
      toggle?.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      toggle?.focus();
    });
  }

  /* ------------------------------------------------------------------------
     Navegación móvil
     ---------------------------------------------------------------------- */
  function navMovil() {
    const toggle = document.querySelector(".nav__toggle");
    const navList = document.querySelector(".nav__list");
    if (!toggle || !navList) return;

    toggle.addEventListener("click", () => {
      const open = navList.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });

    const cerrar = () => {
      navList.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    navList.querySelectorAll("a").forEach((a) => a.addEventListener("click", cerrar));

    // En móvil, el primer toque en un ítem con submenú lo despliega; el 2.º navega.
    navList.querySelectorAll(".nav__item--has-sub > a").forEach((link) => {
      link.addEventListener("click", (e) => {
        if (!matchMedia("(max-width: 860px)").matches) return;
        const item = link.parentElement;
        if (!item.classList.contains("is-open")) {
          e.preventDefault();
          e.stopPropagation();
          item.classList.add("is-open");
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     Revelado al scroll (.reveal y grillas .stagger)
     ---------------------------------------------------------------------- */
  function reveals() {
    const els = document.querySelectorAll(".reveal, .stagger");
    if (!els.length) return;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------------
     Contadores animados de 0 al valor final ("+7.7K", "+1.6M", "+11")
     ---------------------------------------------------------------------- */
  function contadores() {
    const els = document.querySelectorAll("[data-count]");
    if (!els.length) return;

    const pinta = (n, dec, pre, suf) =>
      pre + (dec > 0 ? n.toFixed(dec) : Math.round(n).toString()) + suf;

    const animar = (el) => {
      const bruto = el.dataset.count.trim();
      const m = bruto.match(/^(\D*)([\d.]+)(\D*)$/);
      if (!m || reducedMotion) { el.textContent = bruto; return; }
      const pre = m[1], objetivo = parseFloat(m[2]), suf = m[3];
      const dec = (m[2].split(".")[1] || "").length;
      const t0 = performance.now(), dur = 1400;
      const paso = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3); // easeOutCubic
        el.textContent = pinta(objetivo * e, dec, pre, suf);
        if (p < 1) requestAnimationFrame(paso);
      };
      requestAnimationFrame(paso);
    };

    if (reducedMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => (el.textContent = el.dataset.count));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animar(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    els.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------------------
     Fachada de vídeo: YouTube solo se carga al pulsar play.
     ---------------------------------------------------------------------- */
  function videos() {
    document.querySelectorAll("[data-video]").forEach((box) => {
      box.addEventListener("click", () => {
        const frame = document.createElement("iframe");
        frame.src = `https://www.youtube-nocookie.com/embed/${box.dataset.video}?autoplay=1&rel=0`;
        frame.title = box.dataset.videoTitle || "Vídeo de Talentópolis";
        frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture";
        frame.allowFullscreen = true;
        frame.referrerPolicy = "strict-origin-when-cross-origin";
        box.replaceChildren(frame);
      }, { once: true });
    });
  }

  /* ------------------------------------------------------------------------
     Episodios: pestañas de temporada + "ver más".
     ---------------------------------------------------------------------- */
  function episodiosUI() {
    document.querySelectorAll("[data-temporadas]").forEach((bloque) => {
      const tabs = [...bloque.querySelectorAll("[data-tab]")];
      const panels = [...bloque.querySelectorAll("[data-panel]")];

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const i = tab.dataset.tab;
          tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
          panels.forEach((p) => { p.hidden = p.dataset.panel !== i; });
        });
      });

      bloque.querySelectorAll("[data-vermas]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const panel = btn.closest("[data-panel]");
          panel.querySelectorAll(".episodio[hidden]").forEach((ep) => (ep.hidden = false));
          btn.closest(".episodios__mas").hidden = true;
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     Formulario de contacto. Sitio estático: compone el mensaje y lo abre en
     WhatsApp o en el correo del propio usuario. No almacena nada.
     ---------------------------------------------------------------------- */
  function formulario() {
    const form = document.getElementById("form-contacto");
    if (!form) return;
    const error = document.getElementById("form-error");
    const ok = document.getElementById("form-ok");
    const boton = form.querySelector('button[type="submit"]');
    const label = boton?.querySelector("[data-label]");

    const marcar = (campo, malo) =>
      malo ? campo.setAttribute("aria-invalid", "true") : campo.removeAttribute("aria-invalid");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Validación de los campos obligatorios.
      let primerFallo = null;
      ["nombre", "email", "interes", "mensaje"].forEach((n) => {
        const campo = form.elements[n];
        if (!campo) return;
        const vacio = !String(campo.value || "").trim();
        const emailMalo = n === "email" && !campo.checkValidity();
        marcar(campo, vacio || emailMalo);
        if ((vacio || emailMalo) && !primerFallo) primerFallo = campo;
      });
      if (primerFallo) {
        error.textContent = "Revisa los campos marcados: faltan datos obligatorios o el correo no es válido.";
        error.hidden = false;
        if (ok) ok.hidden = true;
        primerFallo.focus();
        return;
      }
      error.hidden = true;

      // Envío a Web3Forms (llega al correo de Talentópolis). Sin recargar.
      const texto = label ? label.textContent : null;
      if (boton) boton.disabled = true;
      if (label) label.textContent = "Enviando…";

      try {
        const r = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        });
        const res = await r.json();
        if (res.success) {
          form.reset();
          if (ok) { ok.hidden = false; ok.scrollIntoView({ block: "nearest", behavior: reducedMotion ? "auto" : "smooth" }); }
        } else {
          error.textContent = "No se pudo enviar. Inténtalo de nuevo o escríbenos por WhatsApp.";
          error.hidden = false;
        }
      } catch {
        error.textContent = "Sin conexión. Inténtalo de nuevo o escríbenos por WhatsApp.";
        error.hidden = false;
      } finally {
        if (boton) boton.disabled = false;
        if (label && texto) label.textContent = texto;
      }
    });
  }

  /* ------------------------------------------------------------------------
     Smooth-scroll premium (Lenis) + sincronía con GSAP. Se monta UNA vez:
     Lenis envuelve el scroll de la ventana, que persiste entre navegaciones.
     ---------------------------------------------------------------------- */
  function iniciarSmooth() {
    if (smoothIniciado) return;
    smoothIniciado = true;

    if (soporteGSAP()) gsap.registerPlugin(ScrollTrigger);

    // Respeta reduce-motion: sin smooth-scroll (scroll nativo instantáneo).
    if (reducedMotion || !window.Lenis) return;

    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    window.__lenis = lenis;

    if (soporteGSAP()) {
      // Un solo bucle: GSAP mueve el reloj de Lenis y ScrollTrigger se sincroniza.
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }

  /* ------------------------------------------------------------------------
     Parallax cinematográfico del hero (GSAP + ScrollTrigger). Se reconstruye
     en cada página: primero mata los triggers de la anterior (evita fugas con
     las transiciones de Astro), luego crea los de la página actual.
     ---------------------------------------------------------------------- */
  function parallaxHero() {
    if (!soporteGSAP()) return;
    ScrollTrigger.getAll().forEach((t) => t.kill());
    if (reducedMotion) { ScrollTrigger.refresh(); return; }

    const hero = document.querySelector(".hero");
    if (!hero) { ScrollTrigger.refresh(); return; }

    const st = { trigger: hero, start: "top top", end: "bottom top", scrub: true };
    const mover = (sel, y) => {
      const el = hero.querySelector(sel);
      if (el) gsap.to(el, { yPercent: y, ease: "none", scrollTrigger: st });
    };
    mover("[data-parallax]", 12); // portadas apiladas
    mover(".hero__halo--o", 22);  // halo naranjo (profundidad)
    mover(".hero__halo--t", -16); // halo teal (contrasentido)

    ScrollTrigger.refresh();
  }

  /* ------------------------------------------------------------------------
     Botón "volver arriba"
     ---------------------------------------------------------------------- */
  function volverArriba() {
    const btn = document.querySelector("[data-top]");
    btn?.addEventListener("click", () => {
      if (window.__lenis) window.__lenis.scrollTo(0);
      else scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    });
  }

  /* ------------------------------------------------------------------------
     Arranque: se ejecuta en la carga inicial y tras cada transición de página.
     ---------------------------------------------------------------------- */
  function init() {
    registrarGlobales();
    iniciarSmooth();
    document.querySelector(".site-header")?.classList.toggle("is-scrolled", scrollY > 24);
    navMovil();
    reveals();
    contadores();
    videos();
    episodiosUI();
    formulario();
    volverArriba();
    parallaxHero();
    const year = document.querySelector("[data-year]");
    if (year) year.textContent = new Date().getFullYear();
  }

  // astro:page-load dispara en la carga inicial y en cada navegación con el
  // ClientRouter activo (presente en todas las páginas vía Base.astro).
  document.addEventListener("astro:page-load", init);
})();

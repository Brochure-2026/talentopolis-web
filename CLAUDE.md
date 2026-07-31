# CLAUDE.md — Contexto del Proyecto y Registro de Cambios (Antigravity AI)

**Última actualización:** 31 de Julio de 2026  
**Proyecto:** Web Talentópolis 2.0 (Astro)  

---

## 📌 Resumen de Estado y Auditoría del Proyecto

### 🟢 Web Talentópolis 2.0 (Astro)
- **Compilación**: Se ejecutó `npm run build` y el proyecto Astro (v7 + Vite) compila **100% limpio**, generando 24 páginas estáticas en 4.28 segundos.
- **Seguridad**: Encabezados de seguridad (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) configurados en `vercel.json`.
- **SEO & Accesibilidad**: JSON-LD `Organization` y `WebSite` con `@id` unificados en `Base.astro`, sitemap XML automático, scripts vendor GSAP/Lenis autohospedados.
- **Formulario**: Formulario de contacto en `contacto.astro` utilizando Web3Forms con campo honeypot.

### 🚨 Alerta del Repositorio Raíz (`New Talentópolis`)
- El directorio raíz contiene un WordPress heredado con volcados `.sql` masivos (`talentop_tale25.sql` y `talentop_wp_xnuj1.sql`) y `wp-config-backup.php` que deben excluirse o borrarse antes de cualquier despliegue.

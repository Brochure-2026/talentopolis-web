# Seguridad — Talentópolis

Registro de medidas tomadas y reglas de trabajo seguro para este proyecto.
Vive en el repo (no contiene credenciales) para que quede como referencia
permanente, a diferencia del `.htaccess` de producción, que solo existe en
el servidor.

---

## 1. Medidas tomadas

### 2026-08-18 — Auditoría inicial y cierre de vulnerabilidades

**Hallazgo crítico — login de WordPress expuesto en producción**
La carpeta `_wordpress_backup_20260731/` (respaldo del WordPress heredado,
movido ahí durante la migración a Astro) seguía siendo accesible por web.
`wp-login.php` y `wp-admin/` respondían HTTP 200 — cualquiera podía intentar
loguearse o hacer fuerza bruta contra ese panel, aunque la base de datos ya
no está conectada.

- **Verificado que NO había fuga de datos**: `wp-config.php` se ejecuta como
  PHP (no expone su código fuente ni credenciales en texto plano); los
  volcados `.sql` con la base de datos nunca estuvieron en esa carpeta del
  servidor en vivo (solo existen localmente en el equipo de trabajo, fuera
  del directorio público).
- **Fix**: se subió un `.htaccess` dentro de esa carpeta con
  `Require all denied` (bloquea el 100% del contenido por web). Verificado:
  `wp-login.php`, `wp-admin/` y `wp-config.php` ahora responden 403.
- Los archivos se conservan en el servidor (por si hace falta consultar algo
  de la migración), simplemente ya no son accesibles desde internet.

**HTTPS no forzado**
`http://talentopolis.cl` respondía 200 directo en vez de redirigir a HTTPS.
- **Fix**: regla de `mod_rewrite` en el `.htaccess` raíz que redirige (301)
  todo tráfico HTTP a HTTPS.

**Falta de HSTS**
No había header `Strict-Transport-Security`, así que un usuario que entrara
por HTTP quedaba expuesto a un intento de downgrade/interceptación antes del
redirect.
- **Fix**: `Strict-Transport-Security: max-age=31536000; includeSubDomains`
  agregado al `.htaccess` raíz.

**Pendientes de esta misma auditoría** (no resueltos todavía):
- Página de Política de Privacidad (hay GA4 activo recolectando datos y no
  hay dónde explicarlo).
- Content-Security-Policy (CSP).
- Verificación de Google Search Console.
- `llms.txt` e IndexNow (mejoras de indexación, no vulnerabilidades).

---

## 2. Estándares de trabajo seguro

Reglas para cualquiera (persona o IA) que toque este proyecto de ahora en
más.

### Credenciales y secretos
1. **Nunca** committear credenciales, tokens o contraseñas al repo — ni
   siquiera temporalmente. Usar GitHub Secrets (`gh secret set`) para todo
   lo que necesite un workflow de CI/CD.
2. Si una credencial se pega en el chat/consola por error, se considera
   comprometida: rotarla, no solo "tener cuidado" con ella.
3. El repo es **público** (`Brochure-2026/talentopolis-web`): antes de
   subir cualquier archivo, confirmar que no tiene datos sensibles. Ya se
   auditó el historial completo una vez (60 commits, sin secretos) — repetir
   ese chequeo si alguna vez se sospecha de una fuga.
4. Preferir cuentas de acceso **con alcance acotado** (ej. la cuenta FTP
   `claude@talentopolis.cl`, separada de la cuenta personal) en vez de
   compartir credenciales de administrador completas.

### Servidor de producción (cPanel / hosting compartido)
5. Cualquier carpeta que quede en `public_html` por razones de respaldo o
   migración **debe bloquearse explícitamente** con un `.htaccess`
   (`Require all denied`) antes de dar la migración por terminada — no
   alcanza con "moverla a otro nombre".
6. Nunca dejar volcados de base de datos (`.sql`), backups de configuración
   (`wp-config*.php`) o archivos `.env` dentro del directorio público del
   servidor, ni siquiera temporalmente.
7. El `.htaccess` de producción no vive en git (es específico del servidor).
   Cualquier cambio ahí debe reflejarse en este documento para que quede
   registro de qué reglas de seguridad están activas y por qué.

### Deploy y CI/CD
8. El pipeline de GitHub Actions sube **todo** el sitio en cada deploy, no
   solo los archivos que cambiaron — evita que queden páginas viejas
   referenciando assets con hash que ya no existen.
9. Antes de un deploy grande, correr el build local (`npm run build`) y
   revisar consola/imágenes rotas en las páginas nuevas o modificadas.
10. Un solo archivo fallido en el deploy (ej. timeout de FTP) no significa
    que el sitio esté roto — verificar contra el sitio en vivo antes de
    asumir que hay que re-desplegar.

### Auditorías
11. Repetir esta auditoría (seguridad + tracking + SEO/AEO/GEO) después de
    cualquier cambio estructural grande (nueva sección, nuevo formulario,
    cambio de hosting) y como mínimo cada pocos meses.
12. Cualquier hallazgo crítico (credenciales expuestas, paneles de admin
    accesibles, datos personales sin protección) se soluciona primero,
    antes de seguir con features nuevas.

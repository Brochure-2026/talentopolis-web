/**
 * Trunca un texto para meta description: corta en el límite de palabra (no a
 * media palabra) y agrega "…" solo si de verdad se truncó. Por defecto 155
 * caracteres — el límite práctico antes de que Google recorte el snippet en
 * los resultados de búsqueda (~155-160).
 */
export function truncarMeta(texto, max = 155) {
  const limpio = texto.trim();
  if (limpio.length <= max) return limpio;
  const corte = limpio.slice(0, max - 1);
  const ultimoEspacio = corte.lastIndexOf(" ");
  return corte.slice(0, ultimoEspacio > 0 ? ultimoEspacio : max - 1).trim() + "…";
}

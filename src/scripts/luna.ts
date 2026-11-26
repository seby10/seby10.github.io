// Fase lunar aproximada (error de horas, suficiente para dibujarla).
const SINODICO = 29.530588853;
const LUNA_NUEVA = Date.UTC(2000, 0, 6, 18, 14);

/** 0 = luna nueva, 0.5 = llena, de vuelta a 1. */
export function fase(fecha: Date): number {
  const dias = (fecha.getTime() - LUNA_NUEVA) / 864e5;
  return (((dias % SINODICO) + SINODICO) % SINODICO) / SINODICO;
}

/** Trazado SVG de la parte iluminada, en un círculo de radio r centrado en (c, c). */
export function caminoLuna(p: number, r = 20, c = 24): string {
  const k = Math.cos(2 * Math.PI * p); // 1 nueva, -1 llena
  const rx = Math.abs(k) * r;
  const derecha = p < 0.5; // creciente: luz a la derecha
  const exterior = derecha ? 1 : 0;
  const terminador = derecha ? (k > 0 ? 0 : 1) : k > 0 ? 1 : 0;
  return `M${c} ${c - r}A${r} ${r} 0 0 ${exterior} ${c} ${c + r}A${rx.toFixed(2)} ${r} 0 0 ${terminador} ${c} ${c - r}Z`;
}

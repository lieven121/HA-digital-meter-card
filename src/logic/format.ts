/** Locale-formatted number with fixed decimals; "—" for missing values. */
export function formatNumber(v: number | null | undefined, decimals: number, locale: string): string {
  if (v == null || isNaN(v)) return "—";
  return v.toLocaleString(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

export const clamp = (v: number, min: number, max: number): number => Math.min(max, Math.max(min, v));

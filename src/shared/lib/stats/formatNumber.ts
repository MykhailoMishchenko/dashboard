export function formatNumber(value: number | null, digits = 0) {
  if (value === null) return "-";
  return digits === 0 ? String(Math.round(value)) : value.toFixed(digits);
}

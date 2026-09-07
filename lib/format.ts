export function formatCents(totalCents: number): string {
  return `$${(totalCents / 100).toFixed(2)}`;
}

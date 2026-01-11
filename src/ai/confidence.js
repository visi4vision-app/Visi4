export function confidenceScore({ webUsed, cached, uncertainty }) {
  let score = 90;
  if (webUsed) score += 5;
  if (cached) score += 3;
  if (uncertainty) score -= 15;
  return Math.max(50, Math.min(score, 99));
}

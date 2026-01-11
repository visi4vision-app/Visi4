export function rankVideo({ vision, audio, behavior }) {
  let score = 100;
  if (vision === "HIGH") score -= 40;
  if (audio === "HIGH") score -= 30;
  if (behavior < 50) score -= 20;

  if (score >= 80) return "TRENDING";
  if (score >= 50) return "NORMAL";
  return "LIMITED";
}

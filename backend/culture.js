export function cultureRules(country) {
  if (country === "FR") return "strict";
  if (country === "SA") return "very_strict";
  if (country === "US") return "moderate";
  return "global";
}

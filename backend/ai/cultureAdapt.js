export function adaptByCulture(text, country) {
  if (country === "FR") return text.replace(/insulte/gi, "***");
  if (country === "US") return text;
  if (country === "AR") return text.replace(/politique/gi, "");
  return text;
}

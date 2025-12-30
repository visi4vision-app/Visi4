export function cultureRules(country) {
  switch (country) {
    case "FR":
      return "nudité strictement interdite, haine interdite";
    case "US":
      return "nudité modérée, liberté d’expression";
    case "SA":
      return "aucune nudité, règles religieuses strictes";
    case "JP":
      return "anime toléré, réel interdit";
    default:
      return "règles internationales";
  }
}

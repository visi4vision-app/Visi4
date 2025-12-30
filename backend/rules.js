export function countryRules(country) {
  switch (country) {
    case "SA":
      return "nudité = BLOCK immédiat";
    case "FR":
      return "nudité stricte, haine interdite";
    case "US":
      return "nudité modérée, pas haine";
    case "JP":
      return "anime toléré, réel interdit";
    default:
      return "règles internationales";
  }
}

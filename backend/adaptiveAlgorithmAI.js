export function adaptFeed({ country, religion, age }) {
  if (religion === "islam" && age < 18)
    return "ULTRA_SAFE_FEED";

  if (country === "FR" && age > 18)
    return "FREE_EXPRESSION";

  if (country === "US")
    return "MODERATE_SAFE";

  return "GLOBAL_STANDARD";
}

import fetch from "node-fetch";

export async function webSearch(query) {
  try {
    const res = await fetch(
      `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1`
    );

    const data = await res.json();

    return `
Résumé web:
- Sujet: ${data.Heading || "N/A"}
- Description: ${data.Abstract || "Aucune description disponible"}
- Source: DuckDuckGo
    `;
  } catch (e) {
    return "Recherche web indisponible.";
  }
}

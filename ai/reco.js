import { brain } from "./brain.js";

export async function recommend(userData) {
  return await brain(
    "Décide du meilleur contenu à afficher pour cet utilisateur",
    JSON.stringify(userData)
  );
}

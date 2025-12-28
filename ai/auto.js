import { brain } from "./brain.js";

export async function automate(event) {
  return await brain(
    "Décide automatiquement quelle action lancer",
    JSON.stringify(event)
  );
}

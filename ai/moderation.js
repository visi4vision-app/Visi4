import { brain } from "./brain.js";

export async function moderate(content) {
  return await brain(
    "Analyse ce contenu et indique s'il est dangereux ou interdit",
    content
  );
}

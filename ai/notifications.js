import { brain } from "./brain.js";

export async function smartNotify(user, event) {
  return brain(
    "Décide si une notification doit être envoyée et écris le message",
    JSON.stringify({ user, event })
  );
}

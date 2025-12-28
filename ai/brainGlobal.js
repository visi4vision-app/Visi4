import { brain } from "./brain.js";

export async function brainGlobal(user, prompt) {
  const context =
    "Pays: " + user.country + "\n" +
    "Langue: " + user.lang + "\n" +
    "Fuseau: " + user.timezone + "\n" +
    "Application internationale";

  return brain(prompt, context);
}

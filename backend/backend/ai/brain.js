import dotenv from "dotenv";
dotenv.config();

/**
 * Cerveau IA principal
 * @param {string} prompt
 */
export default async function brain(prompt) {
  return {
    answer: "Je suis le cerveau central de Visi4. Je suis ton assistant personnel."
  };
}

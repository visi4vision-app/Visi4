import { brain } from '../brain.js';

export default async function aiRank(user, posts) {
  const prompt = `
Classe ces contenus pour l'utilisateur.
Utilisateur: ${JSON.stringify(user)}
Contenus: ${JSON.stringify(posts)}
Retourne les IDs du meilleur au pire.
`;
  const result = await brain(prompt);
  return result;
}

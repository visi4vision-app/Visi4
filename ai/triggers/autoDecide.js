import { brainWithMemory } from '../memory/brainWithMemory.js';

export async function autoDecide(userId) {
  return brainWithMemory(
    userId,
    "Décide du prochain contenu à afficher immédiatement."
  );
}

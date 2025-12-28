import { recall } from './userMemory.js';
import { brain } from '../brain.js';

export async function brainWithMemory(userId, prompt) {
  const memory = recall(userId);
  return brain(prompt, JSON.stringify(memory));
}

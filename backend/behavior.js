import { getMemory, saveMemory } from "./memory.js";

export function trackUser(uid, action) {
  const mem = getMemory(uid);
  const history = mem.history || [];
  history.push({ action, date: new Date() });
  saveMemory(uid, { history });
}

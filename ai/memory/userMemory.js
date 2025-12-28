import { loadDB, saveDB } from './db.js';

export function remember(userId, event) {
  const db = loadDB();
  if (!db.users[userId]) {
    db.users[userId] = { history: [] };
  }
  db.users[userId].history.push({
    ...event,
    ts: Date.now()
  });
  saveDB(db);
}

export function recall(userId) {
  const db = loadDB();
  return db.users[userId]?.history || [];
}

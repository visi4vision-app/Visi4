import { doc, updateDoc } from './firebase.js';
import { db } from './firebase.js';

export async function syncUserSignals(userId, signals) {
  const ref = doc(db, 'users', userId);
  await updateDoc(ref, { signals });
}

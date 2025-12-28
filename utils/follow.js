import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase.js';

export async function follow(userId, targetId) {
  await setDoc(
    doc(db, 'follows', `${userId}_${targetId}`),
    {
      userId,
      targetId,
      at: Date.now()
    }
  );
}

import { doc, setDoc, increment } from './firebase.js';
import { db } from '../firebase/config.js';

export async function signalUser(userId, videoId, value = 1) {
  const ref = doc(db, 'signals', userId);
  await setDoc(
    ref,
    { [videoId]: increment(value) },
    { merge: true }
  );
}

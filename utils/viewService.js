import { doc, updateDoc, increment } from './firebase.js';
import { db } from '../firebase/config.js';

export async function addView(videoId) {
  const ref = doc(db, 'videos', videoId);
  await updateDoc(ref, { views: increment(1) });
}

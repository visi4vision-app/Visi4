import { doc, updateDoc, increment } from './firebase.js';
import { db } from '../firebase/config.js';

export async function likeVideo(videoId) {
  const ref = doc(db, 'videos', videoId);
  await updateDoc(ref, { likes: increment(1) });
}

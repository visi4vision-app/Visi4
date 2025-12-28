import { collection, addDoc } from './firebase.js';
import { db } from './firebase.js';

export async function addComment(videoId, text, user) {
  await addDoc(collection(db, 'videos', videoId, 'comments'), {
    text,
    user,
    createdAt: Date.now()
  });
}

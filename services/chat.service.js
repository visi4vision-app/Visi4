import { collection, addDoc, onSnapshot, query } from "firebase/firestore";
import { db } from "./firebase.service";

export function listenMessages(roomId, callback) {
  const q = query(collection(db, "rooms", roomId, "messages"));
  return onSnapshot(q, (snap) => {
    const msgs = snap.docs.map(d => d.data());
    callback(msgs);
  });
}

export async function sendMessage(roomId, text, uid) {
  await addDoc(collection(db, "rooms", roomId, "messages"), {
    text,
    uid,
    createdAt: Date.now(),
  });
}

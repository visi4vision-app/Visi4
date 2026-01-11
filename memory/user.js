import { db } from "../firebase/admin.js";

export async function getUser(uid) {
  const d = await db.collection("users").doc(uid).get();
  return d.exists ? d.data() : { score: 0, tension: 0, visicoin: 0, history: [] };
}

export async function saveUser(uid, data) {
  await db.collection("users").doc(uid).set(data, { merge: true });
}

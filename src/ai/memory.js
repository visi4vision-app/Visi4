import admin from "../firebase.js";

export async function saveMemory(uid, data) {
  await admin.firestore()
    .collection("visi4_memory")
    .doc(uid)
    .collection("items")
    .add({
      data,
      createdAt: Date.now()
    });
}

export async function getMemory(uid) {
  const snap = await admin.firestore()
    .collection("visi4_memory")
    .doc(uid)
    .collection("items")
    .orderBy("createdAt", "desc")
    .limit(5)
    .get();

  return snap.docs.map(d => d.data().data).join("\n");
}

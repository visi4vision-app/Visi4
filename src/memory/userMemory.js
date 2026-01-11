import admin from "firebase-admin";
import fs from "fs";
import path from "path";

const keyPath = path.resolve("src/config/firebaseKey.json");

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(fs.readFileSync(keyPath, "utf8"));

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

export async function saveMemory(userId, question, answer) {
  if (!userId) return;

  await db
    .collection("users")
    .doc(userId)
    .collection("memory")
    .add({
      question,
      answer,
      createdAt: new Date(),
    });
}

export async function getMemory(userId, limit = 5) {
  if (!userId) return [];

  const snapshot = await db
    .collection("users")
    .doc(userId)
    .collection("memory")
    .orderBy("createdAt", "desc")
    .limit(limit)
    .get();

  return snapshot.docs.map(doc => doc.data());
}

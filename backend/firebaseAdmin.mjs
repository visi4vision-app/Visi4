import admin from "firebase-admin";
import fs from "fs";

const keyPath = "./backend/secrets/serviceAccountKey.json";

if (!fs.existsSync(keyPath)) {
  throw new Error("❌ Clé Firebase introuvable : " + keyPath);
}

const serviceAccount = JSON.parse(fs.readFileSync(keyPath, "utf8"));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();
console.log("✅ Firebase Admin connecté");

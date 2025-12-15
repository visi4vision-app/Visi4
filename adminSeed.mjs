import admin from "firebase-admin";
import fs from "fs";

const serviceAccount = JSON.parse(
  fs.readFileSync("./serviceAccountKey.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function seedGifts() {
  const gifts = [
    { name: "🇫🇷 France", price: 100 },
    { name: "🇧🇫 Burkina Faso", price: 100 },
    { name: "🇺🇸 USA", price: 100 },
    { name: "🔥 Feu", price: 50 },
    { name: "💎 Diamant", price: 500 },
    { name: "👑 Couronne", price: 1000 },
  ];

  for (const gift of gifts) {
    await db.collection("gifts").add({
      ...gift,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log("Ajout :", gift.name);
  }

  console.log("✅ Cadeaux ajoutés avec succès");
}

seedGifts();

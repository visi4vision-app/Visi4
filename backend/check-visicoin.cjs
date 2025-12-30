const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(
    require("./secrets/firebase-service-account.json")
  )
});

const db = admin.firestore();

const uid = process.argv[2];
if (!uid) {
  console.log("❌ Usage: node check-visicoin.cjs <uid>");
  process.exit(1);
}

(async () => {
  const doc = await db.collection("users").doc(uid).get();
  if (!doc.exists) {
    console.log("❌ Utilisateur introuvable");
    return;
  }
  console.log("💰 VisiCoin =", doc.data().visicoin ?? 0);
})();

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.api = functions.https.onRequest((req, res) => {
  res.json({ status: "API LIVE 🚀" });
});

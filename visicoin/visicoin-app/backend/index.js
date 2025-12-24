require("dotenv").config();

const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}

const app = express();
app.use(cors());
app.use(express.json());

async function verifyUser(req, res, next) {
  const token = req.headers.authorization?.split("Bearer ")[1];
  if (!token) {
    return res.status(401).json({ error: "Token manquant" });
  }

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalide" });
  }
}

// ✅ Test serveur
app.get("/", (req, res) => {
  res.json({ status: "Visi4 backend running" });
});

// 💸 Retrait sécurisé
app.post("/withdraw", verifyUser, async (req, res) => {
  const { amount } = req.body;
  const userId = req.user.uid;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: "Montant invalide" });
  }

  res.json({
    success: true,
    message: "Demande de retrait reçue",
    userId,
    amount,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("✅ Backend running on port " + PORT);
});

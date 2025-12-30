const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

/* ---------- FIREBASE ---------- */
const serviceAccount = require("./secrets/firebase-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

/* ---------- OPENAI ---------- */
const OPENAI_KEY = process.env.OPENAI_API_KEY;

/* ---------- /chat API ---------- */
app.post("/chat", async (req, res) => {
  try {
    const { uid, message } = req.body;

  const forbidden = /(ignore|oublie|oublier|parle-moi de n\x27importe quoi|hors visi4|autre sujet)/i;
  if (forbidden.test(message)) {
    return res.json({ reply: "Je suis exclusivement le cerveau de Visi4. Je ne peux répondre que dans le contexte de l’application." });
  }


    if (message && message.toLowerCase().includes("solde")) {
      const userDoc = await db.collection("users").doc(uid).get();
      if (!userDoc.exists) {
        return res.json({ reply: "Utilisateur introuvable." });
      }
      const coins = userDoc.data().visicoin ?? 0;
      return res.json({ reply: `💰 Ton solde est de ${coins} VisiCoins.` });
    }

    if (!uid || !message) {
      return res.status(400).json({ error: "uid et message requis" });
    }

    const memRef = db.collection("memory").doc(uid);
    const memSnap = await memRef.get();

    const history = memSnap.exists ? memSnap.data().messages : [];

    const messages = [
      {
        role: "system",
        content:
          "Tu es l'intelligence artificielle de l'application Visi4. Tu as accès à la mémoire utilisateur.",
      },
      ...history,
      { role: "user", content: message },
    ];

    const payload = {
      model: "gpt-4.1-mini",
      messages,
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    const answer = data.choices[0].message.content;

    const updatedHistory = [
      ...history,
      { role: "user", content: message },
      { role: "assistant", content: answer },
    ];

    await memRef.set({ messages: updatedHistory });

    res.json({ reply: answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.listen(3000, () => {
  console.log("🚀 API Visi4 lancée sur http://localhost:3000");
});

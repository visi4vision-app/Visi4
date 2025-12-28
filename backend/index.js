import express from 'express';
import admin from 'firebase-admin';
import fs from 'fs';
import cors from 'cors';

admin.initializeApp({
  credential: admin.credential.cert(
    JSON.parse(fs.readFileSync('./serviceAccountKey.json','utf8'))
  )
});

const app = express();
app.use(cors());
app.use(express.json());

const db = admin.firestore();

app.get('/health', async (_, res) => {
  await db.collection('health').doc('check').set({
    status: 'ok',
    time: new Date().toISOString()
  });
  res.json({ ok: true });
});

app.post('/user', async (req, res) => {
  const { uid, email } = req.body;
  await db.collection('users').doc(uid).set({ email });
  res.json({ created: true });
});

app.listen(3000, () => console.log('🚀 API READY'));

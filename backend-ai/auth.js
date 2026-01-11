import admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

export async function verifyToken(req) {
  const h = req.headers.authorization || "";
  const token = h.replace("Bearer ", "");
  if (!token) throw new Error("NO_TOKEN");
  return await admin.auth().verifyIdToken(token);
}

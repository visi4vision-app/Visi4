import { db } from "../firebase/admin.js";

export async function moderateVideo(videoId, score) {
  const status = score > 5 ? "restricted" : "ok";
  await db.collection("videos").doc(videoId).set({
    moderation: status,
    updated: Date.now()
  }, { merge: true });
}

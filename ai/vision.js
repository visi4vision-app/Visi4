import { v2 as cloudinary } from "cloudinary";
import { db } from "../firebase/admin.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

export async function analyzeImage(url, videoId) {
  await db.collection("videos").doc(videoId).set({
    analyzed: true,
    moderation: "clean"
  }, { merge: true });
}

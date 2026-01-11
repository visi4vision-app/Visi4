import express from "express";
import fs from "fs";
import OpenAI from "openai";
import { detectConflict } from "../ai/conflictDetector.js";
import { speak } from "../ai/voiceTTS.js";
import { publishLiveEvent } from "../realtime/publish.js";

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/audio", async (req, res) => {
  const file = `./tmp/audio_${Date.now()}.wav`;
  fs.writeFileSync(file, req.body);

  const tr = await openai.audio.transcriptions.create({
    file: fs.createReadStream(file),
    model: "gpt-4o-transcribe"
  });

  const text = tr.text || "";
  const conflict = await detectConflict(text);

  if (conflict.level === "HIGH") {
if (conflict.level === "MEDIUM") mediateConflict({ liveId: conflict.liveId, text, lang: conflict.lang });
    publishLiveEvent(conflict.liveId, {
      type: "TEXT_WARNING",
      message: "⚠️ Merci de rester respectueux sur ce live."
    });

    if (["fr","en","ar"].includes(conflict.lang)) {
      const audio = await speak("Merci de rester respectueux sur ce live.", conflict.lang);
      publishLiveEvent(conflict.liveId, { type:"VOICE_WARNING", audio });
    }
  }

  res.json({ ok:true });
});

export default router;

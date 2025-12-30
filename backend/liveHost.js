import { liveSpeak } from "./liveSpeaker.js";

export async function hostLive(lang) {
  return await liveSpeak({
    lang,
    topic: "Bienvenue dans ce live, respectez les règles et amusez-vous"
  });
}

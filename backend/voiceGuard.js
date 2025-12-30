import { liveSpeak } from "./liveSpeaker.js";

export async function speakIfNeeded(lang, decision) {
  if (decision !== "BLOCK") return;

  const messages = {
    fr: "Attention. Ce live est interrompu pour non-respect des règles.",
    en: "Warning. This live has been stopped due to rule violations.",
    ar: "تحذير. تم إيقاف البث بسبب مخالفة القواعد."
  };

  await liveSpeak({
    lang,
    topic: messages[lang] || messages.en
  });
}

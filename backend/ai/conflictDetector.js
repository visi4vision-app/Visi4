import { updateVisiCoin } from "./visicoin.js";

export function detectConflict({ uid, text }) {
  if (!text) return { level: "LOW" };

  const insult =
    /insulte|idiot|stupide|sale|fuck|merde/i.test(text);

  if (insult) {
    if (uid) updateVisiCoin(uid, -5);
    return { level: "HIGH" };
  }

  return { level: "LOW" };
}

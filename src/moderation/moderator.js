export function moderateQuestion(question) {
  const forbidden = [
    /violence/i,
    /haine/i,
    /harc[eè]lement/i,
    /pornographie/i,
    /terrorisme/i,
    /drogue/i,
    /arme/i,
    /fraude/i,
    /escroquerie/i,
    /piratage/i
  ];

  for (const rule of forbidden) {
    if (rule.test(question)) {
      logBlockedContent({ question }); return { allowed: false, reason: "CONTENU_INTERDIT" };
    }
  }

  logBlockedContent({ question }); return { allowed: true };
}
import { logBlockedContent } from "../logs/moderationLog.js";

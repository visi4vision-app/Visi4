export function detectResponseMode(question) {
  const shortPatterns = [
    /^oui/i,
    /^non/i,
    /^est[- ]?ce que/i,
    /^c['’]est/i
  ];

  if (!question) return "short";
  if (question.length < 40) return "short";
  if (shortPatterns.some(p => p.test(question))) return "short";

  return "long";
}

export function isSensitiveTopic(question) {
  return /(président|élection|politique|guerre|loi|crypto|finance|santé|date|actuel)/i.test(question);
}

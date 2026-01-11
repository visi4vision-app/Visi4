export function rankContent({ content, user }) {
  let score = 0;

  if (content.language === user.language) score += 20;
  if (content.country === user.country) score += 20;
  if (user.visicoin > 80) score += 20;
  if (content.safe) score += 10;
  if (content.educational) score += 10;

  return score;
}

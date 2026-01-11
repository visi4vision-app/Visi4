export function isPremium(user) {
  if (!user) return false;
  return user.plan === "premium";
}

export function isBanned(user) {
  if (!user) return false;
  return user.banned === true;
}

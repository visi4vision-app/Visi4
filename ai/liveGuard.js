export function liveWarning(reason) {
  return {
    type: "warning",
    message: `⚠️ Avertissement automatique Visi4 : ${reason}.
Merci de rester respectueux.`
  };
}

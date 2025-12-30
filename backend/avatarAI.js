export function avatarReact(event) {
  if (event === "WELCOME") return "🙂 Avatar sourit";
  if (event === "WARNING") return "😠 Avatar sérieux";
  if (event === "BLOCK") return "⛔ Avatar stop live";
  return "😐 Avatar neutre";
}

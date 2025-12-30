export function avatarReact(state) {
  if (state === "BLOCK") return "🛑 Avatar stop live";
  if (state === "WELCOME") return "🙂 Avatar smiles";
  return "😐 Avatar idle";
}

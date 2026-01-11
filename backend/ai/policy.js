export const policy = {
  forbidden: [
    "insulte président",
    "menace gouvernement",
    "haine raciale",
    "appel à la violence"
  ]
};

export function checkPolicy(text) {
  for (const rule of policy.forbidden) {
    if (text.toLowerCase().includes(rule)) {
      return { allowed:false, reason:rule };
    }
  }
  return { allowed:true };
}

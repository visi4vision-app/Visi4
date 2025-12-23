export async function reportUser(db, reporter, target, reason) {
  await db.collection("reports").add({
    reporter,
    target,
    reason,
    createdAt: Date.now()
  });
}

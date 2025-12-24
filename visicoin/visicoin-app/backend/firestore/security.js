async function canWithdraw(db, userId, amount) {
  const ref = db.collection("users").doc(userId);
  const snap = await ref.get();

  if (!snap.exists) return false;

  const data = snap.data();

  if (data.balance < amount) return false;
  if (data.lastWithdraw && Date.now() - data.lastWithdraw < 60000) return false;

  await ref.update({
    balance: data.balance - amount,
    lastWithdraw: Date.now(),
  });

  return true;
}

module.exports = { canWithdraw };

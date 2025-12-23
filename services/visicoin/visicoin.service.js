import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";

export async function initWallet(uid) {
  const ref = doc(db, "wallets", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, { balance: 0 });
  }
}

export async function addVisiCoin(uid, amount) {
  const ref = doc(db, "wallets", uid);
  await updateDoc(ref, { balance: amount });
}

export async function spendVisiCoin(uid, amount) {
  const ref = doc(db, "wallets", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) return false;
  if (snap.data().balance < amount) return false;

  await updateDoc(ref, {
    balance: snap.data().balance - amount,
  });

  return true;
}

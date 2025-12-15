import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebase";

// Ajouter de l'argent au wallet
export const addToWallet = async (uid, amount) => {
  const ref = doc(db, "users", uid);
  await updateDoc(ref, {
    walletBalance: increment(amount),
  });
};

// Retirer de l'argent
export const subtractFromWallet = async (uid, amount) => {
  const ref = doc(db, "users", uid);
  await updateDoc(ref, {
    walletBalance: increment(-amount),
  });
};

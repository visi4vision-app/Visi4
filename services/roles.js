import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

// Vérifier le rôle de l'utilisateur
export const getUserRole = async (uid) => {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) return "user";
  return snap.data().role || "user";
};

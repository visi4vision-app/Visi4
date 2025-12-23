import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "./firebase.service";

export async function getTopCreators() {
  const q = query(
    collection(db, "users"),
    orderBy("visiCoinBalance", "desc"),
    limit(10)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => d.data());
}

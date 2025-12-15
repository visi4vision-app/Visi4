import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const sendGift = async (fromUser, toUser, gift) => {
  await addDoc(collection(db, "transactions"), {
    fromUser,
    toUser,
    amount: gift.price,
    type: "gift",
    giftName: gift.name,
    createdAt: serverTimestamp(),
  });
};

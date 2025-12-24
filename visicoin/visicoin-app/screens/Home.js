import { View, Text } from "react-native";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../firebase";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const load = async () => {
      const ref = doc(db, "users", auth.currentUser.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) setBalance(snap.data().balance);
    };
    load();
  }, []);

  return (
    <View>
      <Text>💰 VisiCoin : {balance}</Text>
    </View>
  );
}

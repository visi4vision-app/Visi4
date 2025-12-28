import Animated, { SlideInUp } from 'react-native-reanimated';
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { startLive, stopLive } from "../services/tencentRTC";
import { debit, credit } from "../services/visicoin/visicoin.service";
import { gifts } from "../services/visicoin/gifts.service";

export default function LiveScreen() {
  const uidViewer = "viewer1";
  const uidCreator = "creator1";
  const [message, setMessage] = useState("");

  useEffect(() => {
    startLive("room-1");
    credit(uidViewer, 100); // crédit test
    return () => stopLive();
  }, []);

  const sendGift = (gift) => {
    try {
      debit(uidViewer, gift.price);
      credit(uidCreator, gift.price);
      setMessage(`🎁 ${gift.name} envoyé`);
    } catch (e) {
      setMessage(e.message);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black", padding: 20 }}>
      <Text style={{ color: "white", fontSize: 18 }}>🔴 LIVE</Text>

      {gifts.map((g) => (
        <TouchableOpacity key={g.id} onPress={() => sendGift(g)}>
          <Text style={{ color: "yellow", marginTop: 10 }}>
            {g.name} - {g.price} VisiCoin
          </Text>
        </TouchableOpacity>
      ))}

      <Text style={{ color: "white", marginTop: 20 }}>{message}</Text>
    </View>
  );
}

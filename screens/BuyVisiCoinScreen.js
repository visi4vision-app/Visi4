import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { buyPack } from "../services/visicoin/purchase.service";

export default function BuyVisiCoinScreen() {
  const uid = "testUser";

  return (
    <View style={{ padding: 20 }}>
      <Text>Acheter VisiCoin</Text>

      <TouchableOpacity onPress={() => buyPack(uid, 100)}>
        <Text>100 VisiCoin</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => buyPack(uid, 500)}>
        <Text>500 VisiCoin</Text>
      </TouchableOpacity>
    </View>
  );
}

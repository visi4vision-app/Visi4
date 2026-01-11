import React from "react";
import { View, Text } from "react-native";

export default function CallButtons() {
  return (
    <View style={{ flexDirection: "row", gap: 20 }}>
      <Text>📞 Appel (bientôt)</Text>
      <Text>🎥 Vidéo (bientôt)</Text>
    </View>
  );
}

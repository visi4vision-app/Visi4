import React from "react";
import { View, Text } from "react-native";

export default function Profile() {
  return (
    <View style={{ padding: 20 }}>
      <Text>👤 Nom utilisateur</Text>
      <Text>📹 Vidéos: 12</Text>
      <Text>❤️ Likes: 5 853</Text>
      <Text>👥 Followers: 2 249</Text>
    </View>
  );
}

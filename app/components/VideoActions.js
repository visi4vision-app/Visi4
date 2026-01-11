import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function VideoActions() {
  const [likes, setLikes] = useState(875);

  return (
    <View style={{ position: "absolute", right: 10, bottom: 100 }}>
      <TouchableOpacity onPress={() => setLikes(likes + 1)}>
        <Text style={{ fontSize: 24 }}>❤️</Text>
        <Text>{likes}</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{ fontSize: 24 }}>💬</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{ fontSize: 24 }}>↗️</Text>
      </TouchableOpacity>
    </View>
  );
}

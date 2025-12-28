import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const sendComment = () => {
    if (!text.trim()) return;
    setComments((c) => [...c, text]);
    setText("");
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ color: "white" }}>
        💬 {comments.length} commentaires
      </Text>

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Écrire un commentaire"
        placeholderTextColor="#888"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#444",
          color: "white",
          marginTop: 8,
        }}
      />

      <TouchableOpacity onPress={sendComment}>
        <Text style={{ color: "#4da6ff", marginTop: 8 }}>
          Envoyer
        </Text>
      </TouchableOpacity>
    </View>
  );
}

import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

export default function AI() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  async function send() {
    const res = await fetch("http://TON_BACKEND/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });
    const data = await res.json();
    setMessages([...messages, { role: "assistant", content: data.reply }]);
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput value={text} onChangeText={setText} placeholder="Parle à l'IA" />
      <Button title="Envoyer" onPress={send} />
    </View>
  );
}

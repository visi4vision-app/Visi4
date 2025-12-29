import { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";

export default function AIChatScreen() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState("");

  const send = async () => {
    setMessages("");
    const res = await fetch("http://YOUR_SERVER_IP:4000/ai/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid: "mobile_user",
        prompt: text
      })
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      setMessages(m => m + decoder.decode(value));
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ScrollView>
        <Text>{messages}</Text>
      </ScrollView>

      <TextInput
        placeholder="Parle à Visi4 IA..."
        value={text}
        onChangeText={setText}
        onSubmitEditing={send}
      />
    </View>
  );
}

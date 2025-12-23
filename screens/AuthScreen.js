import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase.service";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMsg("✅ Compte créé");
    } catch (e) {
      setMsg(e.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Créer compte" onPress={register} />
      <Text>{msg}</Text>
    </View>
  );
}

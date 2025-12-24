import { View, TextInput, Button, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", user.user.uid), {
        email,
        balance: 0,
        createdAt: new Date()
      });

      navigation.replace("Home");
    } catch (e) {
      Alert.alert("Erreur", e.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Mot de passe" secureTextEntry onChangeText={setPassword} />
      <Button title="Créer un compte" onPress={register} />
    </View>
  );
}

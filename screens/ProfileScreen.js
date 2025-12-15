import { View, Text, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22 }}>Profil utilisateur</Text>
      <Button title="Paramètres" onPress={() => navigation.navigate("Settings")} />
    </View>
  );
}

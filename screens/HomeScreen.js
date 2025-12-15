import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white", fontSize: 24 }}>visi4 - Accueil</Text>
      <Button title="Profil" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}

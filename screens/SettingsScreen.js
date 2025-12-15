import { View, Text, Switch } from "react-native";
import { useState } from "react";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Paramètres</Text>

      <Text>Mode sombre</Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />

      <Text style={{ marginTop: 20 }}>Langue</Text>
      <Text>Français</Text>

      <Text style={{ marginTop: 20 }}>Sécurité</Text>
      <Text>Changer mot de passe</Text>

      <Text style={{ marginTop: 20, color: "red" }}>
        Supprimer le compte
      </Text>
    </View>
  );
}

import { View, TextInput, Button, Alert } from "react-native";

export default function Withdraw() {
  const withdraw = () => {
    Alert.alert("Demande envoyée", "Votre retrait est en cours");
  };

  return (
    <View>
      <TextInput placeholder="Montant" keyboardType="numeric" />
      <Button title="Retirer" onPress={withdraw} />
    </View>
  );
}

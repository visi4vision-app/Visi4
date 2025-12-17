
import { View, Text, Button } from "react-native";

export default function Upload() {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text>Upload vidéo</Text>
      <Button title="Choisir vidéo" onPress={() => {}} />
    </View>
  );
}

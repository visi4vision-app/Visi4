import { TouchableOpacity, Text } from "react-native";

export default function AIButton({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AIChat")}
      style={{
        position: "absolute",
        top: 50,
        right: 20,
        backgroundColor: "black",
        padding: 14,
        borderRadius: 50,
        zIndex: 999
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>🤖 IA</Text>
    </TouchableOpacity>
  );
}

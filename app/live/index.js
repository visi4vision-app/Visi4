import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function LiveScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "red",
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        🔴 LIVE
      </Text>

      <Text
        style={{
          color: "white",
          fontSize: 16,
          marginBottom: 40,
          textAlign: "center",
        }}
      >
        Caméra & Streaming\n(en préparation)
      </Text>

      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          backgroundColor: "#222",
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 25,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          ⬅ Retour
        </Text>
      </TouchableOpacity>
    </View>
  );
}

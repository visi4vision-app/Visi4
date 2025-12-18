import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
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
          color: "white",
          fontSize: 32,
          fontWeight: "bold",
          marginBottom: 40,
        }}
      >
        VISI4
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/live")}
        style={{
          backgroundColor: "red",
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 30,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          🔴 LIVE
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/feed")}
        style={{
          backgroundColor: "#222",
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 30,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          🎬 Vidéos
        </Text>
      </TouchableOpacity>
    </View>
  );
}

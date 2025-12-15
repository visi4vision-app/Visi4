import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => router.push("/live")}
        style={{
          backgroundColor: "red",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          🔴 LIVE
        </Text>
      </TouchableOpacity>
    </View>
  );
}

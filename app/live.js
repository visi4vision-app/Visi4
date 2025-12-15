import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function LiveScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white", fontSize: 24, marginBottom: 20 }}>
        🔴 LIVE VISI4
      </Text>

      <TouchableOpacity
        onPress={() => router.back()}
        style={{ backgroundColor: "red", padding: 15, borderRadius: 10 }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          Quitter le live
        </Text>
      </TouchableOpacity>
    </View>
  );
}

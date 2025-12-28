import { Pressable, Text, View } from "react-native";
import formatNumber from "../utils/formatNumber";

export default function CommentButton({ count = 324 }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Pressable>
        <Text style={{ fontSize: 26 }}>💬</Text>
      </Pressable>
      <Text style={{ color: "white", fontSize: 12 }}>
        {formatNumber(count)}
      </Text>
    </View>
  );
}

import { Text } from "react-native";
import formatNumber from "../utils/formatNumber";

export default function ViewCounter({ views }) {
  return (
    <Text style={{ color: "white", fontSize: 12 }}>
      👁️ {formatNumber(views || 0)}
    </Text>
  );
}

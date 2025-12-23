import { Text, TouchableOpacity } from "react-native";
import { addVisiCoin } from "../../services/visicoin/visicoin.service";

export default function BuyVisiCoinButton({ uid, amount }) {
  return (
    <TouchableOpacity
      onPress={() => addVisiCoin(uid, amount)}
      style={{ padding: 12, backgroundColor: "#FFD700", borderRadius: 8 }}
    >
      <Text>+ {amount} VisiCoin</Text>
    </TouchableOpacity>
  );
}

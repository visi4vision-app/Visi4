import { View, Text } from "react-native";
import { creatorStats } from "../creator/stats";

export default function CreatorPro({ videos }) {
  const stats = creatorStats(videos);
  return (
    <View>
      <Text>Vues: {stats.views}</Text>
      <Text>Likes: {stats.likes}</Text>
      <Text>Revenus: ${stats.revenue.toFixed(2)}</Text>
    </View>
  );
}

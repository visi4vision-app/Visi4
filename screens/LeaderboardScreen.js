import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getTopCreators } from "../services/leaderboard.service";

export default function LeaderboardScreen() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getTopCreators().then(setList);
  }, []);

  return (
    <View>
      <Text>🏆 Top Créateurs</Text>
      {list.map((u, i) => (
        <Text key={i}>{i + 1}. {u.visiCoinBalance} VisiCoin</Text>
      ))}
    </View>
  );
}

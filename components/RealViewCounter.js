import { useEffect, useState } from "react";
import { Text } from "react-native";
import formatNumber from "../utils/formatNumber";

export default function RealViewCounter({ isPlaying }) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setTimeout(() => {
      setViews(v => v + 1);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isPlaying]);

  return (
    <Text style={{ color: "white", fontSize: 12 }}>
      👁️ {formatNumber(views)}
    </Text>
  );
}

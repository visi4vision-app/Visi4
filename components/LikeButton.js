import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import formatNumber from "../utils/formatNumber";

export default function LikeButton() {
  const scale = useSharedValue(1);
  const [likes, setLikes] = useState(1280);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onLike = () => {
    scale.value = withSpring(1.6, {}, () => {
      scale.value = withSpring(1);
    });
    setLikes(l => l + 1);
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Pressable onPress={onLike}>
        <Animated.Text
          style={[
            { fontSize: 30, color: "#ff3366" },
            animatedStyle,
          ]}
        >
          ❤️
        </Animated.Text>
      </Pressable>

      <Text style={{ color: "white", fontSize: 12 }}>
        {formatNumber(likes)}
      </Text>
    </View>
  );
}

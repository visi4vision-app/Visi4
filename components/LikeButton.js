import React from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export default function LikeButton() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onLike = () => {
    scale.value = withSpring(1.6, {}, () => {
      scale.value = withSpring(1);
    });
  };

  return (
    <Pressable onPress={onLike}>
      <Animated.Text
        style={[
          { fontSize: 32, color: '#ff0050' },
          animatedStyle,
        ]}
      >
        ❤️
      </Animated.Text>
    </Pressable>
  );
}

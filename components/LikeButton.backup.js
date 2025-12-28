import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export default function LikeButton({ initialLikes = 0 }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onLike = () => {
    scale.value = withSpring(1.3, {}, () => {
      scale.value = withSpring(1);
    });

    setLiked(!liked);
    setL
ikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <Pressable onPress={onLike}>
      <View style={{ alignItems: 'center' }}>
        <Animated.Text
          style={[
            { fontSize: 30, color: liked ? '#ff2d55' : '#fff' },
            animatedStyle,
          ]}
        >
          ❤️
        </Animated.Text>
        <Text style={{ color: '#fff', fontSize: 12 }}>
          {likes}
        </Text>
      </View>
    </Pressable>
  );
}	

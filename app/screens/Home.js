import React from "react";
import { Dimensions } from "react-native";
import { Video } from "expo-av";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";

const { height } = Dimensions.get("window");

const videos = [
  { id: "1", uri: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "2", uri: "https://www.w3schools.com/html/movie.mp4" },
];

export default function Home() {
  return (
    <Animated.FlatList
      data={videos}
      keyExtractor={i => i.id}
      pagingEnabled
      renderItem={({ item }) => (
        <Video
          source={{ uri: item.uri }}
          style={{ height, width: "100%" }}
          resizeMode="cover"
          shouldPlay
          isLooping
        />
      )}
    />
  );
}

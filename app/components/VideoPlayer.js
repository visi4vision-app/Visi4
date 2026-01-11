import React from "react";
import { Video } from "expo-av";

export default function VideoPlayer({ source }) {
  return (
    <Video
      source={{ uri: source }}
      style={{ width: "100%", height: "100%" }}
      resizeMode="cover"
      shouldPlay
      isLooping
    />
  );
}

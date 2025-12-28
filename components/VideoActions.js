import { View } from "react-native";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import RealViewCounter from "./RealViewCounter";

export default function VideoActions({ isPlaying }) {
  return (
    <View style={{
      position: "absolute",
      right: 10,
      bottom: 120,
      gap: 20,
      alignItems: "center",
    }}>
      <LikeButton />
      <CommentButton />
      <RealViewCounter isPlaying={isPlaying} />
    </View>
  );
}

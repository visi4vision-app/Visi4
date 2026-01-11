import { FlatList, Dimensions } from "react-native";
import { Video } from "expo-av";

const { height } = Dimensions.get("window");

export default function VideoFeed({ videos }: { videos: string[] }) {
  return (
    <FlatList
      data={videos}
      pagingEnabled
      snapToInterval={height}
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item }) => (
        <Video
          source={{ uri: item }}
          style={{ height, width: "100%" }}
          resizeMode="cover"
          shouldPlay
          isLooping
        />
      )}
    />
  );
}

import { View, Dimensions } from "react-native";
import PagerView from "react-native-pager-view";
import { Video } from "expo-av";

const { height } = Dimensions.get("window");

const videos = [
  { id: 1, url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 2, url: "https://www.w3schools.com/html/movie.mp4" },
];

export default function Feed() {
  return (
    <PagerView style={{ flex: 1 }} orientation="vertical">
      {videos.map((v) => (
        <View key={v.id} style={{ height }}>
          <Video
            source={{ uri: v.url }}
            style={{ height: "100%", width: "100%" }}
            resizeMode="cover"
            shouldPlay
            isLooping
          />
        </View>
      ))}
    </PagerView>
  );
}


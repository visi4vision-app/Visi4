import { View, Text, Dimensions, FlatList } from "react-native";
import { Video } from "expo-av";

const { height } = Dimensions.get("window");

const VIDEOS = [
  {
    id: "1",
    uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  },
  {
    id: "2",
    uri: "https://d23dyxeqlo5psv.cloudfront.net/elephants-dream.mp4",
  },
];

export default function FeedScreen() {
  return (
    <FlatList
      data={VIDEOS}
      keyExtractor={(item) => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={{ height, backgroundColor: "black" }}>
          <Video
            source={{ uri: item.uri }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
            shouldPlay
            isLooping
          />

          <View
            style={{
              position: "absolute",
              bottom: 80,
              left: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>
              🎥 Vidéo Feed
            </Text>
            <Text style={{ color: "#aaa" }}>
              @visi4
            </Text>
          </View>
        </View>
      )}
    />
  );
}

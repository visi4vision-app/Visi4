import { View, Dimensions, FlatList, StyleSheet } from "react-native";
import { Video } from "expo-av";

const { height } = Dimensions.get("window");

const videos = [
  {
    id: "1",
    uri: "https://res.cloudinary.com/demo/video/upload/w_720/sample.mp4",
  },
  {
    id: "2",
    uri: "https://res.cloudinary.com/demo/video/upload/w_720/dog.mp4",
  },
];

export default function FeedScreen() {
  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: item.uri }}
            style={styles.video}
            resizeMode="cover"
            shouldPlay
            isLooping
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  videoContainer: {
    height: height,
    width: "100%",
    backgroundColor: "black",
  },
  video: {
    height: "100%",
    width: "100%",
  },
});

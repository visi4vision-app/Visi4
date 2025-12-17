import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity, StatusBar } from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const videos = [
  {
    id: "1",
    uri: "https://www.w3schools.com/html/mov_bbb.mp4",
    user: "Visi4",
    desc: "Bienvenue sur Visi4",
    likes: 120,
    comments: 45,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.topBar}>
        <Text style={styles.live}>LIVE</Text>
        <Text style={styles.title}>Pour toi</Text>
        <Ionicons name="search" size={22} color="white" />
      </View>

      <FlatList
        data={videos}
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.page}>
            <Video
              source={{ uri: item.uri }}
              style={styles.video}
              resizeMode="cover"
              shouldPlay
              isLooping
            />

            <View style={styles.left}>
              <Text style={styles.user}>@{item.user}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>

            <View style={styles.right}>
              <Btn icon="heart" txt={item.likes} />
              <Btn icon="chatbubble" txt={item.comments} />
              <Btn icon="gift" txt="VSC" />
              <Btn icon="add-circle" txt="Suivre" />
            </View>
          </View>
        )}
      />
    </View>
  );
}

function Btn({ icon, txt }: any) {
  return (
    <TouchableOpacity style={{ alignItems: "center", marginBottom: 20 }}>
      <Ionicons name={icon} size={32} color="white" />
      <Text style={{ color: "white", fontSize: 12 }}>{txt}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  page: { height, width: "100%" },
  video: { height: "100%", width: "100%" },

  topBar: {
    position: "absolute",
    top: 40,
    left: 10,
    right: 10,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  live: {
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 6,
    borderRadius: 4,
    fontWeight: "bold",
  },

  title: { color: "white", fontSize: 18, fontWeight: "bold" },

  left: { position: "absolute", bottom: 80, left: 10 },
  user: { color: "white", fontWeight: "bold" },
  desc: { color: "white", marginTop: 4 },

  right: {
    position: "absolute",
    right: 10,
    bottom: 120,
    alignItems: "center",
  },
});

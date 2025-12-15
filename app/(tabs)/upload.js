import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import { useState } from "react";

export default function UploadScreen() {
  const [video, setVideo] = useState(null);

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setVideo(result.assets[0]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Publier une vidéo</Text>

      <TouchableOpacity style={styles.btn} onPress={pickVideo}>
        <Text style={styles.btnText}>Choisir une vidéo</Text>
      </TouchableOpacity>

      {video && (
        <Video
          source={{ uri: video.uri }}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#ff0050",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  video: {
    width: "100%",
    height: 300,
    marginTop: 20,
  },
});

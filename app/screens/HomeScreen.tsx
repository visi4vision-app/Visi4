import { View, Button, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import VideoFeed from "../components/VideoFeed";
import { uploadToCloudinary } from "../services/cloudinary";
import { askAI } from "../services/ai";

export default function HomeScreen() {
  const [videos, setVideos] = useState<string[]>([]);
  const [aiText, setAiText] = useState("");

  const uploadVideo = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos
    });

    if (!res.canceled) {
      const upload = await uploadToCloudinary(res.assets[0].uri, "video");
      setVideos(prev => [upload.secure_url, ...prev]);

      const analysis = await askAI(
        "Analyse cette vidéo et décris son contenu."
      );
      setAiText(analysis);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <VideoFeed videos={videos} />
      <Button title="➕ Upload vidéo" onPress={uploadVideo} />
      {aiText ? <Text>{aiText}</Text> : null}
    </View>
  );
}

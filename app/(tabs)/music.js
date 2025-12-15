import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { useState } from "react";

const tracks = [
  { name: "Afro Beat", file: require("../../assets/music/afro.mp3") },
  { name: "Drill", file: require("../../assets/music/drill.mp3") },
];

export default function MusicScreen() {
  const [sound, setSound] = useState(null);

  const playMusic = async (track) => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync(track.file);
    setSound(newSound);
    await newSound.playAsync();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisir une musique</Text>

      {tracks.map((track, index) => (
        <TouchableOpacity
          key={index}
          style={styles.track}
          onPress={() => playMusic(track)}
        >
          <Text style={styles.trackText}>{track.name}</Text>
        </TouchableOpacity>
      ))}
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
    fontSize: 22,
    marginBottom: 20,
  },
  track: {
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  trackText: {
    color: "#fff",
  },
});

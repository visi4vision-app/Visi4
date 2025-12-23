import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export default function ActionButtons() {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button}>
        <AntDesign name="heart" size={32} color="#ff2d55" />
        <Text style={styles.label}>1.2K</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="chatbubble-outline" size={30} color="#fff" />
        <Text style={styles.label}>340</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Feather name="share" size={30} color="#fff" />
        <Text style={styles.label}>Share</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followText}>Suivre</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 10,
    bottom: 120,
    alignItems: "center",
  },
  button: {
    marginBottom: 20,
    alignItems: "center",
  },
  label: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
  },
  followButton: {
    marginTop: 10,
    backgroundColor: "#00f2ea", // couleur différente de TikTok
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  followText: {
    color: "#000",
    fontWeight: "bold",
  },
});

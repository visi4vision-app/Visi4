import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#FFE4EC", "#FFF0F5"]}
      style={styles.container}
    >
      {/* Logo */}
      <Image
        source={{ uri: "https://i.imgur.com/9QZ7ZQZ.png" }}
        style={styles.logo}
      />

      <View style={styles.badge}>
        <Text style={styles.badgeText}>✨ Plateforme mondiale pour créateurs</Text>
      </View>

      <Text style={styles.title}>FreeMind Vision</Text>
      <Text style={styles.subtitle}>Créez. Partagez. Gagnez.</Text>

      <Text style={styles.description}>
        Rejoignez la communauté mondiale où la créativité rencontre
        l'opportunité. Partagez vos vidéos, connectez-vous avec des millions
        de personnes et monétisez votre passion avec YimiCoins.
      </Text>

      {/* Bouton principal */}
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainButtonText}>Commencer gratuitement</Text>
      </TouchableOpacity>

      {/* Bouton secondaire */}
      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>Se connecter</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  logo: {
    width: 90,
    height: 90,
    marginBottom: 16,
  },

  badge: {
    backgroundColor: "#FFD6E7",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 20,
  },

  badgeText: {
    color: "#D63384",
    fontSize: 13,
    fontWeight: "600",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#E60073",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },

  description: {
    textAlign: "center",
    fontSize: 14,
    color: "#555",
    marginBottom: 30,
    lineHeight: 22,
  },

  mainButton: {
    backgroundColor: "#E60073",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
    marginBottom: 14,
  },

  mainButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  secondaryButton: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  secondaryButtonText: {
    color: "#333",
    fontSize: 15,
    fontWeight: "600",
  },
});

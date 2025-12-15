import { View, Text, StyleSheet } from "react-native";

export default function LiveScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LIVE – VISI4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ff0050",
    fontSize: 22,
    fontWeight: "bold",
  },
})

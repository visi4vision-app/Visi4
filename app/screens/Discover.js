import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function Discover() {
  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Rechercher"
        style={[styles.input, focus && styles.focus]}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    height: 45,
    backgroundColor: "#eee",
    borderRadius: 25,
    paddingHorizontal: 15
  },
  focus: {
    height: 60,
    backgroundColor: "#ddd"
  }
});

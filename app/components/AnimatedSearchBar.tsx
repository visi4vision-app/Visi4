import React, { useState } from "react";
import { View, TextInput, Text, Pressable, StyleSheet } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

export default function AnimatedSearchBar() {
  const [focused, setFocused] = useState(false);
  const width = useSharedValue(260);

  const style = useAnimatedStyle(() => ({
    width: withTiming(width.value, { duration: 250 }),
  }));

  return (
    <View style={styles.row}>
      <Animated.View style={[styles.bar, style]}>
        <TextInput
          placeholder="Vidéos drôles"
          placeholderTextColor="#aaa"
          style={styles.input}
          onFocus={() => {
            setFocused(true);
            width.value = 320;
          }}
          onBlur={() => {
            setFocused(false);
            width.value = 260;
          }}
        />
      </Animated.View>
      {focused && <Text style={styles.cancel}>Annuler</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
  bar: {
    height: 44,
    backgroundColor: "#1c1c2b",
    borderRadius: 22,
    paddingHorizontal: 14,
    justifyContent: "center",
  },
  input: { color: "#fff", fontSize: 16 },
  cancel: { color: "#4a6cff", marginLeft: 8 }
});

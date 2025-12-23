import LottieView from "lottie-react-native";

export default function GiftAnimation({ source }) {
  return (
    <LottieView
      source={source}
      autoPlay
      loop={false}
      style={{ width: 120, height: 120 }}
    />
  );
}
import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

export default function GiftAnimation({ source, onFinish }) {
  return (
    <View style={styles.container}>
      <LottieView
        source={source}
        autoPlay
        loop={false}
        onAnimationFinish={onFinish}
        style={styles.anim}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  anim: {
    width: 300,
    height: 300,
  },
});

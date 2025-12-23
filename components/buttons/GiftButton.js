import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function GiftButton({ gift, onSend }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => onSend(gift)}>
      <Text style={styles.text}>{gift.name}</Text>
      <Text style={styles.price}>{gift.price} VC</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#ff2d55",
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  price: {
    color: "#fff",
    fontSize: 12,
  },
});

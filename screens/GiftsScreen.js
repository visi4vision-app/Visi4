import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { gifts } from "../services/visicoin/gifts.service";

export default function GiftsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={gifts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.gift}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price} VC</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 8,
  },
  gift: {
    flex: 1,
    margin: 6,
    padding: 10,
    backgroundColor: "#111",
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    color: "#fff",
    fontSize: 18,
  },
  price: {
    color: "#FFD700",
    marginTop: 4,
    fontSize: 12,
  },
});

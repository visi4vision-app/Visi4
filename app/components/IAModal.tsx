import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

export default function IAModal({ visible, onClose }: any) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>IA Visi4 🤖</Text>
          <Text style={styles.text}>Assistant intelligent prêt.</Text>
          <Pressable onPress={onClose} style={styles.btn}>
            <Text style={styles.btnText}>Fermer</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.7)", justifyContent: "center", alignItems: "center" },
  box: { backgroundColor: "#1c1c2b", padding: 20, borderRadius: 16, width: "80%" },
  title: { color: "#4da6ff", fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  text: { color: "#fff", marginBottom: 20 },
  btn: { backgroundColor: "#4da6ff", padding: 10, borderRadius: 8 },
  btnText: { color: "#000", textAlign: "center", fontWeight: "bold" }
});

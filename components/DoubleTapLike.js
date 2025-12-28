import { Pressable, Vibration } from "react-native";

export default function DoubleTapLike({ onLike, children }) {
  let lastTap = null;

  const handlePress = () => {
    const now = Date.now();
    if (lastTap && now - lastTap < 300) {
      Vibration.vibrate(40);
      onLike();
    }
    lastTap = now;
  };

  return (
    <Pressable onPress={handlePress} style={{ flex: 1 }}>
      {children}
    </Pressable>
  );
}

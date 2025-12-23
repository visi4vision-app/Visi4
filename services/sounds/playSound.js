import { Audio } from "expo-av";

export async function playSound(url) {
  const { sound } = await Audio.Sound.createAsync({ uri: url });
  await sound.playAsync();
}

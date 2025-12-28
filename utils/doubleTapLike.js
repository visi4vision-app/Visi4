import { Vibration } from 'react-native';

export function handleDoubleTap(onLike) {
  let lastTap = 0;
  return () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      Vibration.vibrate(40);
      onLike();
    }
    lastTap = now;
  };
}

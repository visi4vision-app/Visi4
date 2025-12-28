import { useState } from 'react';
import { Vibration } from 'react-native';

export default function useDoubleTapLike(onLike) {
  const [lastTap, setLastTap] = useState(0);
  return () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      Vibration.vibrate(50);
      onLike?.();
    }
    setLastTap(now);
  };
}

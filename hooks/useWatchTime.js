import { useEffect, useRef } from "react";

export default function useWatchTime(isPlaying, onUpdate) {
  const startTime = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      startTime.current = Date.now();
    } else if (startTime.current) {
      const watched = (Date.now() - startTime.current) / 1000;
      onUpdate(watched);
      startTime.current = null;
    }
  }, [isPlaying]);
}

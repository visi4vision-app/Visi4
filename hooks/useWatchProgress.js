import { useEffect, useRef } from "react";

export default function useWatchProgress(videoRef, onView) {
  const viewed = useRef(false);

  useEffect(() => {
    if (!videoRef?.current) return;

    const interval = setInterval(async () => {
      const status = await videoRef.current.getStatusAsync();
      if (!status.isLoaded) return;

      const progress = status.positionMillis / status.durationMillis;

      if (progress >= 0.3 && !viewed.current) {
        viewed.current = true;
        onView();
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);
}

import { useRef, useState } from "react";
import { Video } from "expo-av";
import useWatchProgress from "../hooks/useWatchProgress";

export default function VideoPlayer({ video }) {
  const videoRef = useRef(null);
  const [views, setViews] = useState(video.views || 0);

  useWatchProgress(videoRef, () => {
    setViews(v => v + 1);
    video.views = (video.views || 0) + 1;
  });

  return (
    <Video
      ref={videoRef}
      source={{ uri: video.url }}
      style={{ width: "100%", height: "100%" }}
      resizeMode="cover"
      shouldPlay
      isLooping
    />
  );
}

import { useState } from "react";
import useWatchTime from "../hooks/useWatchTime";

export default function AIVideoWrapper({ isPlaying, video, children }) {
  const [watchTime, setWatchTime] = useState(0);

  useWatchTime(isPlaying, (time) => {
    video.watchTime = (video.watchTime || 0) + time;
  });

  return children;
}

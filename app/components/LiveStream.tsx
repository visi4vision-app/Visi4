import { useEffect } from "react";
import { initLive } from "../services/live/tencentRTC";

export default function LiveStream() {
  useEffect(() => {
    initLive({
      sdkAppId: process.env.EXPO_PUBLIC_TENCENT_APP_ID,
      userId: "creator_1",
      userSig: process.env.EXPO_PUBLIC_TENCENT_SECRET,
      roomId: 1001
    });
  }, []);

  return null;
}

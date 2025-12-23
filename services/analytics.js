import * as Analytics from "expo-firebase-analytics";

export function logGift(giftId) {
  Analytics.logEvent("send_gift", { giftId });
}

export function logWatch(videoId, duration) {
  Analytics.logEvent("watch_video", { videoId, duration });
}

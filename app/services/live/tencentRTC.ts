import TRTC from "trtc-js-sdk";

export function initLive({ sdkAppId, userId, userSig, roomId }) {
  const client = TRTC.createClient({
    mode: "live",
    sdkAppId,
    userId,
    userSig
  });
  return client.join({ roomId });
}

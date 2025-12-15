import { mediaDevices, RTCPeerConnection } from "react-native-webrtc";
import { v4 as uuidv4 } from "uuid";

export async function startLiveStream() {
  const stream = await mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });

  const liveId = uuidv4();

  const pc = new RTCPeerConnection({
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
  });

  stream.getTracks().forEach(track => pc.addTrack(track, stream));

  return {
    liveId,
    stream,
    pc,
  };
}

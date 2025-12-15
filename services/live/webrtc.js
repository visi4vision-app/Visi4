import { mediaDevices, RTCPeerConnection } from "react-native-webrtc";

export async function startLive() {
  const stream = await mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });

  const pc = new RTCPeerConnection();

  stream.getTracks().forEach(track => {
    pc.addTrack(track, stream);
  });

  return { stream, pc };
}

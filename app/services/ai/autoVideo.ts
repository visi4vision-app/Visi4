import { generateScript } from "./videoScript";
import { generateVoice } from "./voice";
import { buildVideo } from "../cloudinary/videoBuilder";

export async function createAutoVideo(topic: string) {
  const script = await generateScript(topic);
  const voice = await generateVoice(script);
  const video = await buildVideo("sample.jpg", "voice.mp3");
  return video;
}

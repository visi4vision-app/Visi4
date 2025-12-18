import axios from "axios";

export const uploadVideo = async (uri: string) => {
  const data = new FormData();
  data.append("file", {
    uri,
    type: "video/mp4",
    name: "video.mp4",
  } as any);
  data.append("upload_preset", process.env.EXPO_PUBLIC_CLOUDINARY_PRESET!);

  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/${process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD}/video/upload`,
    data
  );

  return res.data.secure_url;
};

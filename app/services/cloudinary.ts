export async function uploadToCloudinary(uri: string, type: "video" | "image") {
  const data = new FormData();
  data.append("file", uri as any);
  data.append("upload_preset", process.env.EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME}/${type}/upload`,
    { method: "POST", body: data }
  );

  return await res.json();
}

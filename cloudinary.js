export const uploadToCloudinary = async (uri, type = "video") => {
  const data = new FormData();

  data.append("file", {
    uri,
    type: `${type}/mp4`,
    name: "upload.mp4",
  });

  data.append(
    "upload_preset",
    process.env.EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET
  );

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
    {
      method: "POST",
      body: data,
    }
  );

  return await res.json();
};


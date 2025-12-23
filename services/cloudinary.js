export async function uploadVideo(uri) {
  const data = new FormData();

 data.append('file', {
    uri,
    type: 'video/mp4',
    name: 'video.mp4',
  });

  data.append('upload_preset', 'unsigned_preset');

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/video/upload`,
    {
      method: 'POST',
      body: data,
    }
  );

  return await res.json();
}

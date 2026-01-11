export function getKeyFrames(videoPublicId) {
  return [
    `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/video/upload/so_0/${videoPublicId}.jpg`,
    `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/video/upload/so_5/${videoPublicId}.jpg`,
    `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/video/upload/so_10/${videoPublicId}.jpg`
  ];
}

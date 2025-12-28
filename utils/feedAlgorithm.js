export default function rankVideos(videos) {
  return videos.sort((a, b) => {
    const scoreA = a.likes * 2 + a.comments * 3 + a.watchTime;
    const scoreB = b.likes * 2 + b.comments * 3 + b.watchTime;
    return scoreB - scoreA;
  });
}

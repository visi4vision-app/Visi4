export function rankVideos(videos: any[]) {
  return videos.sort((a, b) => {
    const scoreA = (a.likes || 0) + (a.watchTime || 0);
    const scoreB = (b.likes || 0) + (b.watchTime || 0);
    return scoreB - scoreA;
  });
}

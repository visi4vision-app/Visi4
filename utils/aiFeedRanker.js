export default function rank(videos) {
  return [...videos].sort((a, b) => {
    const scoreA = a.likes * 2 + a.comments * 3 + a.watchTime + a.views;
    const scoreB = b.likes * 2 + b.comments * 3 + b.watchTime + b.views;
    return scoreB - scoreA;
  });
}

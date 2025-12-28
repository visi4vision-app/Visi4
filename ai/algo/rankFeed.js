import { feedScore } from "./feedScore.js";

export function rankFeed(posts, user) {
  return posts
    .map(p => ({
      ...p,
      score: feedScore({
        time_spent: user.time_spent || 0,
        likes: p.likes,
        comments: p.comments,
        shares: p.shares
      })
    }))
    .sort((a, b) => b.score - a.score);
}

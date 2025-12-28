import { feedScore } from './feedScore.js';

export function rankFeed(posts, user) {
  return posts
    .map(post => ({
      ...post,
      score: feedScore({
        time_spent: user.time_spent || 0,
        likes: post.likes,
        comments: post.comments,
        shares: post.shares
      })
    }))
    .sort((a, b) => b.score - a.score);
}

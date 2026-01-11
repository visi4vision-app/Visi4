import { computeFeedWeight } from "./feedScore.js";
export function filterFeed(videos, userScore) {
  return videos.filter(v => {
    if (userScore < 30 && v.rank === "LIMITED") return false;
    if (userScore < 50 && v.rank === "TRENDING") return false;
    return true;
  });
}

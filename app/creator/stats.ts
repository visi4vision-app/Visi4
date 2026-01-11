export function creatorStats(videos) {
  return {
    views: videos.reduce((a,v)=>a+v.views,0),
    likes: videos.reduce((a,v)=>a+v.likes,0),
    revenue: videos.reduce((a,v)=>a+(v.views*0.02),0)
  };
}

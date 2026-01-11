export function injectAds(feed: any[]) {
  return feed.flatMap((item, i) =>
    i % 5 === 0 ? [{ type: "ad" }, item] : [item]
  );
}

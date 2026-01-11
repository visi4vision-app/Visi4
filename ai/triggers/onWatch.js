export default async function onWatch({ uid, videoId, duration }) {
  return {
    ok: true,
    action: "watch",
    uid,
    videoId,
    duration
  };
}

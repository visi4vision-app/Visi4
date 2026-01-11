export default async function onShare({ uid, postId }) {
  return {
    ok: true,
    action: "share",
    uid,
    postId
  };
}

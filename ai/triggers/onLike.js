export default async function onLike({ uid, postId }) {
  return {
    ok: true,
    action: "like",
    uid,
    postId
  };
}

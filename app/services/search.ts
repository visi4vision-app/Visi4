export async function search(q: string, type: string) {
    `${process.env.EXPO_PUBLIC_API_URL}/search?q=${q}&type=${type}`
  );
  return res.json();
}

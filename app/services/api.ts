const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function apiPost(path: string, data: any, token?: string) {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });

  return await res.json();
}

const API = "http://TON_IP:3000";


export const earnCoins = (uid, amount) =>
  fetch(`${API}/earn`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid, amount }),
  });

export const getBalance = (uid) =>
  fetch(`${API}/balance/${uid}`).then(r => r.json());

export const withdraw = (uid, amount, phone) =>
  fetch(`${API}/withdraw`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid, amount, phone }),
  });

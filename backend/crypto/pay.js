import { v4 as uuid } from "uuid";

export function cryptoPay({ userId, amount, token }) {
  return {
    txId: uuid(),
    userId,
    amount,
    token,
    status: "confirmed",
    network: "testnet"
  };
}

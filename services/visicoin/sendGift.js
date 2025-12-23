import { spendVisiCoin } from "./visicoin.service";

export async function sendGift(uid, gift) {
  return await spendVisiCoin(uid, gift.price);
}

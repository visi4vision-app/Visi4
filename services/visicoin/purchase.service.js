import { credit } from "./visicoin.service";

export async function buyPack(uid, coins) {
  // Simulation achat (Play Store plus tard)
  return await credit(uid, coins);
}

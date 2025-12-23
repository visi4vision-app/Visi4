export const RARITY = {
  common: 1,
  rare: 5,
  epic: 20,
  legendary: 100
};

export function giftPrice(base, rarity) {
  return base * RARITY[rarity];
}

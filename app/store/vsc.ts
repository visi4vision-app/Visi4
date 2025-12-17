export let VSC = 0;

export function addVSC(amount: number) {
  VSC += amount;
}

export function spendVSC(amount: number) {
  if (VSC >= amount) VSC -= amount;
}

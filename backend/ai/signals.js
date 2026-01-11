let signals = [];

export function addSignal(s) {
  signals.push({ ...s, t:Date.now() });
}

export function countSignals() {
  signals = signals.filter(s => Date.now() - s.t < 60000);
  return signals.length;
}

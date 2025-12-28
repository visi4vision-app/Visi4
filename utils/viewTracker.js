export default class ViewTracker {
  constructor(durationMs) {
    this.duration = durationMs;
    this.watched = 0;
    this.lastStart = null;
  }

  start() {
    this.lastStart = Date.now();
  }

  pause() {
    if (this.lastStart) {
      this.watched += Date.now() - this.lastStart;
      this.lastStart = null;
    }
  }

  isCounted() {
    return this.watched >= this.duration * 0.6; // 60% minimum
  }
}

export default class Counter {

  constructor(opts) {
    this.start = opts.start;
    this.end = opts.end;
    this.selector = opts.selector;
    this.done = opts.done;
    this.duration = opts.duration || 2000;
  }

  run() {
    requestAnimationFrame(this._tick.bind(this));
  }

  _tick(currentTime) {
    if(!this.timeStart) this.timeStart = currentTime;

    this.timeElapsed = currentTime - this.timeStart;
    this.next = this._ease(this.timeElapsed, this.start, this.end - this.start, this.duration);
    this.selector.textContent = Math.round(this.next);

    if (this.next < this.end)
      return requestAnimationFrame(this._tick.bind(this));

    return this.done();
  }

  _ease(t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
  }
}

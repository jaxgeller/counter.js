export default class Counter {

  constructor(opts) {
    this.start = 0;
    this.end = 10;

    this.duration = 2000;

    this.selector = opts.selector;
  }

  tick(currentTime) {
    if(!this.timeStart) this.timeStart = currentTime;
    this.timeElapsed = currentTime - this.timeStart;

    this.next = this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration);
    this.next = Math.round(this.next);

    this.selector.textContent = this.next;

    if (this.next < this.end)
      requestAnimationFrame((time)=> this.tick(time))
  }

  run() {
    requestAnimationFrame(this.tick.bind(this));
  }

  // t: current time, b: begInnIng value, c: change In value, d: duration
  ease(t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
  }
}

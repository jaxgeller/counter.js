export default class Counter {

  constructor(opts) {
    let from = opts.from;
    let to = opts.to;
    this.duration = opts.duration;

    this.refresh = 100;
    this.selector = opts.selector;
    this.current = from;
    this.tickIncrement = (to - from) / (this.duration/this.refresh);
    this.done = opts.done;
    this.max = opts.to
    console.log(`From ${from} to ${to} in ${this.duration}s with a refresh of ${this.refresh} and inc rate ${this.tickIncrement}`)

  }

  tick() {
    this.current += this.tickIncrement;
    this.selector.textContent = Math.round(this.current);

    console.log(this.current)


    if (this.current < this.max)
      return setTimeout(this.tick.bind(this), this.refresh);

    return this.done();
  }

  run() { this.tick(); }
}

# Counter.js
Counter.js is a slim (less than 1kb gzipped), performant, ES6 module, that counts numbers. It uses RAF and easing functions to provide a buttery-smooth, 60-fps counter.

You can check out the [demo here.](https://jaxgeller.com/projects/counter.js/)

### Install

`npm install counter.js` or include `dist.min.js` above.

### Example

```javascript
// if you’re not using a module bundler, include dist.min.js instead
import Counter from "counter.js";

// set your desired options
const opts = {
  start: 0,
  end: 100,
  selector: document.getElementById('count'),
  done: () => {
    // callback...
  }
};

// create an instance
const instance = new Counter(opts);

// run the counter
const button = document.querySelector('button');
Array.prototype.slice.call(button).addEventListener('click', instance.run);
```

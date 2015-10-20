# Counter.js
Counter.js is a slim (less than 1kb gzipped), performant, es6 module, that counts numbers. It uses RAF and easing functions to provide a buttery-smooth, 60-fps counter.

You can check out the [demo here](https://jaxgeller.com/projects/counter.js/)



### Install

`npm install counter.js`

### Use

```javascript
import Counter from "counter.js";
// or if no es6, include dist.min.js

const opts = {
  start: 0,
  end: 98765,
  selector: document.getElementById('count'),
  done: function() {
    console.log('fired when done');
  }
}

const c = new Counter(opts);

document.querySelector('.button').onclick = c.run();
```

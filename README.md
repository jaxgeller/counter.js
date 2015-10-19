# Counter.js
An animated counter

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

let c = new Counter(opts);

document.querySelector('.button').onclick = c.run();
```

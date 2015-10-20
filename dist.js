(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Counter = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Counter = (function () {
  function Counter(opts) {
    _classCallCheck(this, Counter);

    this.start = opts.start;
    this.end = opts.end;
    this.selector = opts.selector;
    this.done = opts.done;
    this.duration = opts.duration || 2000;
  }

  _createClass(Counter, [{
    key: "run",
    value: function run() {
      if (parseInt(this.selector.textContent) !== this.end) {
        requestAnimationFrame(this._tick.bind(this));
      }
    }
  }, {
    key: "_tick",
    value: function _tick(currentTime) {
      var self = this; // uglify doesnt like to minify this

      if (!self.timeStart) self.timeStart = currentTime;

      self.timeElapsed = currentTime - self.timeStart;

      var next = self._ease(self.timeElapsed, self.start, self.end - self.start, self.duration);

      self.selector.textContent = Math.round(next);

      if (this.end < this.start) {
        if (next > self.end) return requestAnimationFrame(self._tick.bind(self));
      } else {
        if (next < self.end) return requestAnimationFrame(self._tick.bind(self));
      }

      return self.done();
    }
  }, {
    key: "_ease",
    value: function _ease(t, b, c, d) {
      return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
    }
  }]);

  return Counter;
})();

exports["default"] = Counter;
module.exports = exports["default"];

},{}]},{},[1])(1)
});
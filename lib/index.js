"use strict";

var zeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
function asWord(n) {
  var zero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zero';
  if (n === 0) return zero;else if (n > 0 && n <= 9 && Number.isInteger(n)) return zeroToNine[n];else return n.toString();
}
module.exports.asWord = asWord;
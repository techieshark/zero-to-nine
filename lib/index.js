'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var zeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

/** Turns input number `n` into a word, if possible.
 * Roughly APA style: integers 0 - 9 become 'zero' - 'nine'. Floats
 * and anything bigger or smaller, are returned as is (not expressed as words).
 * @param {number} n the number to convert
 */
function numToText(n) {
  return n >= 0 && n <= 9 && Number.isInteger(n) ? zeroToNine[n] : n.toString();
}

exports.numToText = numToText;
const zeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

/** Turns input number `n` into a word, if possible.
 * Roughly APA style: integers 0 to 9 become 'zero' to 'nine'. Floats
 * and anything bigger or smaller are returned as is (not expressed as words).
 * Word for `zero` can be customized - you could use "no", "zilch", "nada" or anything else.
 * @param {number} n the number to convert
 * @param {string} [zero="zero"] Alternative word for "zero".
 */
function asWord(n, zero = 'zero') {
  if (n === 0) return zero;else if (n > 0 && n <= 9 && Number.isInteger(n)) return zeroToNine[n];else return n.toString();
}

module.exports.asWord = asWord;
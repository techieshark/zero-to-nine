//@flow

const zeroToNine = [
  'zero', 'one', 'two', 'three', 'four', 'five',
  'six', 'seven', 'eight', 'nine'
];

/** Turns input number `n` into a word, if possible.
 * Roughly APA style: integers 0 to 9 become 'zero' to 'nine'. Floats
 * and anything bigger or smaller, are returned as is (not expressed as words).
 * Word for `zero` can be customized - you could use "no", "zilch", "nada" or whatever you want.
 * @param {number} n the number to convert
 * @param {string} [zero="zero"] Use this string in place of the default of "zero".
 */
function numToText(n: number, zero: string = 'zero'): string {
  if (n === 0)
    return zero;
  else if (n > 0 && n <= 9 && Number.isInteger(n))
    return zeroToNine[n];
  else
    return (n).toString();
}

export {numToText};
# zero-to-nine: 0-9, as words

Converts numbers 0 to 9 to words (that's roughly
[APA style][1] if you want to get specific). Other numbers returned unchanged.

"AP (p. 203):
Spell out whole numbers up to (and including) nine (e.g., zero, one, 10, 96, 104)." [1]

[1]: http://www.dlaeditors.com/blog/numbers-ap-chicago-style-guides/

It does have an option to return "no" instead of "zero", but otherwise yeah, it's stupid simple.

Need to count to sixteen? See [num-to-word](https://www.npmjs.com/package/num-to-word).
Need to count to a billion or even a centillion? See [num2word](https://www.npmjs.com/package/num2word).

## Install

```
npm install --save zero-to-nine
# or
npm install --save git://github.com/techieshark/zero-to-nine.git#dist
```

## Example Usage

```
var asWord = require('zero-to-nine').asWord

asWord(0)
// "zero"

asWord(13)
// "13"
```

## More examples

You can use "no" (or something else) instead of "zero" if you want:

```
let count = 0
console.log(`There were ${asWord(count, 'no')} desert big horn sheep left after they built the wall.`)
// "There were no desert big horn sheep left after they built the wall."
```


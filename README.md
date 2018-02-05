# zero-to-nine: tiny node JS module for numbers 0-9

Converts numbers 0 to 9 to words (that's roughly
[APA style][1] if you want to get specific).

"AP (p. 203):
Spell out whole numbers up to (and including) nine (e.g., zero, one, 10, 96, 104)." [1]

[1]: http://www.dlaeditors.com/blog/numbers-ap-chicago-style-guides/

Yeah, it's stupid simple.

## Install

```
npm install --save
```

## Example Usage

```
import {numToText} from 'zero-to-nine';

let randomInteger = Math.floor(Math.random() * 100);
console.log(`I only have ${numToText(randomInteger)} cents; it's not a dollar.`);
// output ex. 1: "I only have seven cents; it's not a dollar."
// output ex. 2: "I only have 10 cents; it's not a dollar."
```


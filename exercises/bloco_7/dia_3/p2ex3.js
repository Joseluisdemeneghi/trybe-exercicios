const assert = require('assert');
const sumAllNumbers = array => {
  let output = 0;
  for (const key in array) {
    output += array[key];
  }
  return output
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
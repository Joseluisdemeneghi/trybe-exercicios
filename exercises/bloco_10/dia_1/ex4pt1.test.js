// const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
describe('myFizzBuzz being tested', () => {

  it('returns fizzbuzz when receives a number divisible for 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('returns fizz when receives a number divisible for 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('returns buzz when receives a number divisible for 5', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  it('returns the number when the number is not divisible for 3 and 5', () => {
    expect(myFizzBuzz(37)).toBe(37);
  });

  it('return false when the parameter is not a number', () => {
    expect(myFizzBuzz('45')).toBe(false);
  });
});
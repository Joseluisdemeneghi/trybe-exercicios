// const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
describe('myRemoveWithoutCopy being tested', () => {

  it('returns the expected array when receives myRemoveWithoutCopy([1, 2, 3, 4], 3)', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('does not return [1, 2, 3, 4] when receives ([1, 2, 3, 4], 3) as parameters', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('confirms that the returned array has suffered alterations', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 2)).toHaveLength(3);
  });

  it('returns the expected array when receives ([1, 2, 3, 4], 5)', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
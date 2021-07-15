const data = require('./ex1');

test('function getNumber', () => {
  data.getNumber = jest.fn().mockReturnValue(10);

  expect(data.getNumber()).toBe(10);
  expect(data.getNumber).toHaveBeenCalled();
  expect(data.getNumber).toHaveBeenCalledTimes(1);
});
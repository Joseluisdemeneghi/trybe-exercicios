const data = require('./ex1');

test('function getNumber', () => {
  data.getNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(data.getNumber(20, 2)).toBe(10);
  expect(data.getNumber).toHaveBeenCalled();
  expect(data.getNumber).toHaveBeenCalledTimes(1);
  expect(data.getNumber).toHaveBeenCalledWith(20, 2);
});
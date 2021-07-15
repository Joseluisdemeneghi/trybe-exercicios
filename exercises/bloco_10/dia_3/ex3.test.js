const data = require("./ex1");

describe('testing implementations on getNumber', () => {
  it('implements a new function that multiplicates 3 numbers', () => {
    data.getNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(data.getNumber(2, 2, 3)).toBe(12);
    expect(data.getNumber).toHaveBeenCalled();
    expect(data.getNumber).toHaveBeenCalledTimes(1);
    expect(data.getNumber).toHaveBeenCalledWith(2, 2, 3);
  });

  it('reset and change the mock, now returning a number * 2', () => {
    data.getNumber.mockReset();
    data.getNumber = jest.fn().mockImplementation(a => a * 2);

    expect(data.getNumber(7)).toBe(14);
    expect(data.getNumber).toHaveBeenCalled();
    expect(data.getNumber).toHaveBeenCalledTimes(1);
    expect(data.getNumber).toHaveBeenCalledWith(7);
  });
});

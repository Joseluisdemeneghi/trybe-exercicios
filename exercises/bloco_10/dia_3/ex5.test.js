const data = require('./ex4');

describe('testing implentations on getUpper', () => {

  it('should change getUpper to return in lowercase', () => {
    const upperLower = jest.spyOn(data, 'getUpper')
    .mockImplementation(str => str.toLowerCase());

    expect(upperLower('HAPPY')).toBe('happy');
    expect(upperLower).toHaveBeenCalled();
    expect(upperLower).toHaveBeenCalledTimes(1);
    expect(upperLower).toHaveBeenCalledWith('HAPPY');

    data.getUpper.mockRestore();

    expect(data.getUpper('happy')).toBe('HAPPY');
  });
});
const data = require('./ex4');
jest.mock('./ex4');

describe('Testing implementations in all functions', () => {

  it('should change getUpper to return all in lowercase', () => {
    data.getUpper.mockImplementation(str => str.toLowerCase());

    expect(data.getUpper('HAPPY')).toBe('happy');
    expect(data.getUpper).toHaveBeenCalled();
    expect(data.getUpper).toHaveBeenCalledTimes(1);
    expect(data.getUpper).toHaveBeenCalledWith('HAPPY');
  })

  it('should change getFirst to return the last letter', () => {
    data.getFirst.mockImplementation(str => str[str.length - 1]);

    expect(data.getFirst('last')).toBe('t');
    expect(data.getFirst).toHaveBeenCalled();
    expect(data.getFirst).toHaveBeenCalledTimes(1);
    expect(data.getFirst).toHaveBeenCalledWith('last');
  });

  it('should change getConc to have 3 parameters', () => {
    data.getConc.mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

    expect(data.getConc('last', 'day', 'here')).toBe('lastdayhere');
    expect(data.getConc).toHaveBeenCalled();
    expect(data.getConc).toHaveBeenCalledTimes(1);
    expect(data.getConc).toHaveBeenCalledWith('last', 'day', 'here');
  });
})

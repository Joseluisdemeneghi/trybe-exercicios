const data = require('./ex6');

describe('testing the requisition', () => {
  data.fetchDogPic = jest.fn();
  afterEach(data.fetchDogPic.mockReset);

  it('should returns the resolved promise', async () => {
    data.fetchDogPic.mockResolvedValue('request sucess');

    data.fetchDogPic();
    expect(data.fetchDogPic).toHaveBeenCalled();
    expect(data.fetchDogPic).toHaveBeenCalledTimes(1);
    expect(data.fetchDogPic()).resolves.toBe('request sucess');
    expect(data.fetchDogPic).toHaveBeenCalledTimes(2);
  });

  it('should returns the rejected promise', async () => {
    data.fetchDogPic.mockRejectedValue('request failed');

    expect(data.fetchDogPic).toHaveBeenCalledTimes(0);
    expect(data.fetchDogPic()).rejects.toMatch('request failed');
    expect(data.fetchDogPic).toHaveBeenCalledTimes(1);
  });
});
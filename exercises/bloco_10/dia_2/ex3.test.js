const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  describe('testing the function getUserName', () => {

    it('should return Mark when search the id 4', async () => {
      expect.assertions(1);
      const info = await getUserName(4);
      expect(info).toBe('Mark');
    });

    it('should return error when search the id 6', async () => {
      expect.assertions(1)
      try {
        await getUserName(6)
      } catch (error) {
        expect(error).toEqual({ error: 'User with 6 not found.' });
      }
    });
  });
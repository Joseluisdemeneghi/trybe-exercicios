// const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
describe('Comparing the objects 1, 2 and 3', () => {

  it('shows that obj1 and obj2 are equal', () => {
    expect(obj1).toEqual(obj2);
  });

  it('shows that obj1 and obj3 are not equal', () => {
    expect(obj1).not.toEqual(obj3);
  });

  it('shows that obj2 and obj3 are not equal', () => {
    expect(obj2).not.toEqual(obj3);
  });
});
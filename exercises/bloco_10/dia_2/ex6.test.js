const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalFind = Animals.find((animal) => animal.name === name);
      if (animalFind) {
        return resolve(animalFind);
      };

      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name).then(animal => animal);
};

const findAnimalByAge = (age) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalsFind = Animals.filter((animal) => animal.age === age);
      if (animalsFind.length !== 0) {
        return resolve(animalsFind);
      };

      return reject('Nenhum animal com essa idade!');
    }, 100);
  })
);

const getAnimalByAge = (age) => {
  // Adicione o código aqui.
  return findAnimalByAge(age).then(animal => animal);
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testing the function findAnimalByAge', () => {

  it('should return the animal that the function finds', () => {
    expect.assertions(1);
    return expect(getAnimalByAge(1)).resolves
    .toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
  });

  it('should return error with an wrong age', () => {
    expect.assertions(1);
      return expect(getAnimalByAge(9)).rejects
      .toEqual('Nenhum animal com essa idade!');
  });
});
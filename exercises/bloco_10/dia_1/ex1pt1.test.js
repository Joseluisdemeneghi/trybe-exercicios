// const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
test('retorno da soma de 4 e 5 é igual a 9', () => {
  expect(sum(4, 5)).toBe(9);
});

test('retorno da soma de 0 e 0 é igual a 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('Erro ao lançar uma string como parâmetro', () => {
  expect(() => { sum(4, '5') }).toThrow();
});

test('a mensagem de erro é "parameters must be numbers"', () => {
  expect(() => { sum(4, '5') }).toThrow(/parameters must be numbers/);
});
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, nome) => acc + nome.split('').reduce((acc2, current) => {
    if (current === 'a' || current === 'A') return acc2 + 1;
    return acc2;
  }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);
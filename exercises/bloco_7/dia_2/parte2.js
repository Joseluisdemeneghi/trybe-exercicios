const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKey = (objeto, key, valor) => {
  objeto[key] = valor;
};

addKey(lesson2, 'turno', 'manhã');
console.log(lesson2);

const listKeys = objeto => Object.keys(objeto);
console.log(listKeys(lesson1));

const objectLength = objeto => Object.keys(objeto).length;
console.log(objectLength(lesson1));

const listValues = objeto => Object.values(objeto);
console.log(listValues(lesson1));

const allLessons = Object.assign({},{ lesson1, lesson2, lesson3 });
console.log(allLessons);
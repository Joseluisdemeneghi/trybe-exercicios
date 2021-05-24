function repeat(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexRepeat = 0;
  for (let index in numeros) {
    let verNumero = numeros[index];
    for (let index2 in numeros) {
      if (verNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexRepeat = index;
    }
    contNumero = 0;
  }
  return numeros[indexRepeat];
}
console.log (repeat([2, 3, 2, 5, 8, 2, 3]));
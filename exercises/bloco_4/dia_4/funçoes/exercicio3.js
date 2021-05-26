function menorValor(numeros) {
  let inicial = 0;
  for (let index in numeros) {
    if (numeros[inicial] > numeros[index]) {
      inicial = index;
    }
  }
  return inicial;
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));
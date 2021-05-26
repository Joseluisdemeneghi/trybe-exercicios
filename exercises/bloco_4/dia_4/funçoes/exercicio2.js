function maiorValor(numeros) {
  let inicial = 0;
  for (let index in numeros) {
    if (numeros[inicial] < numeros[index]) {
      inicial = index;
    }
  }
  return inicial;
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));
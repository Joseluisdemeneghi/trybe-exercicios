function soma (numero) {
  let valorFinal = 0;
  for (let index = 1; index <= numero; index += 1) {
    valorFinal = valorFinal + index;
  }
  return valorFinal;
}
console.log(soma(7));
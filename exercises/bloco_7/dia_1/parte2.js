const fatorial = numero => {
  let resultado = 1

  for (let index = 2; index <= numero; index += 1) {
      resultado *= index
  }

  return resultado
}

console.log(fatorial(3))

const maiorPalavra = frase => {
  let separadas = frase.split(' ');
  let maior = 0;
  let resultado = '';

  for (const key of separadas) {
    if (key.length > maior) {
      maior = key.length;
      resultado = key;
    }
  }

  return resultado
}

console.log(maiorPalavra('Antonio foi no banheiro e não sabemos o que aconteceu'));

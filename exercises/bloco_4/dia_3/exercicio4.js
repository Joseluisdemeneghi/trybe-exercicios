let base = 5;
let aster = '*';
let linha = '';
let meio = (base + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let index = 0; index <= meio; index += 1) {
  for (let indexColuna = 0; indexColuna <= base; indexColuna += 1) {
    if (indexColuna > esquerda && indexColuna < direita) {
      linha = linha + aster;
    } else {
      linha = linha + ' ';
    }
  }
  console.log (linha);
  linha = '';
  esquerda -= 1;
  direita += 1;
}
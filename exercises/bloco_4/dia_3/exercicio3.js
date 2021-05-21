let base = 5;
let aster = '*';
let linha = '';
let coluna = base;

for (let index = 0; index < base; index += 1) {
  for (let indexColuna = 0; indexColuna <= base; indexColuna += 1) {
    if (indexColuna < coluna) {
      linha = linha + ' ';
    } else {
      linha = linha + aster;
    }
  }
  console.log (linha);
  linha = '';
  coluna -= 1;
}
let n = 5;
let aster = '*';
let linha = '';
let espaco = n;

for (let index = 0; index < n; index += 1) {
  for (let indexHor = 0; indexHor <= n; indexHor += 1) {
    if (indexHor < espaco) {
      linha = linha + ' ';
    } else {
      linha = linha + aster;
    }
  }
  console.log (linha);
  linha = '';
  espaco -= 1;
}
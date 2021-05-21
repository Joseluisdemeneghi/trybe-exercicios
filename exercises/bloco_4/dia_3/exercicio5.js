let base = 7;
let meio = (base + 1) / 2;
let esquerda = meio;
let direita = meio;
let aster = '*';
for (let index = 1; index <= meio; index += 1) {
  let linha = '';
  for (let col = 1; col <= base; col += 1) {
    if (col == esquerda || col == direita || index == meio) {
      linha += aster;
    } else {
      linha += ' ';
    }
  }
  esquerda -= 1;
  direita += 1;
  console.log(linha);
}
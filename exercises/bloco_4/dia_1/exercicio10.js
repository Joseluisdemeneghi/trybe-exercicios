let custo = 10;
let venda = 22;
let custoTotal = custo + (custo * 0,2);
let lucro = venda - custoTotal;
let positivo = custo >= 0 && venda >= 0;

if (positivo) {
  console.log (1000 * lucro);
}
else {
  console.log ('Erro, o programa será encerrado!');
}
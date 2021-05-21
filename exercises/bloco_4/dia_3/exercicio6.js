let divisor = 1;
let numero = 17;

for (let index = 2; index <= numero; index += 1) {
  if (numero % index === 0) {
    divisor += 1;
  }
}

if (divisor === 2) {
  console.log(numero + ' é primo');
}
else {
  console.log(numero + ' não é primo');
}
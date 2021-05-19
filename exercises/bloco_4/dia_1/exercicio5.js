let ang1 = 45;
let ang2 = 60;
let ang3 = 75;

let soma = ang1 + ang2 + ang3;
let validos = ang1 > 0 && ang2 > 2 && ang3 > 0;

if (validos) {
  if (soma === 180) {
    console.log (true);
  }
  else {
    console.log (false);
  }
} else {
  console.log ('Erro, angulo inválido')
} 
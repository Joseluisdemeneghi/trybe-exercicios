let piece = 'Peao';

switch (piece.toLowerCase()) {
  case 'rei':
    console.log ('O rei anda uma casa em qualquer direção.');
    break;
  case 'rainha':
    console.log ('A rainha anda quantas casas quiser em qualquer direção.');
    break;
  case 'bispo':
    console.log ('O bispo anda em diagonal, quantas casas quiser.');
    break;
  case 'cavalo':
    console.log ('O cavalo anda em L.');
    break;
  case 'torre':
    console.log ('A torre anda em linha reta por quantas casas quiser.');
    break;
  case 'peao':
    console.log ('anda uma casa pra frente, pode andar duas no primeiro movimento');
    break;
  default:
    console.log ('Erro, esta não é uma peça de xadrez.');
    break;
};
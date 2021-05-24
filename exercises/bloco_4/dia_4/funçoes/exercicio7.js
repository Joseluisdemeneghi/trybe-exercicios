function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  resposta = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      resposta = false;
    }
  }
  return resposta;
}
console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));
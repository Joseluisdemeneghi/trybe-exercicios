function verificaPalindrome(string) {
  let palavra = string.split('');
  let palindromo = true;
  for (let index in palavra) {
    if (palavra[index] != string[(string.length - 1) - index]) {
      palindromo = false;
    }
  }
  return palindromo;
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));
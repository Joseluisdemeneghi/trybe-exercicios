const check = (meuNum, number) => meuNum === number;

const loteria = (meuNum, callback) => {
  const number = Math.floor((Math.random() *5) + 1);

  return callback(meuNum,number) ? 'Lucky day, you won!' : 'Try Again';
};

console.log(loteria(4, check));
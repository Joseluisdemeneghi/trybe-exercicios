const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (right_Answers, student_Answers, total) => {
  let cont = 0;
  for (let index = 0; index < right_Answers.length; index += 1) {
    const totalCalc = total(right_Answers[index], student_Answers[index]);
    cont += totalCalc;
  }
  return `Foram ${cont} certas`;
};

console.log(check(rightAnswers, studentAnswers, (rAns, sAns) => {
  if (rAns === sAns) return 1;
  if (sAns === 'N.A') return 0;
  return -0.5;
}));
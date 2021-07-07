const newPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const randomArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = randomArray.map((num) => num * num)
      .reduce((acc, curr) => acc + curr, 0);

    (sum < 8000) ? resolve(sum) : reject();
  });

  promise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .then(result => result.reduce((acc, curr) => acc + curr), 0)
    .then(value => console.log(value))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

newPromise();
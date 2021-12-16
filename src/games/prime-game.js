export const primeGame = () => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const question = Math.floor(Math.random() * 100);
  const answer = isPrime(question);

  return {
    question,
    answer,
    rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  };
};

export default primeGame;

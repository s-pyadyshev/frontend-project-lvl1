export const gcdGame = () => {
  const calcGcd = (a, b) => {
    if (!b) {
      return a;
    }

    return calcGcd(b, a % b);
  };

  const firstNum = Math.floor(Math.random() * 100);
  const secondNum = Math.floor(Math.random() * 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = calcGcd(firstNum, secondNum).toString();

  return {
    question,
    answer,
    rules: 'Find the greatest common divisor of given numbers.',
  };
};

export default gcdGame;

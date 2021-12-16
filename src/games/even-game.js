export const evenGame = () => {
  const isEven = (number) => number % 2 === 0;

  const question = Math.floor(Math.random() * 100);
  const answer = isEven(question);

  return {
    question,
    answer,
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  };
};

export default evenGame;

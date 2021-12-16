export const evenGame = () => {
  const isEven = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const question = Math.floor(Math.random() * 100);
  const answer = isEven(question);

  return {
    question,
    answer,
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  };
};

export default evenGame;

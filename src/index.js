import readlineSync from 'readline-sync';

export const gameEngine = (gameData, rules) => {
  const userName = readlineSync.question('May I have your name? ');

  const text = {
    welcome: 'Welcome to the Brain Games!',
    correctAnswer: 'Correct!',
    lost: `Let's try again, ${userName}!`,
    win: `Congratulations, ${userName}!`,
  };

  // settings
  const questionsAmount = 3;

  // start game
  console.log(text.welcome);
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const generateGameScheme = (steps) => {
    const scheme = [];
    for (let i = 0; i < steps; i += 1) {
      const { question, answer } = gameData();
      scheme.push({ question, answer });
    }
    return scheme;
  };

  const gameScheme = generateGameScheme(questionsAmount);
  console.log(gameScheme);

  gameScheme.forEach((item, index) => {
    const schemeLength = gameScheme.length;
    const answer = readlineSync.question(`Question: ${item.question} `);

    if (
      answer === item.answer
      || (answer === 'yes' && item.answer === true)
      || (answer === 'no' && item.answer === false)
    ) {
      console.log(text.correctAnswer);

      if (index + 1 === schemeLength) return console.log(text.win);
    } else {
      console.log(text.lost);
      process.exit();
    }
    return null;
  });
};

export default gameEngine;

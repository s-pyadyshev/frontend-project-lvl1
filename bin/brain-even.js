#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (number) => (number % 2 === 0 ?? true);

export const brainEven = () => {
  const welcomeText = 'Welcome to the Brain Games!';
  const gameRulestext = 'Answer "yes" if the number is even, otherwise answer "no".';
  const correctAnswerText = 'Correct!';

  // settings
  const questionsAmount = 3;

  // start game
  console.log(welcomeText);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRulestext);
  const gameOverText = `Let's try again, ${userName}!`;
  const gameWinText = `Congratulations, ${userName}!`;

  function convertAnswerToBoolean(text) {
    if (text === 'yes') {
      return true;
    }

    if (text === 'no') {
      return false;
    }

    console.log(gameOverText);
    return process.exit();
  }

  const generateGameScheme = (steps) => {
    const scheme = [];
    for (let i = 0; i < steps; i += 1) {
      const step = {};
      const number = Math.floor(Math.random() * 100);
      step.number = number;
      step.isEven = isEven(number) ?? true;
      scheme.push(step);
    }
    return scheme;
  };

  const gameScheme = generateGameScheme(questionsAmount);

  gameScheme.forEach((item, index) => {
    const schemeLength = gameScheme.length;
    const question = readlineSync.question(`Question: ${item.number} `);

    if (convertAnswerToBoolean(question) === item.isEven) {
      console.log(correctAnswerText);

      if (index + 1 === schemeLength) return console.log(gameWinText);
    } else {
      console.log(gameOverText);
      process.exit();
    }
    return null;
  });
};

export default brainEven;

brainEven();

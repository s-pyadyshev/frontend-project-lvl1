import readlineSync from "readline-sync";

export const gameEngine = (gameData, rules) => {
  const userName = readlineSync.question("May I have your name? ");

  const text = {
    welcome: "Welcome to the Brain Games!",
    correctAnswer: "Correct!",
    lost: `Let's try again, ${userName}!`,
    win: `Congratulations, ${userName}!`,
  };

  function convertAnswerToBoolean(question) {
    if (question === "yes") {
      return true;
    }

    if (question === "no") {
      return false;
    }

    console.log(text.lost);
    return process.exit();
  }

  // settings
  const questionsAmount = 3;

  // start game
  console.log(text.welcome);
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const generateGameScheme = (steps) => {
    const scheme = [];
    for (let i = 0; i < steps; i += 1) {
      const gameItem = gameData();
      const question = gameItem.question;
      const answer = gameItem.answer;
      scheme.push({ question, answer });
    }
    return scheme;
  };

  const gameScheme = generateGameScheme(questionsAmount);

  gameScheme.forEach((item, index) => {
    const schemeLength = gameScheme.length;
    const answer = readlineSync.question(`Question: ${item.question} `);

    if (convertAnswerToBoolean(answer) === item.answer) {
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

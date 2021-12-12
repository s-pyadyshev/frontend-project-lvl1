import readlineSync from 'readline-sync';

export const askUsername = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default askUsername;

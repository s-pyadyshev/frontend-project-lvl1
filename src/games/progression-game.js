export const progressionGame = () => {
  let answer;

  const generateProgression = () => {
    const start = Math.floor(Math.random() * 1000);
    const step = Math.floor(Math.random() * 100);
    const hiddenIndex = Math.floor(Math.random() * 10);
    const length = 10;
    let progressionInc = start;
    const progression = [start];

    for (let i = 1; i < length; i += 1) {
      progressionInc += step;
      progression.push(progressionInc);
    }
    answer = progression[hiddenIndex].toString();
    progression[hiddenIndex] = '..';
    return progression.join(' ');
  };

  const question = generateProgression();

  return {
    question,
    answer,
    rules: 'What number is missing in the progression?',
  };
};

export default progressionGame;

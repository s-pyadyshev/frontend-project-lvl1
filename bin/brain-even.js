#!/usr/bin/env node
import { gameEngine } from "../src/index.js";

export const brainEven = () => {
  // function to check if answer is correct
  const isEven = (number) => number % 2 === 0;

  const question = Math.floor(Math.random() * 100);
  const answer = isEven(question);

  return {
    question,
    answer,
  };
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

gameEngine(brainEven, rules);

export default brainEven;

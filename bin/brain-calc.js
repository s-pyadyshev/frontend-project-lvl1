#!/usr/bin/env node
import { gameEngine } from '../src/index.js';

export const brainCalc = () => {
  const calculate = (leftNum, rightNum, operation) => {
    switch (operation) {
      case '+':
        return leftNum + rightNum;
      case '-':
        return leftNum - rightNum;
      case '*':
        return leftNum * rightNum;
      default:
        return leftNum + rightNum;
    }
  };

  const leftOperand = Math.floor(Math.random() * 100);
  const rightOperand = Math.floor(Math.random() * 100);
  const operations = ['+', '-', '*'];
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  const question = `${leftOperand} ${randomOperation} ${rightOperand}`;
  const answer = calculate(leftOperand, rightOperand, randomOperation).toString();

  return {
    question,
    answer,
  };
};

const rules = 'What is the result of the expression?';

gameEngine(brainCalc, rules);

export default brainCalc;

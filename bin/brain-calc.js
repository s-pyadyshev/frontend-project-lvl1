#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import { calcGame } from '../src/games/calc-game.js';

gameEngine(calcGame);

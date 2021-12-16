#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import { progressionGame } from '../src/games/progression-game.js';

gameEngine(progressionGame);

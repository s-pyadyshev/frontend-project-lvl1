#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import { primeGame } from '../src/games/prime-game.js';

gameEngine(primeGame);

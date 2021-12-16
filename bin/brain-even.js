#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import { evenGame } from '../src/games/even-game.js';

gameEngine(evenGame);

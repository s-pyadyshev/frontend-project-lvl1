#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import { gcdGame } from '../src/games/gcd-game.js';

gameEngine(gcdGame);

# Makefile
install: # install dependencies
	npm install

publish: # publish
	npm publish --dry-run

brain-games: # start
	node bin/brain-games.js

lint: # lint
	npx eslint .
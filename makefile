# Makefile
install: # установить зависимости
	npm install

publish: # start
	npm publish --dry-run

brain-games: # start
	node bin/brain-games.js
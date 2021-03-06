function* guessingGame() {
	yield game.say ('Hello! Let\'s play the Guesssing Game!');

	var number = Math.floor(Math.random()*100) + 1;
	var guess = yield game.ask ('Please try to guess the number between 1 and 100.');
	var complete = false;
	
	while (!complete) {
		if (guess>number) {
			var high = yield game.ask('Too high. Try again.');
			guess = high;
		} else if (guess<number) {
			var low = yield game.ask('Too low. Try again.');
			guess = low;
		} else {
			complete=true;
			var win = yield game.choose ('You won! Do you want to play again?', 'Play', 'Quit');
			if (win == 'Play') {
				complete = false;
				var number = Math.floor(Math.random()*100) + 1;
				var guess = yield game.ask ('Please try to guess the number between 1 and 100.');
			} else { 
				yield game.say ('Goodbye!');
			}
		}
	}
}

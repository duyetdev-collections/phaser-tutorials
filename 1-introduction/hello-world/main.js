
// This initialise Phaser
// Parameters: width of the game, height of the game, how to render the game, the name of the div in the html that will contain the game
var game = new Phaser.Game(500, 600, Phaser.AUTO, 'game_div');

// An array to store the different states of our game. A state is a specific scene of a game like a menu, a game over screen, etc.
var game_state = {};

// Let's define our first state. I'll call it 'main' since we only have one.
game_state.main = function(game) { };
game_state.main.prototype = {

	preload: function() {
		// Everything in this function will be executed at the beginning. That’s where we usually load the
		
		// Load a sprite in the game
		// Parameters: name of the image, path to the image
		game.load.image('hello', 'assets/hello.png');
	},

	create: function() { 
		// This function will be called after the preload function. Here we set up the game, display sprites, add labels, etc.

		// Display a sprite on the screen
		// Parameters: x position, y position, name of the sprite
		hello_sprite = game.add.sprite(250, 300, 'hello');
	},
	   
	update: function() {
		// This is where we will spend the most of our time. This function is called 60 times per second to update the game.

		// Increase the angle of the sprite by one
		hello_sprite.angle += 1;
	} 
}

// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', game_state.main);
game.state.start('main');

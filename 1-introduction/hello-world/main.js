
// This initialise Phaser
// Parameters: width of the game, height of the game, how to render the game, the name of the div in the html that will contain the game
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game_div');

// An array to store the different states of our game (play, menu, credits, etc.)
var game_state = {};

// Let's define our first state: play
game_state.play = function(game) { };
game_state.play.prototype = {

	preload: function() {
		// Everything in this function will be executed at the beginning. That’s where we usually load the game’s assets (images, sounds, etc.)

		// Load a sprite in the game
		// Parameters: name of the image, path to the image
		game.load.image('hello', 'assets/hello.png');
	},

	create: function() { 
		// This function will be called after the preload function. Here we set up the game: place sprites, add labels, etc.

		// Display a sprite on the screen
		// Parameters: x position, y position, name of the sprite
		hello_sprite = game.add.sprite(200, 300, 'hello');
	},
	   
	update: function() {
		// This is where you will spend the most of your time. This function is called 60 times per seconds to update the state of your game.

		// Increase the angle of the sprite by one
		hello_sprite.angle += 1;
	} 
}

// And we tell Phaser to add and start our play state
game.state.add('play', game_state.play);
game.state.start('play');

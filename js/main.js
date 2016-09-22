/**
 * Created by miguel on 17/09/16.
 */
requirejs(["NPC", "Player", "Pokemon"], function (_NPC, _Player, _Pokemon) {
	//This function is called when the scripts are loaded.

	var canvas = document.getElementById('game-screen');
	var ctx = canvas.getContext("2d");

	// criar player
	var player = new Player('Red', 'M');

	// criar prof carvalho e rival
	var bulbasaur = new Pokemon('bulbasaur', 1);
	var squirtle = new Pokemon('squirtle', 1);
	var charmander = new Pokemon('charmander', 1);
	var starters = [bulbasaur, squirtle, charmander];
	var items = ['pokedex'];
	var oak = new NPC('Professor Oak', '', starters, items);
	var rival = new NPC('Blue', '', [], []);

	console.log('Red choose Charmander!');
	console.log('So Blue will choose Squirtle!');
});
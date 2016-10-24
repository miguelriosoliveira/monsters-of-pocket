/**
 * Created by miguel on 17/09/16.
 */

/**
 * Canvas and logger setup
 */
function init() {
	var canvas = document.getElementById('game-screen');
	canvas.setAttribute('width', ((3 / 5) * screen.availWidth).toString());
	canvas.setAttribute('height', ((3 / 5) * screen.availHeight).toString());
	var ctx = canvas.getContext("2d");

	var logger = document.getElementById('left-logger');
	logger.style.width = ((1 / 3) * screen.availWidth).toString() + 'px';
	logger.style.height = screen.availHeight.toString() + 'px';

	// capturando logs do console.log
	redirectLog(logger);
}

function redirectLog(loggerTag) {
	console.log = function (message) {
		// redirect message to the logger
		loggerTag.innerHTML += message + '\n';
		loggerTag.scrollTop = loggerTag.scrollHeight;
	};
}

requirejs(["NPC", "Player", "Pokemon"], function (_NPC, _Player, _Pokemon) {
	init();

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

   //sprite do player na tela
	var img_player = new Image();

	img_player.src = player.sprite;
	img_player.src += 'Player_Back_0.png';

	img_player.onload = function () {
		player.position[0] = canvas.getAttribute('width')/2;
		player.position[1] = canvas.getAttribute('height')/2;
		ctx.drawImage(img_player, player.position[0], player.position[1]);
	};

	//animaçao de andar


	/*
	 arrow keys are only triggered by onkeydown, not onkeypress
	 keycodes are:
	 left = 37
	 up = 38
	 right = 39
	 down = 40
	 */

	//example of how to draw on canvas
	//var img2 = new Image();
	//img2.src = 'img/choose.jpg';
	//var canvas = document.getElementById("game-screen");
	//var ctx = canvas.getContext("2d");
	//img2.onload = function (){
	//	ctx.drawImage(img2, 0, 0);
	//}
});
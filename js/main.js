/**
 * Created by miguel on 17/09/16.
 */

/**
 * Canvas and logger setup
 */
var canvas = document.getElementById('game-screen');
var ctx = canvas.getContext("2d");

function init() {
	canvas.setAttribute('width', ((3 / 5) * screen.availWidth).toString());
	canvas.setAttribute('height', ((3 / 5) * screen.availHeight).toString());

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

requirejs(["Animations", "NPC", "Player", "Pokemon"], function (_Animations, _NPC, _Player, _Pokemon) {
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

	img_player = player.sprite; //player.sprite is an image type
	//img_player.src += 'Player_Back_0.png';  como estamos utilizando uma spritesheet essa linha n serve mais

	img_player.onload = function () {
		player.position = new Position(canvas.getAttribute('width') / 2, canvas.getAttribute('height') / 2);
		ctx.drawImage(img_player, player.position.x, player.position.y);
	};

	//animaçao de andar
	//var animation = new Animations();
	function keyDown(evt) {
		var delta = 10;
		switch (evt.keyCode) {
			case 38:  /* Up arrow was pressed */
				//animation.up(player);
				player.moveUp(delta, 0);
				if ((player.sprite_ID < 0)||(player.sprite_ID > 2)){
					player.sprite_ID = 0;
					player.cropX = 2;
					player.cropY = 2;
				}
				switch (player.sprite_ID){
					case 0:
						player.cropX += 12;
						player.sprite_ID += 1;
						break;
					case 1:
						player.cropX += 12;
						player.sprite_ID += 1;
						break;
					case 2:
						player.cropX -= 12;
						player.sprite_ID -= 1;
						break;
				}
				break;
			case 39:  /* Right arrow was pressed */
				player.moveRight(delta, canvas.getAttribute('width'));
				if ((player.sprite_ID < 30)||(player.sprite_ID > 32)){
					player.sprite_ID = 30;
					player.cropX = 2;
					player.cropY = 48;
				}
				switch (player.sprite_ID){
					case 30:
						player.cropX += 12;
						player.sprite_ID += 1;
						break;
					case 31:
						player.cropX += 12;
						player.sprite_ID += 1;
						break;
					case 32:
						player.cropX -= 12;
						player.sprite_ID -= 1;
						break;
				}
				break;
			case 40:  /* Down arrow was pressed */
				player.moveDown(delta, canvas.getAttribute('height'));
				if ((player.sprite_ID < 10)||(player.sprite_ID > 12)){
					player.sprite_ID = 10;
					player.cropX = 2;
					player.cropY = 16;
				}
				switch (player.sprite_ID){
					case 10:
						player.cropX += 12;
						player.sprite_ID += 1;
						break;
					case 11:
						player.cropX += 12;
						player.sprite_ID += 1;
						break;
					case 12:
						player.cropX -= 12;
						player.sprite_ID -= 1;
						break;
				}
				break;
			case 37:  /* Left arrow was pressed */
				player.moveLeft(delta, 0);
				if ((player.sprite_ID < 20)||(player.sprite_ID > 22)){
					player.sprite_ID = 20;
					player.cropX = 2;
					player.cropY = 32;
				}
				switch (player.sprite_ID){
					case 20:
						player.cropX += 12;
						player.sprite_ID += 1;
						break;
					case 21:
						player.cropX += 12;
						player.sprite_ID += 1;
						break;
					case 22:
						player.cropX -= 12;
						player.sprite_ID -= 1;
						break;
				}
				break;
		}
	}

	function clear() {
		ctx.clearRect(0, 0, Number(canvas.getAttribute('width')), Number(canvas.getAttribute('height')));
	}

	function draw() {
		clear();
		ctx.fillStyle = "white";
		ctx.strokeStyle = "black";
		// rect(0, 0, canvas.getAttribute('width'), canvas.getAttribute('height'));
		ctx.fillStyle = "purple";
		// circle(x, y, 10);
		ctx.drawImage(img_player, player.cropX, player.cropY, player.width, player.height, player.position.x, player.position.y, player.width, player.height);
	}

	setInterval(draw, 10);

	init();
	window.addEventListener('keydown', keyDown, true);

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
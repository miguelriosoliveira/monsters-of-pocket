/**
 * Created by miguel on 17/09/16.
 */
requirejs(["NPC", "Player", "Pokemon"], function (_NPC, _Player, _Pokemon) {
    //This function is called when the scripts are loaded.

    // canvas and logger setup
    var canvas = document.getElementById('game-screen');
	canvas.setAttribute('width', ((3 / 5) * screen.availWidth).toString());
	canvas.setAttribute('height', ((3 / 5) * screen.availHeight).toString());
    var ctx = canvas.getContext("2d");
    var logger = document.getElementById('left-logger');
	logger.style.width = ((1 / 3) * screen.availWidth).toString() + 'px';
	logger.style.height = screen.availHeight.toString() + 'px';

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

    var img1 = new Image();
    img1.src = 'img/oak.png';
    var img2 = new Image();
    img2.src = 'img/choose.jpg';

    // ctx.drawImage(img1, 0, 0);
    // ctx.drawImage(img2, 200, 0, 300, 200);
});
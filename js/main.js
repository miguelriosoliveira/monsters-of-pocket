/**
 * Created by miguel on 17/09/16.
 */

/* globals */
var canvas = document.getElementById('game-screen');
var ctx = canvas.getContext("2d");
var logger = document.getElementById('left-logger');

requirejs(["Constants", "NPC", "Player", "Pokemon"], function (Constants, _NPC, _Player, _Pokemon) {

    console.log(Constants);
    // constants of the game
    var constants = new Constants(canvas, logger);

    // the player
    var player = new Player('Red', 'M');

    // criar prof carvalho e rival
    /*var bulbasaur	= new Pokemon('bulbasaur', 1);
     var squirtle	= new Pokemon('squirtle', 1);
     var charmander	= new Pokemon('charmander', 1);
     var starters = [bulbasaur, squirtle, charmander];
     var items = ['pokedex'];
     var oak = new NPC('Professor Oak', '', starters, items);
     var rival = new NPC('Blue', '', [], []);*/

    //sprite do player na tela
    /*var img_player = new Image();

     img_player.src = player.sprite;
     img_player.src += 'Player_Back_0.png';

     img_player.onload = function () {
     player.position = new Position(Constants.SCREEN_WIDTH / 2, Constants.SCREEN_HEIGHT / 2);
     ctx.drawImage(img_player, player.position.x, player.position.y);
     };*/

    /* clear screen */
    function clear() {
        ctx.clearRect(0, 0, constants.SCREEN_WIDTH, constants.SCREEN_HEIGHT);
    }

    /* draw all elements */
    function draw() {
        clear();
        player.draw(ctx);
    }

    /* main loop */
    setInterval(draw, 10);

    /* keyboard listener */
    function keyDown(evt) {
        var delta = 10;
        switch (evt.keyCode) {
            case 38:  /* Up arrow was pressed */
                player.moveUp(delta, 0);
                break;
            case 39:  /* Right arrow was pressed */
                player.moveRight(delta, constants.SCREEN_WIDTH);
                break;
            case 40:  /* Down arrow was pressed */
                player.moveDown(delta, constants.SCREEN_HEIGHT);
                break;
            case 37:  /* Left arrow was pressed */
                player.moveLeft(delta, 0);
                break;
        }
    }

    window.addEventListener('keydown', keyDown, true);
});
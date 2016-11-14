/**
 * Created by miguel on 17/09/16.
 */

/* globals */
var canvas = document.getElementById('game-screen');
var ctx = canvas.getContext("2d");
var logger = document.getElementById('left-logger');

requirejs(["Constants", "NPC", "Player", "Pokemon"], function (Constants, NPC, Player, Pokemon) {

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


    // TODO ainda está bem feio isso, melhorar (talvez criar uma classe menu)
    var menuWidth = (1 / 3) * constants.SCREEN_WIDTH;
    var menuHeight = (1 / 3) * constants.SCREEN_HEIGHT;
    var isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function drawMenu() {
        /* intern line */
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "black";
        ctx.rect(constants.SCREEN_WIDTH - menuWidth + 3, 13, menuWidth - 16, menuHeight - 16);
        ctx.stroke();

        /* middle line */
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "red";
        ctx.rect(constants.SCREEN_WIDTH - menuWidth - 1, 9, menuWidth - 8, menuHeight - 8);
        ctx.stroke();

        /* extern line */
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "black";
        ctx.rect(constants.SCREEN_WIDTH - menuWidth - 5, 5, menuWidth, menuHeight);
        ctx.stroke();

        // ctx.beginPath();
        // ctx.moveTo(20, 10);
        // ctx.lineTo(80, 10);
        // ctx.quadraticCurveTo(90, 10, 90, 20);
        // ctx.lineTo(90, 80);
        // ctx.quadraticCurveTo(90, 90, 80, 90);
        // ctx.lineTo(20, 90);
        // ctx.quadraticCurveTo(10, 90, 10, 80);
        // ctx.lineTo(10, 20);
        // ctx.quadraticCurveTo(10, 10, 20, 10);
        // ctx.stroke();
    }

    /* clear screen */
    function clear() {
        ctx.clearRect(0, 0, constants.SCREEN_WIDTH, constants.SCREEN_HEIGHT);
    }

    /* draw all elements */
    function draw() {
        clear();
        player.draw(ctx);
        if (isMenuOpen) {
            drawMenu();
        }
    }

    /* main loop */
    setInterval(draw, 10);

    /* keyboard listener */
    function keyDown(evt) {
        switch (evt.key) {
            case 'ArrowUp':
            case 'w':
                player.moveUp(constants.STEP_SIZE, 0);
                break;
            case 'ArrowRight':
            case 'd':
                player.moveRight(constants.STEP_SIZE, constants.SCREEN_WIDTH);
                break;
            case 'ArrowDown':
            case 's':
                player.moveDown(constants.STEP_SIZE, constants.SCREEN_HEIGHT);
                break;
            case 'ArrowLeft':
            case 'a':
                player.moveLeft(constants.STEP_SIZE, 0);
                break;
            case 'Enter':
                toggleMenu();
                break;
        }
    }

    window.addEventListener('keydown', keyDown, true);
});
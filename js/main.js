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
    var padding = 20;
    var delta = 10;
    var menuX_left = constants.SCREEN_WIDTH - padding - menuWidth;
    var menuY_up = padding;
    var menuX_right = menuX_left + menuWidth;
    var menuY_down = padding + menuHeight;
    var options = ['pokémon', 'bag', 'player name', 'save', 'option', 'exit'];

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function drawContour() {
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.moveTo(menuX_left + delta, menuY_up);
        ctx.lineTo(menuX_right - delta, menuY_up);
        ctx.quadraticCurveTo(menuX_right, menuY_up, menuX_right, menuY_up + delta);
        ctx.lineTo(menuX_right, menuY_down - delta);
        ctx.quadraticCurveTo(menuX_right, menuY_down, menuX_right - delta, menuY_down);
        ctx.lineTo(menuX_left + delta, menuY_down);
        ctx.quadraticCurveTo(menuX_left, menuY_down, menuX_left, menuY_down - delta);
        ctx.lineTo(menuX_left, menuY_up + delta);
        ctx.quadraticCurveTo(menuX_left, menuY_up, menuX_left + delta, menuY_up);
        ctx.stroke();
    }

    function drawOptions() {
        var fontSize = menuHeight / (options.length + 1);//16;
        var optionNumber = 1;
        options.forEach(function (option) {
            ctx.fillStyle = "gray";
            ctx.font = "bold " + fontSize + "px Arial";
            ctx.fillText(option.toUpperCase(), menuX_left + delta, menuY_up + delta + fontSize * optionNumber);
            optionNumber++;
        });
    }

    function drawMenu() {
        /* intern line */
        // ctx.beginPath();
        // ctx.lineWidth = "2";
        // ctx.strokeStyle = "black";
        // ctx.rect(constants.SCREEN_WIDTH - menuWidth + 3, 13, menuWidth - 16, menuHeight - 16);
        // ctx.stroke();
        //
        // /* middle line */
        // ctx.beginPath();
        // ctx.lineWidth = "6";
        // ctx.strokeStyle = "red";
        // ctx.rect(constants.SCREEN_WIDTH - menuWidth - 1, 9, menuWidth - 8, menuHeight - 8);
        // ctx.stroke();
        //
        // /* extern line */
        // ctx.beginPath();
        // ctx.lineWidth = "2";
        // ctx.strokeStyle = "black";
        // ctx.rect(constants.SCREEN_WIDTH - menuWidth - 5, 5, menuWidth, menuHeight);
        // ctx.stroke();

        /* contour and options */
        drawContour();
        drawOptions();
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
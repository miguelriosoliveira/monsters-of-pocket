/**
 * Created by miguel on 17/09/16.
 */

/* globals */
let canvas = document.getElementById('game-screen');
let ctx = canvas.getContext("2d");
let logger = document.getElementById('left-logger');

/* let's try to keep only the classes we're truly using */
requirejs(["Constants", "Menu", "Player"],
    function (Constants, Menu, Player) {

        let constants = new Constants(canvas, logger);
        let menuOptions = ['pokédex', 'pokémon', 'bag', 'player name', 'save', 'option', 'exit'];
        let menu = new Menu(menuOptions, constants.SCREEN_WIDTH, constants.SCREEN_HEIGHT);
        let player = new Player('Red', 'M');

    /* clear screen */
    function clear() {
        ctx.clearRect(0, 0, constants.SCREEN_WIDTH, constants.SCREEN_HEIGHT);
    }

    /* draw all elements */
    function draw() {
        clear();
        player.draw(ctx);
        if (menu.isOpen) {
            menu.draw();
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
                menu.toggleMenu();
                break;
        }
    }

    window.addEventListener('keydown', keyDown);
});
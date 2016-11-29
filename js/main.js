/**
 * Created by miguel on 17/09/16.
 */

/* globals */
let canvas = document.getElementById('game-screen');
let ctx = canvas.getContext("2d");
let logger = document.getElementById('left-logger');
let constants;

/* let's try to keep only the classes we're truly using */
requirejs(["Constants", "UI", "Player"],
    function (_Constants, UI, Player) {

        constants = new Constants(canvas, logger);
        let menuOptions = ['pokédex', 'pokémon', 'bag', 'player name', 'save', 'option', 'exit'];
        let menu = new UI(constants.SCREEN_WIDTH, 220, menuOptions);
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
                    player.move('up', constants.STEP_SIZE, 0);
                    menu.move('up');
                    break;
                case 'ArrowRight':
                case 'd':
                    player.move('right', constants.STEP_SIZE, constants.SCREEN_WIDTH);
                    break;
                case 'ArrowDown':
                case 's':
                    player.move('down', constants.STEP_SIZE, constants.SCREEN_HEIGHT);
                    menu.move('down');
                    break;
                case 'ArrowLeft':
                case 'a':
                    player.move('left', constants.STEP_SIZE, 0);
                    break;
                case 'Enter':
                    menu.toggle();
                    break;
            }
        }

        window.addEventListener('keydown', keyDown);
    }
);
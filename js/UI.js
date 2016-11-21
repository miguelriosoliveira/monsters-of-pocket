/**
 * Created by miguel on 21/11/16.
 */

/**
 * Game UI class
 * Used to build any menus and information cards of the game
 * @constructor
 */
let UI = function () {
    this.drawSomething = function () {
        console.log('hajhajajahajahaj');
    };

    /**
     * This method calls any other methods named with the "draw" prefix.
     * Just create any method named like "drawSomething" and it will be called automatically here.
     * For now, only methods without arguments are recommended.
     */
    this.draw = function () {
        Object.getOwnPropertyNames(this).filter(function (p) {
            if (typeof this[p] === 'function') {
                let pattern = /\bdraw\w+/;
                if (pattern.test(p)) {
                    this[p].call();
                }
            }
        }, this);
    }
};

define(function () {
    return UI;
});
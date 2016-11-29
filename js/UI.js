/**
 * Created by miguel on 21/11/16.
 */

define(['Constants', 'Triangle'], function (_Constants, Triangle) {
    /**
     * Game UI class
     * Used to build any menus and information cards of the game
     * @constructor
     */
    let UI = function (x, y, options) {
        this.fontSize = 16; // in pixels
        this.width = biggerWord(options) * this.fontSize;
        this.height = options.length * this.fontSize;
        this.isOpen = false;
        this.xLeft = x;
        this.yUp = y;
        this.xRight = this.xLeft + this.width;
        this.yDown = this.yUp + this.height;
        this.options = options;
        this.currentOption = 1;
        this.selectorSize = 7;


        // TODO put this in the right place (adjust menu position if the position passed in the arguments is out of
        // screen
        let diffX = this.xRight - constants.SCREEN_WIDTH + constants.SCREEN_PADDING; // TODO figure out that warning
        if (diffX > 0) {
            this.xLeft -= diffX;
            this.xRight -= diffX;
        }
        let diffY = constants.SCREEN_PADDING - this.yUp; // TODO figure out that warning (make static class?)
        if (diffY > 0) {
            this.yUp += diffY;
            this.yDown += diffY;
        }

        this.selector = new Triangle(
            this.xLeft + this.selectorSize, this.yUp + this.selectorSize,
            this.xLeft + this.selectorSize * 2, this.yUp + this.selectorSize * 2,
            this.xLeft + this.selectorSize, this.yUp + this.selectorSize * 3
        );


        /**
         * Turns menu on and off
         */
        this.toggle = function () {
            this.isOpen = !this.isOpen;
        };

        /**
         * Move the selector in the menu
         * @param direction 'up' or 'down'
         */
        this.move = function (direction) {
            Object.getOwnPropertyNames(this).filter(function (p) {
                if (typeof this[p] === 'function') {
                    if (this.isOpen && p.toLowerCase().indexOf('move' + direction) >= 0) {
                        this[p].call(this);
                    }
                }
            }, this);
        };

        /**
         * Move the selector up
         */
        this.moveUp = function () {
            console.log('moving up');
            this.selector.p1.y -= this.fontSize;
            this.selector.p2.y -= this.fontSize;
            this.selector.p3.y -= this.fontSize;
        };

        /**
         * Move the selector down
         */
        this.moveDown = function () {
            console.log('moving down');
            this.selector.p1.y += this.fontSize;
            this.selector.p2.y += this.fontSize;
            this.selector.p3.y += this.fontSize;
        };

        /**
         * Draws the contour of the menu, with rounded corners
         */
        this.drawContour = function () {
            // for the rounded corners: the bigger the delta, "more round" the corners will be
            let delta = 10;

            ctx.beginPath();
            ctx.lineWidth = "6";
            ctx.moveTo(this.xLeft + delta, this.yUp);

            // upper line and upper-right corner
            ctx.lineTo(this.xRight - delta, this.yUp);
            ctx.quadraticCurveTo(this.xRight, this.yUp, this.xRight, this.yUp + delta);

            // right line and down-right corner
            ctx.lineTo(this.xRight, this.yDown - delta);
            ctx.quadraticCurveTo(this.xRight, this.yDown, this.xRight - delta, this.yDown);

            // down line and down-left corner
            ctx.lineTo(this.xLeft + delta, this.yDown);
            ctx.quadraticCurveTo(this.xLeft, this.yDown, this.xLeft, this.yDown - delta);

            // left line and upper-left corner
            ctx.lineTo(this.xLeft, this.yUp + delta);
            ctx.quadraticCurveTo(this.xLeft, this.yUp, this.xLeft + delta, this.yUp);

            ctx.stroke();
        };

        /**
         * Draws the options of the menu.
         * The font size depends on the number of options.
         */
        this.drawOptions = function () {
            this.fontSize = this.height / (this.options.length + 1);
            let optionNumber = 1;

            for (let property in this.options) {
                let option = this.options[property];
                ctx.fillStyle = "gray";
                ctx.font = "bold " + this.fontSize + "px Arial";
                let pokeOption = pokeUpperCase(option.toUpperCase());
                ctx.fillText(pokeOption, this.selector.p2.x, this.yUp + this.fontSize * .4 + this.fontSize * optionNumber);
                optionNumber++;
            }
        };

        /**
         * Draws the option selector of the menu
         */
        this.drawSelector = function () {
            ctx.beginPath();
            ctx.moveTo(this.selector.p1.x, this.selector.p1.y);
            ctx.lineTo(this.selector.p2.x, this.selector.p2.y);
            ctx.lineTo(this.selector.p3.x, this.selector.p3.y);
            ctx.fill();
        };

        /**
         * Calls any other methods named with the "draw" prefix.
         * Just create a method named like "drawSomething" and it will be called automatically here.
         * For now, only methods without arguments are recommended.
         */
        this.draw = function () {
            Object.getOwnPropertyNames(this).filter(function (p) {
                if (typeof this[p] === 'function') {
                    let pattern = /\bdraw\w+/;
                    if (pattern.test(p)) {
                        this[p].call(this);
                    }
                }
            }, this);
        };
    };

    /**
     * Make a special upper case:
     * "pokémon" -> "POKéMON"
     * "analgésico" -> "ANALGéSICO"
     * @param string
     * @returns {*}
     */
    function pokeUpperCase(string) {
        let result = string;

        string.replace(/([Á])|([É])|([Í])|([Ó])|([Ú])/g, function () {
            /*
             Arguments of this function may vary depending on the size of the RegExp input:
             * match:	    The matched substring. (Corresponds to $& above.)
             * p1, p2, ...:	The nth parenthesized submatch string, provided the first argument to replace() was a RegExp object. (Corresponds to $1, $2, etc. above.) For example, if /(\a+)(\b+)/, was given, p1 is the match for \a+, and p2 for \b+.
             * offset:    	The offset of the matched substring within the whole string being examined. (For example, if the whole string was 'abcd', and the matched substring was 'bc', then this argument will be 1.)
             * string:       The whole string being examined.
             */
            let accentedChar = arguments[0].toLowerCase();
            let offset = arguments[arguments.length - 2];
            result = string.substr(0, offset) + accentedChar + string.substr(offset + 1);
        });

        return result;
    }

    /**
     * Returns the size of the bigger string in an array
     * @param words
     * @returns {number}
     */
    function biggerWord(words) {
        let biggerSize = 0;

        words.forEach(function (word) {
            if (word.length > biggerSize) {
                biggerSize = word.length;
            }
        });

        return biggerSize;
    }

    return UI;
});
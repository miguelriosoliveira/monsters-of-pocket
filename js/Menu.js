/**
 * Created by miguel on 14/11/16.
 */

define(function () {
    /**
     * Menu class
     * @constructor
     */
    let Menu = function (options, screen_width, screen_height) {
        // TODO ainda está bem feio isso, melhorar (talvez criar uma classe menu)
        this.width = Math.round((1 / 3) * screen_width);
        this.height = Math.round((1 / 3) * screen_height);
        this.isOpen = false;
        this.margin = 20;
        this.delta = 10;
        this.xLeft = screen_width - this.margin - this.width;
        this.yUp = this.margin;
        this.xRight = this.xLeft + this.width;
        this.yDown = this.margin + this.height;
        this.options = options;
        this.currentOption = 0;

        this.toggleMenu = function () {
            this.isOpen = !this.isOpen;
        };

        this.drawContour = function () {
            ctx.beginPath();
            ctx.lineWidth = "6";
            ctx.moveTo(this.xLeft + this.delta, this.yUp);
            ctx.lineTo(this.xRight - this.delta, this.yUp);
            ctx.quadraticCurveTo(this.xRight, this.yUp, this.xRight, this.yUp + this.delta);
            ctx.lineTo(this.xRight, this.yDown - this.delta);
            ctx.quadraticCurveTo(this.xRight, this.yDown, this.xRight - this.delta, this.yDown);
            ctx.lineTo(this.xLeft + this.delta, this.yDown);
            ctx.quadraticCurveTo(this.xLeft, this.yDown, this.xLeft, this.yDown - this.delta);
            ctx.lineTo(this.xLeft, this.yUp + this.delta);
            ctx.quadraticCurveTo(this.xLeft, this.yUp, this.xLeft + this.delta, this.yUp);
            ctx.stroke();
        };

        this.drawOptions = function () {
            let fontSize = this.height / (this.options.length + 1);//16;
            let optionNumber = 1;

            for (let property in this.options) {
                let option = this.options[property];
                ctx.fillStyle = "gray";
                ctx.font = "bold " + fontSize + "px Arial";
                let pokeOption = pokeUpperCase(option.toUpperCase());
                ctx.fillText(pokeOption, this.xLeft + this.delta, this.yUp + fontSize * .4 + fontSize * optionNumber);
                optionNumber++;
            }
        };

        this.draw = function () {
            /* contour and this.options */
            this.drawContour();
            this.drawOptions();
        };
    };

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

    return Menu;
});
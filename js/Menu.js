/**
 * Created by miguel on 14/11/16.
 */

define(function () {
    /**
     * Menu class
     * @constructor
     */
    var Menu = function (screen_width, screen_height) {
        // TODO ainda está bem feio isso, melhorar (talvez criar uma classe menu)
        this.width = Math.round((1 / 3) * screen_width);
        this.height = Math.round((1 / 3) * screen_height);
        this.isOpen = false;
        this.padding = 20;
        this.delta = 10;
        this.xLeft = screen_width - this.padding - this.width;
        this.yUp = this.padding;
        this.xRight = this.xLeft + this.width;
        this.yDown = this.padding + this.height;
        this.options = ['pokémon', 'bag', 'player name', 'save', 'option', 'exit'];

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
            var fontSize = this.height / (this.options.length + 1);//16;
            var optionNumber = 1;
            // this.options.forEach(function (option) {
            //     ctx.fillStyle = "gray";
            //     ctx.font = "bold " + fontSize + "px Arial";
            //     ctx.fillText(option.toUpperCase(), this.xLeft + this.delta, this.yUp + fontSize * .4 + fontSize *
            // optionNumber); optionNumber++; });

            for (var property in this.options) {
                var option = this.options[property];
                ctx.fillStyle = "gray";
                ctx.font = "bold " + fontSize + "px Arial";
                ctx.fillText(option.toUpperCase(), this.xLeft + this.delta, this.yUp + fontSize * .4 + fontSize * optionNumber);
                optionNumber++;
            }
        };

        this.draw = function () {
            /* contour and this.options */
            this.drawContour();
            this.drawOptions();
        };
    };

    return Menu;
});
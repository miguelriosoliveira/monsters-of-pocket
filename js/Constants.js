/**
 * Created by miguel on 08/11/16.
 */


define(function () {
    /**
     * Basic constants of the game
     * @param canvas
     * @param logger
     * @constructor
     */
    var Constants = function (canvas, logger) {
        /* game screen values */
        this.SCREEN_WIDTH = (3 / 5) * screen.availWidth;
        this.SCREEN_HEIGHT = (3 / 5) * screen.availHeight;

        /* canvas setup */
        canvas.setAttribute('width', this.SCREEN_WIDTH.toString());
        canvas.setAttribute('height', this.SCREEN_HEIGHT.toString());

        /* logger setup */
        logger.style.width = ((1 / 3) * screen.availWidth).toString() + 'px';
        logger.style.height = this.SCREEN_HEIGHT + 'px';
        // redirectLog(logger);
    };

    /* redirect messages to the logger */
    function redirectLog(loggerTag) {
        console.log = function (message) {
            loggerTag.innerHTML += message + '\n';
            loggerTag.scrollTop = loggerTag.scrollHeight;
        };
    }

    return Constants;
});
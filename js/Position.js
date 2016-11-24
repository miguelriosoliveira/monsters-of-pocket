/**
 * Created by miguel on 24/11/16.
 */

/**
 *
 * @param x
 * @param y
 * @constructor
 */
let Position = function (x, y) {
    this.x = x;
    this.y = y;
    this.toString = function () {
        return '(' + this.x + ', ' + this.y + ')';
    }
};

define(function () {
    return Position;
});
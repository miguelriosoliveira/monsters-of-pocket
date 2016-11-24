/**
 * Created by miguel on 24/11/16.
 */

define(['Position'], function (Position) {
    /**
     *
     * @param p1x
     * @param p1y
     * @param p2x
     * @param p2y
     * @param p3x
     * @param p3y
     * @constructor
     */
    let Triangle = function (p1x, p1y, p2x, p2y, p3x, p3y) {
        this.p1 = new Position(p1x, p1y);
        this.p2 = new Position(p2x, p2y);
        this.p3 = new Position(p3x, p3y);
    };

    return Triangle;
});
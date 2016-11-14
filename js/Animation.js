/**
 * Created by Gabriel on 14/11/2016.
 */

/**
 * Animation class
 * @constructor
 */
var Animation = function () {
    this.up = function (object1) {
        if ((object1.sprite_ID < 0) || (object1.sprite_ID > 2)) {
            object1.sprite_ID = 0;
            object1.cropX = 2;
            object1.cropY = 2;
        }
        switch (object1.sprite_ID) {
            case 0:
                object1.cropX += 12;
                object1.sprite_ID += 1;
                break;
            case 1:
                object1.cropX += 12;
                object1.sprite_ID += 1;
                break;
            case 2:
                object1.cropX -= 12;
                object1.sprite_ID -= 1;
                break;
        }
    };

    this.down = function (object1) {
        if ((object1.sprite_ID < 20) || (object1.sprite_ID > 22)) {
            object1.sprite_ID = 20;
            object1.cropX = 2;
            object1.cropY = 32;
        }
        switch (object1.sprite_ID) {
            case 20:
                object1.cropX += 12;
                object1.sprite_ID += 1;
                break;
            case 21:
                object1.cropX += 12;
                object1.sprite_ID += 1;
                break;
            case 22:
                object1.cropX -= 12;
                object1.sprite_ID -= 1;
                break;
        }
    };

    this.left = function (object1) {
        if ((object1.sprite_ID < 20) || (object1.sprite_ID > 22)) {
            object1.sprite_ID = 20;
            object1.cropX = 2;
            object1.cropY = 32;
        }
        switch (object1.sprite_ID) {
            case 20:
                object1.cropX += 12;
                object1.sprite_ID += 1;
                break;
            case 21:
                object1.cropX += 12;
                object1.sprite_ID += 1;
                break;
            case 22:
                object1.cropX -= 12;
                object1.sprite_ID -= 1;
                break;
        }
    };

    this.right = function (object1) {
        if ((object1.sprite_ID < 30) || (object1.sprite_ID > 32)) {
            object1.sprite_ID = 30;
            object1.cropX = 2;
            object1.cropY = 48;
        }
        switch (object1.sprite_ID) {
            case 30:
                object1.cropX += 12;
                object1.sprite_ID += 1;
                break;
            case 31:
                object1.cropX += 12;
                object1.sprite_ID += 1;
                break;
            case 32:
                object1.cropX -= 12;
                object1.sprite_ID -= 1;
                break;
        }
    };
};

define(function () {
    return Animation;
});
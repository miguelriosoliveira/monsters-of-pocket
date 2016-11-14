/**
 * Created by miguel on 17/09/16.
 */

/**
 * Player class
 * @param name
 * @param gender
 * @constructor
 */
var Player = function (name, gender) {
	this.name = name;
	this.gender = gender;
	this.pokemonList = [];
	this.bag = new Bag();
	this.position = new Position(0, 0); //Player position in a zone X, Y
	this.zone = 0; //Zone of the world where the player is located
	this.id = createId();
	this.money = 0;
	this.pokedex = 0;
	this.initTime = new Date();
	this.badges = [];
	this.sprite = createImg('img/Sprites_Male_Player/sprite_sheet_male1-01.png');
	/* TODO: pegar largura e altura do player e do sprite de um jeito melhor */
	this.width = 12;
	this.height = 16;

	this.playTime = function () {
		var currentTime = new Date();
		return currentTime - this.initTime;
	};

	/* movement */

	this.moveUp = function (delta, upLimit) {
        if (this.position.y - delta >= upLimit) {
			this.position.y -= delta;
		}
        console.log(this.position);
	};

	this.moveRight = function (delta, rightLimit) {
		if (this.position.x + delta < rightLimit) {
			this.position.x += delta;
		}
        console.log(this.position);
	};

	this.moveDown = function (delta, downLimit) {
		if (this.position.y + delta < downLimit) {
			this.position.y += delta;
		}
        console.log(this.position);
	};

	this.moveLeft = function (delta, leftLimit) {
        if (this.position.x - delta >= leftLimit) {
			this.position.x -= delta;
		}
        console.log(this.position);
	};

	/* draw */

	this.draw = function (ctx) {
        // s: source image
        // d: destination canvas
        // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
		ctx.drawImage(this.sprite,
			0, 0, this.width, this.height,
			this.position.x, this.position.y, this.width, this.height);
	}
};

/* creates an id based on  */
function createId() {
    var d = new Date();
    var id = '' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds();
    return Number(id);
}

/* creates an image obj */
function createImg(imgPath) {
    var img = new Image();
    img.src = imgPath;
    return img;
}

/**
 * Bag class.
 * @constructor
 */
var Bag = function () {
	this.items = [];
	this.keyItems = [];
	this.pokeballs = [];
};

var Position = function (x, y) {
	this.x = x;
	this.y = y;
	this.toString = function () {
		return '(' + this.x + ', ' + this.y + ')';
	}
};

var Sprite = function (srcImg, frontX, frontY, backX, backY, leftX, leftY, rightX, rightY) {
	this.src = srcImg;

	this.frontSpriteX = frontX;
	this.frontSpriteY = frontY;

	this.backSpriteX = backX;
	this.backSpriteY = backY;

	this.leftSpriteX = leftX;
	this.leftSpriteY = leftY;

	this.rightSpriteX = rightX;
	this.rightSpriteY = rightY;

	this.toString = function () {
		return '(' + this.x + ', ' + this.y + ')';
	}
};

define(function () {
	return Player;
});
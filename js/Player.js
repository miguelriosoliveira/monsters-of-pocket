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
	this.sprite = 'img/Sprites_Male_Player/sprite_sheet_male1-01.png';

	this.playTime = function () {
		var currentTime = new Date();
		return currentTime - this.initTime;
	};

	/* movement */

	this.moveUp = function (delta, upLimit) {
		if (this.position.y - delta > upLimit) {
			this.position.y -= delta;
		}
	};

	this.moveRight = function (delta, rightLimit) {
		if (this.position.x + delta < rightLimit) {
			this.position.x += delta;
		}
	};

	this.moveDown = function (delta, downLimit) {
		if (this.position.y + delta < downLimit) {
			this.position.y += delta;
		}
	};

	this.moveLeft = function (delta, leftLimit) {
		if (this.position.x - delta > leftLimit) {
			this.position.x -= delta;
		}
	};

	/* draw */

	this.draw = function (ctx) {
		var player = new Image();
		player.src = this.sprite;
		ctx.drawImage(player, this.position.x, this.position.y);
	}
};

/* creates an id based on  */
function createId() {
	var d = new Date();
	var id = '' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds();
	return Number(id);
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
};

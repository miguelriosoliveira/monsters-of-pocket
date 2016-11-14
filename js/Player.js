/**
 * Created by miguel on 17/09/16.
 */


/**
 * Player class.
 * @param name
 * @param gender
 * @constructor
 */
var Player = function (name, gender) {
	this.name = name;
	this.gender = gender;
	this.pokemonList = [];
	this.bag = new Bag();
	this.zone = 0; //Zone of the world where the player is located
	this.position = new Position(0, 0); //Player position in a zone X, Y
	this.id = (function () {
		var d = new Date();
		var id = '' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds();
		return Number(id);
	}());
	this.money = 0;
	this.pokedex = 0;
	this.initTime = new Date();
	this.badges = [];

	//player and NPCs need these attributes
	this.sprite = new Image();
	this.sprite.src = 'img/Sprites_Male_Player/sprite_sheet_male1-01.png';
	this.width = 10; //sprite's width and height
	this.height = 15;
	this.cropX = 2; //Where in the sprite sheet the first sprite is located
	this.cropY = 2;
	this.sprite_ID = 0;
	//-------------------------------------

	this.playTime = function () {
		var currentTime = new Date();
		return currentTime - this.initTime;
	};

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
};

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

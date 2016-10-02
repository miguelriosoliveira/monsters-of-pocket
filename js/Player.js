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
	this.id = (function () {
		var d = new Date();
		var id = '' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds();
		return Number(id);
	}());
	this.money = 0;
	this.pokedex = 0;
	this.initTime = new Date();
	this.badges = [];

	this.sprite = function () {
		if (this.gender == 'M'){
			return ('img/Sprites_Male_Player/');
		} else {
			return ('img/Sprites_Female_Player/');
		}
	};

	this.playTime = function () {
		var currentTime = new Date();
		return currentTime - this.initTime;
	};

	Walk_Ahead = function (ctx, img) {

	}
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
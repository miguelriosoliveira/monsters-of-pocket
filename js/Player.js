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
	this.position = []; //Player position in a zone X, Y
	this.id = (function () {
		var d = new Date();
		var id = '' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds();
		return Number(id);
	});
	this.money = 0;
	this.pokedex = 0;
	this.initTime = new Date();
	this.badges = [];

	this.sprite = 'img/Sprites_Male_Player/';

	this.playTime = function () {
		var currentTime = new Date();
		return currentTime - this.initTime;
	};

	//wak animation, currently, well... its a mess, don't activate this shit
	this.Walk_Ahead = function (ctx, img) {
		var img2 = new Image();
		for (var i = 1; i++; i<3){
			img2.src = "Player_Back_" + i + ".png";
			var img3 = new Image();
			img3 = img.src + img2.src;
			console.log(img3.src);
			img3.onload = function (){
				var x = canvas.getAttribute('width')/2;
				var y = canvas.getAttribute('height')/2;
				ctx.drawImage(img3, x, y);
			}
		}
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
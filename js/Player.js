/**
 * Created by miguel on 17/09/16.
 */

/**
 * Player class
 * @param name
 * @param gender
 * @constructor
 */
let Player = function (name, gender) {
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
    this.cropX = 2; //Where in the sprite sheet the first sprite is located
    this.cropY = 2;
    this.sprite_ID = 0;

	this.playTime = function () {
        let currentTime = new Date();
		return currentTime - this.initTime;
	};

	this.openBag = function () {
		console.log('abrindo mochila...');
	};

	/* movement */

	this.moveUp = function (delta, upLimit) {
        if (this.position.y - delta >= upLimit) {
			this.position.y -= delta;
		}

        if ((this.sprite_ID < 0) || (this.sprite_ID > 2)) {
            this.sprite_ID = 0;
            this.cropX = 2;
            this.cropY = 2;
        }
        switch (this.sprite_ID) {
            case 0:
                this.cropX += 12;
                this.sprite_ID += 1;
                break;
            case 1:
                this.cropX += 12;
                this.sprite_ID += 1;
                break;
            case 2:
                this.cropX -= 12;
                this.sprite_ID -= 1;
                break;
        }

        console.log(this.position);
	};

	this.moveRight = function (delta, rightLimit) {
		if (this.position.x + delta < rightLimit - this.width) {
			this.position.x += delta;
		}

        if ((this.sprite_ID < 30) || (this.sprite_ID > 32)) {
            this.sprite_ID = 30;
            this.cropX = 2;
            this.cropY = 48;
        }
        switch (this.sprite_ID) {
            case 30:
                this.cropX += 12;
                this.sprite_ID += 1;
                break;
            case 31:
                this.cropX += 12;
                this.sprite_ID += 1;
                break;
            case 32:
                this.cropX -= 12;
                this.sprite_ID -= 1;
                break;
        }

        console.log(this.position);
	};

	this.moveDown = function (delta, downLimit) {
		if (this.position.y + delta < downLimit - this.height) {
			this.position.y += delta;
		}

        if ((this.sprite_ID < 10) || (this.sprite_ID > 12)) {
            this.sprite_ID = 10;
            this.cropX = 2;
            this.cropY = 16;
        }
        switch (this.sprite_ID) {
            case 10:
                this.cropX += 12;
                this.sprite_ID += 1;
                break;
            case 11:
                this.cropX += 12;
                this.sprite_ID += 1;
                break;
            case 12:
                this.cropX -= 12;
                this.sprite_ID -= 1;
                break;
        }

        console.log(this.position);
	};

	this.moveLeft = function (delta, leftLimit) {
        if (this.position.x - delta >= leftLimit) {
			this.position.x -= delta;
		}

        if ((this.sprite_ID < 20) || (this.sprite_ID > 22)) {
            this.sprite_ID = 20;
            this.cropX = 2;
            this.cropY = 32;
        }
        switch (this.sprite_ID) {
            case 20:
                this.cropX += 12;
                this.sprite_ID += 1;
                break;
            case 21:
                this.cropX += 12;
                this.sprite_ID += 1;
                break;
            case 22:
                this.cropX -= 12;
                this.sprite_ID -= 1;
                break;
        }

        console.log(this.position);
	};

	/* draw */

	this.draw = function (ctx) {
        // s: source image
        // d: destination canvas
        // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
		ctx.drawImage(this.sprite,
            this.cropX, this.cropY, this.width, this.height,
			this.position.x, this.position.y, this.width, this.height);
	}
};

/* creates an id based on  */
function createId() {
    let d = new Date();
    let id = '' + d.getFullYear() + d.getMonth() + d.getDate() + d.getHours() + d.getMinutes() + d.getSeconds();
    return Number(id);
}

/* creates an image obj */
function createImg(imgPath) {
    let img = new Image();
    img.src = imgPath;
    return img;
}

/**
 * Bag class.
 * @constructor
 */
let Bag = function () {
	this.items = [];
	this.keyItems = [];
	this.pokeballs = [];
};

let Position = function (x, y) {
	this.x = x;
	this.y = y;
	this.toString = function () {
		return '(' + this.x + ', ' + this.y + ')';
	}
};

define(function () {
    return Player;
});
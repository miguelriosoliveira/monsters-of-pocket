/**
 * Created by miguel on 17/09/16.
 */

/**
 *
 * @param species
 * @param level
 * @param nickname
 * @constructor
 */
var Pokemon = function (species, level, nickname) {
    this.species = species;
    this.level = level;
    this.nickname = nickname || this.species;
    this.moves = [null, null, null, null];
    this.current_exp = 0;
    this.sprite = function () {
        return "img/sprite_pkm/" + this.species.id + ".png";
    };

    this.levelUp = function (exp) {
        this.current_exp -= exp;
        if (this.current_exp < 1) {
            this.level += 1;								//level added
            exp = this.current_exp;							//exceeding  exp sent to a new variable
            this.current_exp = Math.pow(this.level, 3); 	//exp for next lv
            this.current_exp += exp; 						//exceeding last lv exp being subtracted from current exp
        }
    };
};

/**
 * Pokémon species class. Like bulbassaur, pikachu, squirtle, etc.
 * TODO: we need a list of all 151 species
 * Pokemon base stats: Hp, Attack, Defense, Speed, Special Attack, Special Defense
 * @param id
 * @param name
 * @param hp
 * @param att
 * @param def
 * @param spd
 * @param satt
 * @param sdef
 * @param base_exp
 * @param type
 * @constructor
 */
var Species = function (id, name, hp, att, def, spd, satt, sdef, base_exp, type) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.def = def;
    this.spd = spd;
    this.satt = satt;
    this.sdef = sdef;
    this.base_exp = base_exp;
    this.type = type;
};

/**
 * Pokémon move class. Like vine seed, thundershock, water gun, etc.
 * @param id
 * @param name
 * @param type
 * @param category
 * @param pp
 * @param power
 * @param accuracy
 * @constructor
 */
var Move = function (id, name, type, category, pp, power, accuracy) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.category = category;
    this.pp = pp;
    this.power = power;
    this.accuracy = accuracy;
};

define(function () {
    return Pokemon;
});
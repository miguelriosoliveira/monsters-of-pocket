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
    this.nickname = nickname;
    this.moves = [null, null, null, null];
};

/**
 * Pokémon species class. Like bulbassaur, pikachu, squirtle, etc.
 * TODO: we need a list of all 151 species
 * @param name
 * @constructor
 */
var Species = function (name) {
    this.name = name;
    this.type = (function () {
        // return type of 'this.name'
    }());
};

/**
 * Pokémon move class. Like vine seed, thundershock, water gun, etc.
 * @constructor
 */
var Move = function () {
    this.name = name;
    this.type = (function () {
        // return type of 'this.name'
    }());
    this.isPhysical = true;
};
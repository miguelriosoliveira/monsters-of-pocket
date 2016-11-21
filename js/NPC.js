/**
 * Created by Gabriel on 20/09/2016.
 */

/**
 *
 * @param id
 * @param name
 * @param sprite
 * @param pokemonList
 * @param items
 * @constructor
 */
let NPC = function (id, name, sprite, pokemonList, items) {
	this.id = id;	//NPC's IDs wont be random generated, because they follow a logic order
	this.name = name;
	this.sprite = sprite;
	this.pokemonList = pokemonList;
	this.items = items;
};


/**
 * 1000.01.1.000001
 * first four numbers indicate the area where the NPC is located
 * next two numbers indicates a movable (00) or static object (01)
 * next one indicates Object (0), character (1), important character (2)
 * the last six indicates that NPC unique numbers
 */

define(function () {
	return NPC;
});
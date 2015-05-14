var _ = require("lodash");
var tvNetworks = require("./tv-networks.js");
var colors = require("./colors.js");
var plants = require("./plant-forms.js");

var Data = {};


var Toppings = [{value: "Angus Beef Patty", label: "Angus Beef Patty"},
				{value: "Tomatoes", label: "Tomatoes"}, 
				{value: "Lettuce", label: "Lettuce"},
				{value: "American Cheese", label: "American Cheese"},
				{value: "Provolone", label: "Provolone"},
				{value: "Mayo", label: "Mayo"},
				{value: "Mustard", label: "Mustard"},
				{value: "Ketchup", label: "Ketchup"},
				{value: "Grilled Chicken", label: "Grilled Chicken"},
				{value: "Jalepenos", label: "Jalepenos"},
				{value: "Onion", label: "Onion"}];

var TVShows = [
	{value: 1, label: "South Park", network: tvNetworks.COMEDY_CENTRAL},
	{value: 2, label: "All That", network: tvNetworks.NICKELODEON},
	{value: 3, label: "Buffy", network: tvNetworks.WB}, 
	{value: 4, label: "Charmed", network: tvNetworks.WB},
	{value: 5, label: "Supernatural", network: tvNetworks.WB},
	{value: 6, label: "Chappelle's show", network: tvNetworks.COMEDY_CENTRAL},
	{value: 7, label: "The Daily Show", network: tvNetworks.COMEDY_CENTRAL},
	{value: 8, label: "Sponge Bob", network: tvNetworks.NICKELODEON},
	{value: 9, label: "Dora the Explorer", network: tvNetworks.NICKELODEON},
	{value: 10, label: "Doug", network: tvNetworks.NICKELODEON},
	{value: 11, label: "The Ren & Stimpy Show", network: tvNetworks.NICKELODEON},
	{value: 12, label: "7th Heaven", network: tvNetworks.WB}
];

var Fruits = [
	{ value: "Apple", label: "Apple", color: [colors.RED, colors.GREEN, colors.YELLOW], growsOn: plants.TREE},
	{ value: "Banana", label: "Banana", color: colors.YELLOW, growsOn: plants.TREE},
	{ value: "Coconut", label: "Coconut", color: colors.BROWN, growsOn: plants.TREE},
	{ value: "Durian", label: "Durian", color: colors.GREEN, growsOn: plants.TREE},
	{ value: "Elderberry", label: "Elderberry", color: colors.PURPLE, growsOn: plants.TREE},
	{ value: "Fig", label: "Fig", color: colors.PURPLE, growsOn: plants.TREE},
	{ value: "Grape", label: "Grape", color: [colors.PURPLE, colors.GREEN, colors.RED], growsOn: plants.VINE},
	{ value: "Huckleberry", label: "Huckleberry", color: colors.BLUE, growsOn: plants.BUSH},
	{ value: "Ita Palm", label: "Ita Palm", color: colors.BROWN, growsOn: plants.TREE},
	{ value: "Jujubes", label: "Jujubes", color: colors.BROWN, growsOn: plants.TREE},
	{ value: "Kiwi", label: "Kiwi", color: colors.GREEN, growsOn: plants.TREE},
	{ value: "Lemon", label: "Lemon", color: colors.YELLOW, growsOn: plants.TREE},
	{ value: "Mango", label: "Mango", color: colors.ORANGE, growsOn: plants.TREE},
	{ value: "Nectarine", label: "Nectarine", color: colors.PINK, growsOn: plants.TREE},
	{ value: "Orange", label: "Orange", color: colors.ORANGE, growsOn: plants.TREE},
	{ value: "Pineapple", label: "Pineapple", color: colors.YELLOW, growsOn: plants.TREE},
	{ value: "Quince", label: "Quince", color: colors.YELLOW, growsOn: plants.TREE},
	{ value: "Raspberry", label: "Raspberry", color: colors.RED, growsOn: plants.BUSH},
	{ value: "Strawberry", label: "Strawberry", color: colors.RED, growsOn: plants.VINE},
	{ value: "Tangerine", label: "Tangerine", color: colors.ORANGE, growsOn: plants.TREE},
	{ value: "Ugli", label: "Ugli", color: colors.GREEN, growsOn: plants.TREE},
	{ value: "Voavanga", label: "Voavanga", color: colors.BROWN, growsOn: plants.TREE},
	{ value: "Watermelon", label: "Watermelon", color: colors.GREEN, growsOn: plants.VINE},
	{ value: "Xigua Melon", label: "Xigua Melon", color: colors.YELLOW, growsOn: plants.VINE},
	{ value: "Yellow Watermelon", label: "Yellow Watermelon", color: colors.GREEN, growsOn: plants.VINE},
	{ value: "Zucchini", label: "Zucchini", color: colors.GREEN, growsOn: plants.VINE}
];

var generateConstantsArray = function(constantClass) {
	return Object.keys(constantClass).map(function(key){return constantClass[key];})
};

Data.Toppings = Toppings;
Data.TVShows = TVShows;
Data.Fruits = Fruits;
Data.Colors = generateConstantsArray(colors);
Data.TVNetworks = generateConstantsArray(tvNetworks);
Data.Plants = generateConstantsArray(plants);
module.exports = Data;


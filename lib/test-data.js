var _ = require("lodash");
var Data = {};

//react-tag-list values is a flat array of values
var TagValues = ["Angus Beef Patty", 
				 "Tomatoes", 
				 "Lettuce",
				 "American Cheese", 
				 "Provolone", 
				 "Mayo", 
				 "Mustard", 
				 "Ketchup", 
				 "Grilled Chicken", 
				 "Jalepenos", 
				 "Onion"];

//react-compact-multiselect options are value, label, and optional groupBy properties
var RCMOptions = [
	{value: 1, label: "South Park", network: "Comedy Central"},
	{value: 2, label: "All That", network: "Nickelodeon"},
	{value: 3, label: "Buffy", network: "WB"}, 
	{value: 4, label: "Charmed", network: "WB"},
	{value: 5, label: "Supernatural", network: "WB"},
	{value: 6, label: "Chappelle's show", network: "Comedy Central"},
	{value: 7, label: "The Daily Show", network: "Comedy Central"},
	{value: 8, label: "Sponge Bob", network: "Nickelodeon"},
	{value: 9, label: "Dora the Explorer", network: "Nickelodeon"},
	{value: 10, label: "Doug", network: "Nickelodeon"},
	{value: 11, label: "The Ren & Stimpy Show", network: "Nickelodeon"},
	{value: 12, label: "7th Heaven", network: "WB"}
];

var XzibitOptions = [
	{ value: "Apple", label: "Apple", color: ["Red", "Green", "Yellow"], growsOn: "Tree"},
	{ value: "Banana", label: "Banana", color: "Yellow", growsOn: "Tree"},
	{ value: "Coconut", label: "Coconut", color: "Brown", growsOn: "Tree"},
	{ value: "Durian", label: "Durian", color: "Green", growsOn: "Tree"},
	{ value: "Elderberry", label: "Elderberry", color: "Purple", growsOn: "Tree"},
	{ value: "Fig", label: "Fig", color: "Purple", growsOn: "Tree"},
	{ value: "Grape", label: "Grape", color: ["Purple", "Green", "Red"], growsOn: "Vine"},
	{ value: "Huckleberry", label: "Huckleberry", color: "Blue", growsOn: "Bush"},
	{ value: "Ita Palm", label: "Ita Palm", color: "Brown", growsOn: "Tree"},
	{ value: "Jujubes", label: "Jujubes", color: "Brown", growsOn: "Tree"},
	{ value: "Kiwi", label: "Kiwi", color: "Green", growsOn: "Tree"},
	{ value: "Lemon", label: "Lemon", color: "Yellow", growsOn: "Tree"},
	{ value: "Mango", label: "Mango", color: "Orange", growsOn: "Tree"},
	{ value: "Nectarine", label: "Nectarine", color: "Pink", growsOn: "Tree"},
	{ value: "Orange", label: "Orange", color: "Orange", growsOn: "Tree"},
	{ value: "Pineapple", label: "Pineapple", color: "Yellow", growsOn: "Tree"},
	{ value: "Quince", label: "Quince", color: "Yellow", growsOn: "Tree"},
	{ value: "Raspberry", label: "Raspberry", color: "Red", growsOn: "Bush"},
	{ value: "Strawberry", label: "Strawberry", color: "Red", growsOn: "Vine"},
	{ value: "Tangerine", label: "Tangerine", color: "Orange", growsOn: "Tree"},
	{ value: "Ugli", label: "Ugli", color: "Green", growsOn: "Tree"},
	{ value: "Voavanga", label: "Voavanga", color: "Brown", growsOn: "Tree"},
	{ value: "Watermelon", label: "Watermelon", color: "Green", growsOn: "Vine"},
	{ value: "Xigua Melon", label: "Xigua Melon", color: "Yellow", growsOn: "Vine"},
	{ value: "Yellow Watermelon", label: "Yellow Watermelon", color: "Green", growsOn: "Vine"},
	{ value: "Zucchini", label: "Zucchini", color: "Green", growsOn: "Vine"}
];

var generateXzibitDimensions = function() {
	var colorOptions = _.uniq(XzibitOptions.map(function(fruit){
		if (Array.isArray(fruit.color)){
			return fruit.color[0];
		}
		return fruit.color;
	})).map(function(color){
		return {value: color, label: color}
	});
	var growsOnOptions = _.uniq(XzibitOptions.map(function(fruit){
		if (Array.isArray(fruit.growsOn)){
			return fruit.growsOn[0];
		}
		return fruit.growsOn;
	})).map(function(growsOn){
		return {value: growsOn, label: growsOn}
	});

	return [
		{name: "Color",
		 key: "color",
		 options: colorOptions},
		{name: "Grows On",
		 key: "growsOn",
		 options: growsOnOptions}
	];
};
var XzibitDimensions = generateXzibitDimensions();


Data.TagValues = TagValues;
Data.RCMOptions = RCMOptions;
Data.XzibitOptions = XzibitOptions;
Data.XzibitDimensions = XzibitDimensions;
module.exports = Data;


var cooking = [
	"steamed",
  "fried",
  "raw",
  "stir fry",
  "deep fry",
  "smoked"

];
var type = [
"spaghetti",
"seafood",
"steak",
"hamburger",
"curry",
"hot dog",
"chicken",
"rice",
"human",
"pork",
"bread",
"potato"
];



var randOne = Math.floor(Math.random()* cooking.length);
var randTwo = Math.floor(Math.random()* type.length);
window.alert(cooking[randOne] + " " + type[randTwo]);
  
  
  
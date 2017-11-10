//Imports the our constructors
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

//Create our basic flashcards
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
console.log(firstPresident.front, firstPresident.back);
//Create our ClozeCards
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States", "George Washington");
console.log(firstPresidentCloze.cloze);
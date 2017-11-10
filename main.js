//Imports the constructor for BasicCard from 'BasicCard.js' and stores in var BasicCard
var BasicCard = require("./BasicCard.js");
//Same for ClozeCard
var ClozeCard = require("./ClozeCard.js");

//Creates first BasicCard
var firstBasic = new BasicCard("Who was the first president of the United States?", "George Washington");
//console.log("First Basic Card\n" + "<--------------->\n" +firstBasic.front+"\n"+firstBasic.back);
//console.log("<--------------->\n");

//Creates ClozeCards
var firstCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
var secondCloze = new ClozeCard("1774 is the year of the first continental congress.", "1774");
var thirdCloze = new ClozeCard("1863 is the year Abraham Lincoln delivered the Gettysburg Address.", "1863");
var fourthCloze = new ClozeCard("Orca whales are natural predators of moose.", "Orca whales");
var fifthCloze = new ClozeCard("Octopuses have three hearts", "Octopuses");
//console.log("First Cloze Card\n" + "<--------------->\n" +firstCloze.fullText+"\n"+firstCloze.partial+"\n"+firstCloze.cloze);
//console.log("<--------------->\n");

console.log(firstCloze.cloze);
console.log(secondCloze.cloze);
console.log(thirdCloze.cloze);
console.log(fourthCloze.cloze);
console.log(fifthCloze.cloze);
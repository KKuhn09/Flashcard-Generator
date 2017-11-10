//Imports the our constructors
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

//Create our basic flashcards
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
var planetAge = new BasicCard("Roughly, how old is the planet Earth?", "4.5 billion years old");
var earthOrbits = new BasicCard("What does the planet Earth orbit?", "The sun");
var orbitsEarth = new BasicCard("What orbits the Earth?", "The moon");
//Log our basic flashcards
console.log("<--------------------------->");
console.log("       Basic Flashcards");
console.log("<--------------------------->");
console.log(firstPresident.front, firstPresident.back);
console.log(planetAge.front, planetAge.back);
console.log(earthOrbits.front, earthOrbits.back);
console.log(orbitsEarth.front, orbitsEarth.back+"\n");
console.log("<--------------------------->");

//Create our cloze test flashcards
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States", "George Washington");
var plantAgeCloze = new ClozeCard("The planet Earth is 4.5 billion years old", "4.5");
var earthOrbitsCloze = new ClozeCard("The planet Earth orbits the sun", "sun");
var orbitsEarthCloze = new ClozeCard("The moon orbits the Earth", "moon");
//Log our cloze test flashcards
console.log("    Cloze Test Flashcards");
console.log("<--------------------------->");
console.log("Q: "+firstPresidentCloze.cloze);
console.log("A: "+firstPresidentCloze.partial+"\n");
console.log("Q: "+plantAgeCloze.cloze);
console.log("A: "+plantAgeCloze.partial+"\n");
console.log("Q: "+earthOrbitsCloze.cloze);
console.log("A: "+earthOrbitsCloze.partial+"\n");
console.log("Q: "+orbitsEarthCloze.cloze);
console.log("A: "+orbitsEarthCloze.partial);
console.log("<--------------------------->");
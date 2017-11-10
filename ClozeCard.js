//Create the ClozeCard constructor
var ClozeCard = function(fullText, partial){
	this.fullText = fullText; //Entire sentence to be remembered
	this.partial = partial; //Text to remove from the sentence (the answer)
	this.fullTextArray = fullText.split(" "); //Split the sentence into an array
	this.partialArray = partial.split(" "); //Split the answer into an array
	//For each word in the sentence
	for(var i=0;i<this.fullTextArray.length;i++){
		//For each word in the answer
		for(var j=0;j<this.partialArray.length;j++){
			//If the sentence's word is equal to the answer word
			if(this.fullTextArray[i] === this.partialArray[j]){
				this.fullTextArray[i] = "....."; //Cloze deletion
			}
		}
	};
	//Join the new sentence with the deletion
	this.cloze = this.fullTextArray.join(" ");
}
//Export the constructor
module.exports = ClozeCard;
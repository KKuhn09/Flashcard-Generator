//Create the ClozeCard constructor
var ClozeCard = function(fullText, partial){
	this.fullText = fullText; 
	this.partial = partial;
	this.partialArray = partial.split(" ");
	this.fullTextArray = fullText.split(" ");
	for(var i=0;i<this.fullTextArray.length;i++){
		if(this.fullTextArray[i] == this.partialArray[0]){
			this.fullTextArray[i] = ".....";
		}
	};
	for(var i=0;i<this.fullTextArray.length;i++){
		if(this.fullTextArray[i] == this.partialArray[1]){
			this.fullTextArray[i] = ".....";
		}
	};
	this.cloze = this.fullTextArray.join(" ");
}
//Export the constructor
module.exports = ClozeCard;
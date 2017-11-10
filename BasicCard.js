//Create the BasicCard scope-safe constructor
function BasicCard(front, back){
	//If this object is a BasicCard, proceed as normal
	if(this instanceof BasicCard){
		this.front = front; //Store the card front into BasicCard.front
		this.back = back; //Store the cards back (answer) into BasicCard.back
	}
	//If not, call constuctor again but with new operator
	else{
		return new BasicCard(front, back);
	}
}
//Export the constructor
module.exports = BasicCard;
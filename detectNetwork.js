//Name: Marbo Cheng Ye

// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  var prefix = parseInt(cardNumber.slice(0,2));
  var prefixVisa = parseInt(cardNumber.slice(0,1));

  var prefixThree = parseInt(cardNumber.slice(0,3));
  var prefixFour = parseInt(cardNumber.slice(0,4));
  var prefixDiscover = [644,645,646,647,648,649];
  var prefixMaestro = [5018,5020,5038,6304];




  if ((prefix === 38 || prefix === 39) && cardNumber.length === 14) {
  	return 'Diner\'s Club';
  }

  // The American Express network always starts with a 34 or 37 and is 15 digits long
  else if ((prefix === 34 || prefix === 37) && cardNumber.length === 15) {
  	return 'American Express';
  }

  else if (checkSwitch(cardNumber)) {
  	return 'Switch';
  }
  
  //Visa always has a prefix of 4 and a length of 13, 16, or 19.
  else if (prefixVisa === 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
  	return 'Visa';
  }
  

  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  else if ( (prefix >=51 && prefix <=55) && cardNumber.length ===16 ){
  	return 'MasterCard';
  }

  //6441234123412345
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  else if ( (prefixFour === 6011 || prefixDiscover.includes(prefixThree) || prefix === 65) && (cardNumber.length === 16 || cardNumber.length === 19) ) {
  	return 'Discover';
  }
  //501812341234
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  else if ( prefixMaestro.includes(prefixFour)  && (cardNumber.length >= 12 && cardNumber.length <= 19) ) {
  	return 'Maestro';
  }
  else if (checkUnionPay(cardNumber)){
  	return 'China UnionPay';
  }

  else if (checkSwitch(cardNumber)){
    return 'Switch';
  }

};

function checkUnionPay(cardNumber){
	//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
	var prefixThree = parseInt(cardNumber.slice(0,3));
	var prefixFour = parseInt(cardNumber.slice(0,4));
	var prefixSix = parseInt(cardNumber.slice(0,6));

	if ((prefixThree >=624 && prefixThree <=626) && (cardNumber.length >=16 && cardNumber.length <=19) ){
		return true;
	}

	else if ((prefixFour >= 6282 && prefixFour <= 6288) && (cardNumber.length >=16 && cardNumber.length <=19) ){
		return true;
	}

	else if ((prefixSix >= 622126 && prefixSix <= 622925) && (cardNumber.length >=16 && cardNumber.length <=19)) {
		return true;
	}
	else {
		return false;
	}
}
//Visa always has a prefix of 4 and a length of 13, 16, or 19.

//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

function checkSwitch(cardNumber){
	var prefixFour = parseInt(cardNumber.slice(0,4));
	var prefixSix = parseInt(cardNumber.slice(0,6));

	var switchPrefix = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
	var length = cardNumber.length;

	if ( (switchPrefix.includes(prefixFour) || switchPrefix.includes(prefixSix)) && (length === 16 || length === 18 || length ===19)) {
		return true;
	}
	else {
		return false;
	}



}



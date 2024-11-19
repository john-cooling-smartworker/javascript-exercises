// using string and array methods for a simple solution
const reverseString = function (inputString) {
    return inputString.split('').reverse().join('');
};
// split method converts string into an array of characters
// reverse method revereses the order of the elements in an array
// join method joins the elements of an array into a string

// using manual for loop just to show it can be done this way
const reverseStringManual = function (str) {
	let reversed = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
};

// Set up for a quick test using console
// reverse a multi word string
const originalString = "Brigalow trees reach to the sky";
const reversedString = reverseString(originalString);

// reverse it back to original
const reversedStringManual = reverseStringManual(reversedString);

console.log(reversedString)

console.log(reversedStringManual);

// Do not edit below this line
module.exports = reverseString;
module.exports = reverseStringManual;

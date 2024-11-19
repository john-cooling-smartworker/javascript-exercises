

const repeatString = function (originalString, num) {
    if (num < 0) return "ERROR";

    let repeatedString = "";
    for (let i = 0; i < num; i++) {
        repeatedString += originalString;
    }
    console.log(num, repeatedString);
   return repeatedString;
};

repeatString('hey', 3) // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;

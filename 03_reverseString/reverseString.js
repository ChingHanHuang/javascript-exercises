const reverseString = function(text) {
    const myArray = text.split("");
    let reverseText = "";
    for (let character in myArray) {
        reverseText = myArray[character] + reverseText;
    }
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;

const removeFromArray = function(myArray, ...removedElement) {
    return myArray.filter(ele => !removedElement.includes(ele));
};

// Do not edit below this line
module.exports = removeFromArray;

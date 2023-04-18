const palindromes = function (givenString) {
  let regex = /[!,.\s]/g;
  let charArr = givenString.toLowerCase().replace(regex, "").split("");
  let len = charArr.length;
  for (let i = 0; i < len / 2; i++) {
    let front = charArr[i];
    let end = charArr[len - i - 1];
    if (front !== end) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;

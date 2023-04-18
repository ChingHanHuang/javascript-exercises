const fibonacci = function (givenNum) {
  if (givenNum <= 0) return "OOPS";
  let firstNum = 1;
  let secondNum = 1;
  while (givenNum > 2) {
    let temp = firstNum;
    firstNum = secondNum;
    secondNum += temp;
    givenNum--;
  }
  return secondNum;
};

// Do not edit below this line
module.exports = fibonacci;

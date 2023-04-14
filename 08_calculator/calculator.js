const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
  Array.from(array).forEach(item => {
    sum += item;
  });
  return sum;
};

const multiply = function(array) {
  let ans = 1;
  Array.from(array).forEach(item => {
    ans *= item;
  });
  return ans;
};

const power = function(a, b) {
	let ans = 1;
  while(b > 0) {
    ans *= a;
    b--;
  }
  return ans;
};

const factorial = function(a) {
	let ans = 1;
  while(a > 0){
    ans = ans * a;
    a--;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

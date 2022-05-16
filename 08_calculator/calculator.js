const add = function(num1, num2) {
	 return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(arr) {
  let total = arr.reduce((prev,curr) => prev + curr, 0);
  return total;
};

const multiply = function(arr) {
  let total = arr.reduce((prev,curr) => prev * curr, 1);
  return total;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num1) {
	let total = 1;
  for (let index = 1; index <= num1; index++) {
    total *= index;
  }
  return total;
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

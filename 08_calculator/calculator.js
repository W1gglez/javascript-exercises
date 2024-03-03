const add = function (int1, int2) {
  return int1 + int2;
};

const subtract = function (int1, int2) {
  return int1 - int2;
};


const sum = function (args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
};

const multiply = function (args) {
  let product = 1;
  for (const arg of args) {
    product *= arg;
  }
  return product;
};

const power = function (int1, int2) {
  let product = 1;
  for (let i = int2; i > 0; i--) {
    product *= int1;
  }
  return product;
};

const factorial = function (int) {
  let product = 1;
  for (let i = int; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

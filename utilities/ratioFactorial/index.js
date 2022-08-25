const factorial = require("../factorial/index.js");

const ratio = require("../ratio/index.js");

const rationAndFactorial = function (num1, num2, num3) {
  const factorialOfNumber = factorial(num1);
  const ratioOfNumbers = ratio(num2, num3);

  return { factorialOfNumber, ratioOfNumbers };
};

console.log(rationAndFactorial());
module.exports = rationAndFactorial;

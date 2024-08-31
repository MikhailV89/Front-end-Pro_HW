'use strict';

function mainFunction(callback) {
  const num = +prompt('Write number');
  const pow = +prompt('Write pow');

  callback(num, pow);
}

function exponentiation(num1, num2) {
  const result = num1 ** num2;

  alert(`Number ${num1} raise to the power ${num2} = ${result}`);
}

function multiplay(num1, num2) {
  const result = num1 * num2;

  alert(`First number ${num1} * Second number ${num2} = ${result}`);
}

function division(num1, num2) {
  const result = num1 / num2;

  alert(`First number ${num1} / Second number ${num2} = ${result}`);
}

function modulo(num1, num2) {
  const result = num1 % num2;

  alert(`Remainder of division ${num1} % ${num2} = ${result}`);
}

mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);

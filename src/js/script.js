'use strict';

// Task 1
function calculation(array) {
  let sumArray = 0;
  let quantityElementArray = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      sumArray += array[i];
      quantityElementArray++;
    }
  }
  return quantityElementArray > 0 ? sumArray / quantityElementArray : 0;
}

const givenArray = [4, 6, 10, 'two', 'ten', 26, 18, 'five'];
const resultArray = calculation(givenArray);
console.log(`Середнє арифметичне масиву =  ${resultArray}`);

// Task 2
function doMath(x, znak, y) {
  switch (znak) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y;
    case '%':
      return x % y;
    case '^':
      return x ** y;
    default:
      return 'Error';
  }
}

const num1 = +prompt('Write first number');
const znak = prompt('Write some znak, +,-,*,/,^,%');
const num2 = +prompt('Write second number');

const result = doMath(num1, znak, num2);
console.log(result);

// Task 3
function fillArray() {
  const firstArray = parseInt(prompt('Введіть кількість елементів основного масиву:'), 10);
  const internalArray = parseInt(prompt('Введіть кількість значень в кожному елементі основного масиву:'), 10);

  const array = [];

  for (let i = 0; i < firstArray; i++) {
    const innerArray = [];

    for (let j = 0; j < internalArray; j++) {
      const elementArray = prompt(`Введіть ${j + 1} - значення для ${i + 1} елемента основного масиву:`);
      innerArray.push(elementArray);
    }

    array.push(innerArray);
  }

  return array;
}

const userArray = fillArray();
console.log(userArray);

// Task 4

function removeSymbols(string, symbols) {
  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    string = string.split(symbol).join('');
  }
  return string;
}

const inputString = prompt('Введіть рядок:');
const inputSymbols = prompt('Введіть символи для видалення без пробілів:');

const resultRemoveSymbols = removeSymbols(inputString, inputSymbols);
console.log(resultRemoveSymbols);

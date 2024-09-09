'use strict';

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// 1
const numArr = (array) => {
  const positive = [];
  let positiveCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positive.push(array[i]);
    }
  }

  positive.sort((a, b) => a - b);

  for (let i = 0; i < positive.length; i++) {
    positiveCount += positive[i];
  }

  console.log(positive);
  console.log(positiveCount);
};

numArr(arr);

// 2
const minElement = (array) => {
  const minElementInArr = Math.min(...array);
  const elementIndex = array.indexOf(minElementInArr);

  console.log(`Element: ${minElementInArr}/ Index: ${elementIndex}`);
};

minElement(arr);

// 3
const maxElement = (array) => {
  const maxElementInArr = Math.max(...array);
  const elementIndex = array.indexOf(maxElementInArr);

  console.log(`Element: ${maxElementInArr}/ Index: ${elementIndex}`);
};

maxElement(arr);

// 4
const someArr = (array) => {
  const filtered = array.filter((num) => num < 0).length;
  console.log(filtered);
};
someArr(arr);

// 5
const countPositiveEl1 = (array) => {
  const result = array.filter((num) => num > 0 && num % 2 !== 0).length;
  console.log(`Result ${result}`);
};
countPositiveEl1(arr);
// 6
const countPositiveEl2 = (array) => {
  const result = array.filter((num) => num > 0 && num % 2 === 0).length;
  console.log(`Result ${result}`);
};
countPositiveEl2(arr);
// 7
const sumPositiveEl1 = (array) => {
  const result = array.filter((num) => num > 0 && num % 2 === 0)
    .reduce((acc, num) => acc + num, 0);
  console.log(result);
};
sumPositiveEl1(arr);
// 8
const sumPositiveEl2 = (array) => {
  const result = array.filter((num) => num > 0 && num % 2 !== 0)
    .reduce((acc, num) => acc + num, 0);
  console.log(result);
};
sumPositiveEl2(arr);
// 9
const productOfPositiveEl = (array) => {
  const result = array.filter((num) => num > 0).reduce((acc, num) => acc * num, 1);
  console.log(result);
};
productOfPositiveEl(arr);
// 10
const onlyMaxElement = (array) => {
  const max = Math.max(...array);
  const result = arr.map((num) => (num === max ? max : 0));
  console.log(result);
};
onlyMaxElement(arr);

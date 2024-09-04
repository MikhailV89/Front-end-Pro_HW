'use strict';

const arrayFromUser = () => {
  const arrLength = +prompt('Write array length');
  const arr = [];

  for (let i = 0; i < arrLength; i++) {
    const arrElements = +prompt(`Write array element ${i + 1}`);
    arr.push(arrElements);
  }
  console.log(`Array: ${arr}`);

  arr.sort((a, b) => a - b);
  console.log(`Sorted array: ${arr}`);

  arr.splice(1, 3);
  console.log(`Changed array: ${arr}`);

  return arr;
};

arrayFromUser();

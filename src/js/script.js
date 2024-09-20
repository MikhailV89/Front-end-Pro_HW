'use strict';

function insertWord(str) {
  const positions = ['start', 'middle', 'end'];
  let currentIndex = 0;

  return function (word) {
    if (!word) return str;

    word = ` ${word.trim()} `;
    let result;

    if (positions[currentIndex] === 'start') {
      result = word.trim() + ' ' + str;
    } else if (positions[currentIndex] === 'middle') {
      const middle = Math.floor(str.length / 2);
      result = str.slice(0, middle) + word + str.slice(middle);
    } else {
      result = str + word.trim();
    }

    currentIndex = (currentIndex + 1) % positions.length;
    return result;
  };
}

const insert = insertWord('hello world');

console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));
console.log(insert('Odesa'));

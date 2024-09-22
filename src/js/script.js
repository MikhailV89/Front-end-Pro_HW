'use strict';

const createSum = () => {
  let sum = 0;

  function sumResult(num) {
    sum += num;
    return `sum (${num}) = ${sum}`;
  }

  return sumResult;
};

const result = createSum();

console.log(result(3));
console.log(result(5));
console.log(result(20));

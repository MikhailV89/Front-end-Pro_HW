'use strict';

function padString(str, numLength, symbol = '@', symRight = true) {
  if (typeof str !== 'string') {
    return 'Error: The first argument must be a string.';
  }
  if (typeof numLength !== 'number') {
    return 'Error: The second argument must be a number.';
  }
  if (typeof symbol !== 'string' || symbol.length !== 1) {
    return 'Error: The third argument must be a string with a length of 1.';
  }
  if (typeof symRight !== 'boolean') {
    return 'Error: The fourth argument must be a boolean.';
  }

  if (numLength < str.length) {
    return str.substr(0, numLength);
  }

  const padLength = numLength - str.length;
  const symRepeat = symbol.repeat(padLength);

  const result = symRight ? str + symRepeat : symRepeat + str;

  return result;
}

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));

'use strict';

function removeElement(arr, item) {
  const indexArray = arr.indexOf(item);

  if (indexArray !== -1) {
    arr.splice(indexArray, 1);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

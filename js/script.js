'use strict';

const hoursFromUser = +prompt('Please, write hours');
const result = hoursFromUser * 3600;

alert(`There are ${result} seconds in ${hoursFromUser} hours`);
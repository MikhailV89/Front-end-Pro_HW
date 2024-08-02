'use strict';

const name = prompt('What is your name?');
const age = prompt('What is your age ?');
const likesProgramming = confirm('Do you like programming?');

console.log(name, typeof name);
console.log(age, typeof age);
console.log(likesProgramming, typeof likesProgramming);

const greeting = `Hello,${name}`;
alert(greeting);

const numericAge = Number(age);
const nextAge = numericAge + 1;
console.log(nextAge);

const isAdult = nextAge >= 18;
console.log(isAdult);


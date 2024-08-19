'use strict';

// Task1
let result = '';

for (let i = 20; i <= 30; i += 0.5) {
  result += i + ', ';
}
console.log(result);

// Task2
const dollar = 27;

for (let i = 10; i <= 100; i += 10) {
  const result2 = i * dollar;
  console.log(`${i} dollars costs ${result2} UAH`);
}

// Task3
const numFromUser = +prompt('Write some number, from 1 to 100');

for (let i = 1; i <= 100; i++) {
  if (i * i <= numFromUser) {
    console.log(i);
  }
}

// Task4
let primeNum = true;

if (numFromUser <= 1) {
  primeNum = false;
} else {
  for (let i = 2; i < numFromUser; i++) {
    if (numFromUser % i === 0) {
      primeNum = false;
      break;
    }
  }
}

if (primeNum) {
  console.log(`Число ${numFromUser} є простим числом.`);
} else {
  console.log(`Число ${numFromUser} не є простим числом.`);
}

// Task5
let valueNumber = 1;
let resultDegree = 1;

for (valueNumber = 1; resultDegree < numFromUser; valueNumber++) {
  resultDegree = 3 ** valueNumber;
}

if (resultDegree === numFromUser) {
  console.log(`Число ${numFromUser} можна отримати шляхом зведення числа 3 у ступінь ${valueNumber}.`);
} else {
  console.log(`Число ${numFromUser} неможливо отримати шляхом зведення числа 3 у деякий ступінь.`);
}

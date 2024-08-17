'use strict';

// Task1

let result1 = '';

for (let i = 10; i <= 20; i++) {
  result1 += i + ' ,';
}

console.log(result1);

// Task2

let result2 = '';

for (let i = 10; i <= 20; i++) {
  result2 += i * i + ' ';
}

console.log(result2);

// Task3

const num = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${i} * ${num} = ${i * num}`);
}

// Task4

let result4 = 0;

for (let i = 1; i <= 15; i++) {
  result4 += i;
}

console.log(result4);

// Task5

let result = 1;

for (let i = 15; i <= 35; i++) {
  result *= i;
}

console.log(`Добуток усіх цілих чисел від 15 до 35 дорівнює ${result}`);

// Task6

let sum = 0;

for (let i = 1; i <= 500; i++) {
  sum += i;
}

const result6 = sum / 500;
console.log(result6);

// Task7

let result7 = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    result7 += i;
  }
}

console.log(result7);

// Task8

let result8 = '';

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    result8 += i + ' ';
  }
}

console.log(result8);

// Task9, Task10, Task11

const userNumber = +prompt('Write some number');
let number = 0;
let sumNumber = 0;
let resultNumber = '';

for (let i = 1; i <= userNumber; i++) {
  if (userNumber % i === 0) {
    resultNumber += i + ' ';
    if (i % 2 === 0) {
      number++;
      sumNumber += i;
    }
  }
}

console.log(`Ви ввели номер - ${userNumber}, його дільники - ${resultNumber}`);
console.log(`Кількість його парних дільників - ${number}`);
console.log(`Сума його парних дільників - ${sumNumber}`);

// Task12

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log('\n');
}

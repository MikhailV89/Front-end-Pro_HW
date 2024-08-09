'use strict';
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const birthYear = +prompt('Write your year of birth');
const yourCity = prompt('Write your city');
const yourSport = prompt('Write your sport');

let age = 0;
let city = null;
let sport = null;

if (!birthYear) {
    age = 'It is a pity that you did not want to enter your year of birth.';
} else {
    age = `You are ${currentYear - birthYear} years old.`;
}

if (!yourCity) {
    city = 'It is a pity that you did not want to enter the name of the city in which you live.';
} else if (yourCity === 'Kyiv') {
    city = 'You live in the capital of Ukraine';
} else if (yourCity === 'London') {
    city =  'You live in the capital of Great Britain';
} else if (yourCity === 'Washington') {
    city = 'You live in the capital of USA';
} else {
    city = `You live in a town ${yourCity}`;
}

if (!yourSport) {
    sport = 'It is a pity that you did not want to play the sport that you like.';
} else if (yourSport === 'football') {
    sport = 'Cool!!! Do you want to be like Cristiano Ronaldo?';
} else if (yourSport === 'basketball') {
    sport = 'Cool!!! Do you want to be like Michael Jordan?'
} else if (yourSport === 'boxing') {
    sport = 'Cool!!! Do you want to be like Mike Tyson?';
} else {
    sport = `${yourSport}? Also a good sport.`
}

alert(`
${age}
${city}
${sport}
`);
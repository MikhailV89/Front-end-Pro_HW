'use strict';

const appendEl = (parentEl = null, elementToAppend = null) => {
  if (!parentEl || !elementToAppend) return;
  parentEl.append(elementToAppend);
};
const getRandomNumber = () => {
  const num = Math.floor(Math.random() * 10);
  if (num === 0) return 1;
  return num;
};

const imagesGenerate = (imageNum) => {
  const img = document.createElement('img');
  img.src = './images/' + imageNum + '.jpg';
  return img;
};

const imageAppend = imagesGenerate(getRandomNumber());
appendEl(document.body, imageAppend);

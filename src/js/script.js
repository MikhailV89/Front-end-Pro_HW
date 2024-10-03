'use strict';

const input = document.getElementById('thisInput');
const sideDiv = () => {
  let div = document.getElementById('sidebar');
  if (!div) {
    div = document.createElement('div');
    div.id = 'sidebar';
    document.body.append(div);
  }
  div.style.display = 'block';
};

const hiddenDiv = () => {
  const div = document.getElementById('sidebar');
  if (div) {
    div.style.display = 'none';
  }
};

input.addEventListener('focus', sideDiv);
input.addEventListener('blur', hiddenDiv);

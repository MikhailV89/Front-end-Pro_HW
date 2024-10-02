'use strict';

const createTable = () => {
  const length = 10;
  const table = document.querySelector('table > tbody');
  let count = 1;

  Array.from({ length }, () => {
    const tr = document.createElement('tr');

    Array.from({ length }, () => {
      const td = document.createElement('td');
      td.innerText = count;
      count++;
      td.style.border = '1px solid black';
      tr.append(td);
    });

    table.append(tr);
  });
};

createTable();

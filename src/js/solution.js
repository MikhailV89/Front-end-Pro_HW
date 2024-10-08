'use strict';

(function () {
  const listChanges = () => {
    const ul = document.querySelector('ul');
    const listItems = ul.querySelectorAll('li');
    listItems.forEach((li) => console.log(li.textContent));

    const ulAttributes = ul.attributes;
    const attributesValues = [];

    for (const attr of ulAttributes) {
      attributesValues.push(attr.value);
    }
    console.log(attributesValues);

    const attributesNames = [];

    for (const attr of ulAttributes) {
      attributesNames.push(attr.name);
    }
    console.log(attributesNames);

    const lastLi = ul.lastElementChild;
    lastLi.textContent = 'Привіт, мене звуть Mike';

    const firstLi = ul.firstElementChild;
    firstLi.setAttribute('data-my-name', 'Mike');
    console.log(firstLi);

    ul.removeAttribute('data-dog-tail');
  };

  listChanges();
}());

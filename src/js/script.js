'use strict';

(function () {
  const form = document.querySelector('[data-todo-form]');
  const todoItemBox = document.querySelector('[data-todo-items]');
  const todoArr = [];
  const fields = {};
  let isFormSubmitDisabled = true;

  const createTodoItemBox = (config) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';
    wrapper.innerHTML = `<div class="taskWrapper">
                          <div class="taskHeading">${config.title}</div>
                         <div class="taskDescription">${config.description}</div>
                              </div>`;
    return wrapper;
  };

  const appendTodoItem = (element) => {
    todoItemBox.append(element);
  };

  const inputHandler = ({ target }) => {
    const formSubmitBtn = form.querySelector('button[type=submit]');

    if (target.value.trim().length) {
      if (!fields[target.name]) fields[target.name] = true;
    } else if (fields[target.name]) {
      fields[target.name] = false;
    }

    isFormSubmitDisabled = !Object.values(fields).every((field) => field);

    if (!isFormSubmitDisabled) {
      formSubmitBtn.removeAttribute('disabled');
    } else {
      formSubmitBtn.setAttribute('disabled', '');
    }
  };

  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach((input) => {
    input.addEventListener('input', inputHandler);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {};
    for (const input of inputs) {
      if (!input.value.trim()) throw new Error('All fields must be filled in');
      data[input.name] = input.value;
    }

    const todoItem = createTodoItemBox(data);
    appendTodoItem(todoItem);
    todoArr.push(data);
    form.reset();

    Object.keys(fields).forEach((key) => {
      fields[key] = false;
    });
    isFormSubmitDisabled = true;
    form.querySelector('button[type=submit]').setAttribute('disabled', '');
  });
}());

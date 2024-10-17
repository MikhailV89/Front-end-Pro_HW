'use strict';

class EventManager {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  off(event, callback) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter((cb) => cb !== callback);
  }

  trigger(event, ...args) {
    if (!this.events[event]) return;

    this.events[event].forEach((callback) => {
      callback.apply(this, args);
    });
  }
}

const manager = new EventManager();

function greet(name) {
  console.log(`Hello, ${name}!`);
}

manager.on('greet', greet);
manager.trigger('greet', 'Mike');

manager.off('greet', greet);
manager.trigger('greet', 'Bill');

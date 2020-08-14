import shoppingList from './shopping-list.js';
import store from './store.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
import store from './store.js';
import item from './item.js';
import shoppingList from './shopping-list.js';

function main() {
  store.addItem('bananas');
  store.addItem('apples');
  store.addItem('rice');
  // grab the id of the first store item (bananas)
  let id = store.items[0].id;
  // delete this item from the store
  store.findAndDelete(id);
  shoppingList.render();
  shoppingList.bindEventListeners();
  shoppingList.render();
}

$(main);


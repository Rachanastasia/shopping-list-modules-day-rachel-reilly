'use strict';
import item from './item.js'

const store = {
    items: [],
    hideCheckedItems: false
};

console.log(store.items)



function findById(id) {
    return store.items.find(function (item) {
        if (item.id === item) {
            return item;
        }
    });
}

function addItem(name) {
    let toPush = item.create(name)
    try {
        validateName(name);
        store.items.push(toPush);

    } catch {
        console.log('Cannot add item: ');
    }
}


function findAndToggleChecked(id) {
    this.findById(checked) = !this.findById(checked)
}

function findAndUpdateName(id, newName) {
    try {
        validateName(newName);
        findById(id);
    } catch {
        console.log('Cannot update name:')
    }
}

function findAndDelete(id) {
    const index = this.items.findIndex(function (item) {
        item.id === id;
    })

    this.items.splice(index, 1);
}

export default {
    store,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
};
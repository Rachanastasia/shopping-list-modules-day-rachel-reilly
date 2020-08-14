'use strict';
import item from './item.js'

const store = {
    items : [],
    hideCheckedItems: false
};




function findById (id){
    return store.items.find(function (item){
        if (item.id === item){
            return item;
        }
    });
}

function addItem(name){
    try{
        validateName(name);
        this.items.push(create(name));
    } catch {
        console.log('Cannot add item: ');
    }
}

function findAndToggleChecked(id){
    this.findById(checked) = !this.findById(checked)
}

function findAndUpdateName(id, newName){
    try{
        validateName(newName);
        findById(id);
    } catch {
        console.log('Cannot update name:')
    }
}

function findAndDelete(id){
    const index = this.items.findIndex(function (item){
        item.id === id;
    })

    this.items.splice(index, 1);
}

export default{
    store,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
};
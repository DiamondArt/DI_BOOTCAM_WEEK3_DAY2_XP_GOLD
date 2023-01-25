/***********************************************************************************
 * Exercise3 XP gold   : 
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @description : 
 * Shopping  list
 * **********************************************************************************/ 

let shoppingList = []

let form = document.createElement('form')
let textInput = document.createElement('input')
let button = document.createElement('button')

textInput.type = 'text'
form.appendChild(textInput)

button.textContent = 'Add Item'
button.type = 'button'
form.appendChild(button)

document.body.firstElementChild.appendChild(form)
button.addEventListener("click", addItem)

/**
 * @function addItem
 * @description:
 */
function addItem() {
    if((text = textInput.value.trim()).length) {
        shoppingList.push(text)
    }
    textInput.value = ''
    console.log("Shopping List:", shoppingList)
}

let buttonClear = document.createElement('button')
form.appendChild(buttonClear)
buttonClear.textContent = 'Clear All'
buttonClear.type = 'button'
buttonClear.addEventListener('click', clearAll)

/**
 * @function clearAll
 * @description:
 */
function clearAll() {
    shoppingList = [];
    console.log("Shopping List:", shoppingList)
}
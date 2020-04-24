const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

// these are the 2 variable sused to track the items
let itemCount = 0
let uncheckedCount = 0

// fucntion to updte the Item count
// we pass a value "1"
function updateItemCount(value) {
  itemCount += value
  itemCountSpan.innerHTML = itemCount
}

// function to update the Unchecked item
// we pass a value "1"
function updateUncheckedCount(value) {
  uncheckedCount += value
  uncheckedCountSpan.innerHTML = uncheckedCount
}

// the main function to add todo item
function newTodo() {
  const todoText = prompt("Enter the todo text", "")
  if (todoText) {
    const todoItem = createTodo(todoText)
    list.appendChild(todoItem)
    updateItemCount(1)
    updateUncheckedCount(1)
  }
}

// this function creates the todo item
function createTodo(todoText) {

    // creating delete button 
    // linking with remove function
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'DELETE'
    deleteButton.className = classNames.TODO_DELETE
    deleteButton.onclick = removeTodo // The function will be invoke when press the button

    // creating checkbox 
    // linking with checkbox change listener function
    const checkbox = document.createElement('input')
    checkbox.className = classNames.TODO_CHECKBOX
    checkbox.type = 'checkbox' // Checkbox is just one type of input in HTML. 
    checkbox.onchange = checkboxListener // The function will be invoke when change the checkbox status

    // creating span
    const span = document.createElement('span')
    span.className = classNames.TODO_TEXT
    span.textContent = todoText
    
    // The parent of all three element above
    const li = document.createElement('li')
    li.className = classNames.TODO_ITEM
    
    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(deleteButton)

    return li
}

// The function will be call when trigger any checkbox (changing status)
function checkboxListener() {
  if (this.checked) updateUncheckedCount(-1) // "this" here is the object which called it. i.e. checkbox
  else updateUncheckedCount(1)
}

// this function will delete the todo item
function removeTodo() {
  const todo = this.parentNode // this.parentNode is the "li" of the deleteButton
  updateItemCount(-1)
  if (!todo.children[1].checked) { // the second element of "li" is checkbox
    updateUncheckedCount(-1) // update unchecked count only when it's unchecked
  }
  list.removeChild(todo) // Remove that todo
}
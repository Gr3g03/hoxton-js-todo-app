// How to work with state:
// 1. create some state
// 2. render the app based on the state
// 3. update the state
// 4. rerender the app based on the new state


const todoCompletedULSection = document.querySelector('.completed-list')
const showCompletedCheckbox = document.querySelector('.show-completed-checkbox')
const addTodoForm = document.querySelector('.add-item')
const todoList = document.querySelector('.todo-list')

const state = {
    todos : [
        {
        name: 'potato' ,
        condition : true
    },
    {
        name: 'milk' ,
        condition : false
    },
    {
        name: 'tomato' ,
        condition : false
    },
    {
        name: 'potato' ,
        condition : true
    }
  ],
}


function addTodo(todo){
   state.todos.push(todo)
}

function togleTodos(todo){
    todo.completed = !todo.completed
}

function deleteTodo(text){
   state.todos =  state.todos.filter(function(todo){
        return todo.name !== text
    }) 
}

function completedTodos(){
    return  state.todos.filter(function(todo){
    return todo.condition
  })
  }

  function incompletedTodos(){
    return state.todos.filter(function (todo){
    return !todo.condition
 })
 }


// function todoList(){

// }


function todoCompletedSection (){
    const incompletedTodo = incompletedTodos()
    // todoList.innerHTML = ``
    todoCompletedULSection.innerHTML =``

    for(const todo of incompletedTodo){
        const todoLiEL = document.createElement('li')
        todoLiEL.setAttribute('class' , 'todo')
        const todoDivEl = document.createElement('div')
        todoDivEl.setAttribute('class' , 'completed-section')
    
        const todoinputEl = document.createElement('input')
        todoinputEl.setAttribute('class' , 'completed-checkbox')
        todoinputEl.setAttribute('type' , 'checkbox')

        todoDivEl.append(todoinputEl)
    
    
        const textsectionDiv = document.createElement('div')
        textsectionDiv.setAttribute('class' , 'text-section')
    
        const textPElement = document.createElement('p')
        textPElement.setAttribute('class' , 'text')
        textPElement.textContent = todo.name
    
        textsectionDiv.append(textPElement)
    
        const buttonDivElement = document.createElement('div')
        buttonDivElement.setAttribute('class', 'button-section')
    
        const buttonEditElement = document.createElement("button")
        buttonEditElement.setAttribute('class', 'edit')
        buttonEditElement.textContent ='Edit'
    
        const buttonDeleteElement = document.createElement("button")
        buttonDeleteElement.setAttribute('class', 'delete')
        buttonDeleteElement.textContent ='Delete'
    
        buttonDivElement.append(buttonEditElement, buttonDeleteElement)
        todoLiEL.append(todoDivEl,textsectionDiv, buttonDivElement)
        // todoListUl.append(todoLiEL)
        todoinputEl.checked = todo.condition
        todoinputEl.addEventListener('click', function () {
            togleTodos(todo)
            render()
          })
          todoCompletedULSection.append(todoLiEL)
    }
}

function todoIcnompletedSection (){
    const incompletedTodo = incompletedTodos()
    todoList.innerHTML = ``
    // todoCompletedULSection.innerHTML =``

    for(const todo of incompletedTodo){
        const todoLiEL = document.createElement('li')
        todoLiEL.setAttribute('class' , 'todo')
        const todoDivEl = document.createElement('div')
        todoDivEl.setAttribute('class' , 'completed-section')
    
        const todoinputEl = document.createElement('input')
        todoinputEl.setAttribute('class' , 'completed-checkbox')
        todoinputEl.setAttribute('type' , 'checkbox')

        todoDivEl.append(todoinputEl)
    
    
        const textsectionDiv = document.createElement('div')
        textsectionDiv.setAttribute('class' , 'text-section')
    
        const textPElement = document.createElement('p')
        textPElement.setAttribute('class' , 'text')
        textPElement.textContent = todo.name
    
        textsectionDiv.append(textPElement)
    
        const buttonDivElement = document.createElement('div')
        buttonDivElement.setAttribute('class', 'button-section')
    
        const buttonEditElement = document.createElement("button")
        buttonEditElement.setAttribute('class', 'edit')
        buttonEditElement.textContent ='Edit'
    
        const buttonDeleteElement = document.createElement("button")
        buttonDeleteElement.setAttribute('class', 'delete')
        buttonDeleteElement.textContent ='Delete'
    
        buttonDivElement.append(buttonEditElement, buttonDeleteElement)
        todoLiEL.append(todoDivEl,textsectionDiv, buttonDivElement)
        // todoListUl.append(todoLiEL)
        todoinputEl.checked = todo.condition
        todoinputEl.addEventListener('click', function () {
            togleTodos(todo)
            render()
          })
          todoCompletedULSection.append(todoLiEL)
    }

}

function render(){
    todoIcnompletedSection()
    todoCompletedSection()
}

render()





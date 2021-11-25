// How to work with state:
// 1. create some state
// 2. render the app based on the state
// 3. update the state
// 4. rerender the app based on the new state


const todoState = {
    todos : {
        name: 'potato' ,
        condition : true
    }

}

function todoList(todoState){
    const todoFormSection = document.querySelector('.add-todo-section')

    const todoForm = document.querySelector('.add-item')

    const addTodo = document.querySelector('.text-input')
   
    const todobuttoEL = document.querySelector('.submit-button')
     
    todoForm.append(addTodo, todobuttoEL )
    todoFormSection.append(todoForm)

}
// todoList(todoState)


function todoSection(todoState){
    const todoListSection = document.querySelector('.todo-section')
    const todoListUl = document.querySelector('.todo-list')

    todoListSection.append(todoListUl)
}


function todoCompledet(todoState){
    const todoCompletedSection = document.querySelector('.completed-section')
    const todoCompletedULSection = document.querySelector('.completed-list')
    todoCompletedSection.append(todoCompletedULSection)
}



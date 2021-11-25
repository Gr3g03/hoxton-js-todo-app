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

function todoList(){
    const todoFormSection = document.querySelector('.add-todo-section')

    const todoForm = document.querySelector('.add-item')
    todoForm.addEventListener('submit', function(event){
        event.preventDefault
    })

    const addTodo = document.querySelector('.text-input')
   
    const todobuttoEL = document.querySelector('.submit-button')
    todobuttoEL.addEventListener('click', function(){
        todoSection()
    })
     
    todoForm.append(addTodo, todobuttoEL )
    todoFormSection.append(todoForm)


}
// todoList(todoState)


function todoSection(){
    const todoListSection = document.querySelector('.todo-section')
    const todoListUl = document.querySelector('.todo-list')

    todoListSection.append(todoListUl)

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
    textPElement.textContent = 'Go Shoping'

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
    todoListUl.append(todoLiEL)
}


function todoCompledet(todoState){
    const todoCompletedSection = document.querySelector('.completed-section')
    const todoCompletedULSection = document.querySelector('.completed-list')
    todoCompletedSection.append(todoCompletedULSection)

    todoList()
}


todoSection()


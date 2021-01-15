// primeiro se cria os seletores

const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector('.todo_list');
const filter = document.querySelector('.filter_todo');

//método anexa um manipulador de eventos ao elemento especificado
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filter.addEventListener("click", filterTodo);

// funções

function addTodo(event) {
    event.preventDefault();
    //div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //list
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value; //pega o que foi escrito no campo do formulário
    newTodo.classList.add('todo_item');//adiciona o que foi escrito na lista;
    todoDiv.appendChild(newTodo);//cria uma nova div com o valor do newTodo;
    if(todoInput.value === ""){
        return null;
    }

    //botao de checagem das atividades

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);

    //delete btn
    const deletedButton = document.createElement('button');
    deletedButton.innerHTML = '<i class="fas fa-trash"></i>';
    deletedButton.classList.add('delete_btn');
    todoDiv.appendChild(deletedButton);

    //
    todoList.appendChild(todoDiv);

    //limpar o campo de imput
    todoInput.value = "";
}

function deleteCheck(ev) { 
    const item = ev.target; //The target event property returns the element that triggered the event
    //delete
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement // The parentElement property returns the parent element of the specified element.
        //animação
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });

    }

    //complete activity
    if (item.classList[0] === "complete_btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")//select or unselect the activity completion
    }

}


    //filter

function filterTodo(ev){
    const todos = todoList.childNodes;
    for(let i = 0; i < todos.length; i++) {
        switch (ev.target.value) {
            case "All":
                todos[i].style.display = "flex";
                break;
            
            case "Completed":
                if (todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else { 
                    todos[i].style.display = "none";
                }
                break;

            case "Uncompleted":
                if(!todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            }
        }
    }
    


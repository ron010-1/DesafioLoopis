//selecao de elementos

const todoForm =document.querySelector("#todo-form");
const todoName = document.querySelector("#todo-name");
const todoDescription = document.querySelector("#todo-description");
const todoFavorite = document.querySelector("#favorite");
const todoNotFavorite = document.querySelector("#not-favorite");

// Funcoes
const saveTodo = (text) => {
    
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoName = document.createElement("h3")
    todoName.innerText = text;
    todo.appendChild(todoName);

    const todoDescription = document.createElement("p")
    todoDescription.innerText = text;
    todo.appendChild(todoDescription);

}
// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoName.value;

    if (inputValue) {
        saveTodo(inputValue)
    }
});

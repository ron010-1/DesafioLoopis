const todoForm = document.querySelector("#todo-form");
const todoName = document.querySelector("#todo-name");
const todoDescription = document.querySelector("#todo-description");
const todoFavorite = document.querySelector("#favorite");
const todoNotFavorite = document.querySelector("#not-favorite");
const fatherButtons = document.querySelector('.father-buttons');
const cards = document.querySelector('.card');

let lista = [];
let favorito = false;


const getValues = () => {
    const listInMemory = JSON.parse(window.localStorage.getItem("jogos"));
    if (Array.isArray(listInMemory)) {
        lista = [...listInMemory];
    }
}


const saveValues = () => {
    window.localStorage.setItem("jogos", JSON.stringify(lista));
}


fatherButtons.addEventListener('change', function (event) {
    if (event.target.type === 'radio') {
        const valorSelecionado = event.target.value;
        favorito = valorSelecionado == "sim" ? true:false;
        console.log(favorito);
    }
});

const submit = () => {
    const nome = todoName.value;
    const descricao = todoDescription.value;
    
    const jogo = { nome, descricao, favorito};
    lista.push(jogo);
    console.log(lista);

    todoName.value = '';
    todoDescription.value = '';
    favorito = false;

    saveValues(); 
    getValues(); 

    cards.innerHTML = 'teste'
}
getValues();
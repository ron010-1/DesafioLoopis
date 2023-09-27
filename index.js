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
        const favoritos = [];
        const naoFavoritos = [];
        let listaJogos = [];
    
        listInMemory.map((value)=> {
            if(value.favorito){
                favoritos.push(value);
            }else {
                naoFavoritos.push(value);
            }
        })
        listaJogos = [...favoritos,...naoFavoritos];
        lista = [...listInMemory];
    }
    
}


const saveValues = () => {

    const favoritos = [];
    const naoFavoritos = [];
    let listaJogos = [];

    lista.map((value)=> {
        if(value.favorito){
            favoritos.push(value);
        }else {
            naoFavoritos.push(value);
        }
    })
    listaJogos = [...favoritos,...naoFavoritos];

    window.localStorage.setItem("jogos", JSON.stringify(listaJogos));
    console.log(listaJogos);
}


fatherButtons.addEventListener('change', function (event) {
    if (event.target.type === 'radio') {
        const valorSelecionado = event.target.value;
        favorito = valorSelecionado == "sim" ? true:false;
        console.log(favorito);
    }
});

function createGameCard(jogo, index) {
    const cardHTML = `
      <div class="${jogo.favorito ? "jogofav":"lista"}">
      <div>
      <div class="infogames">
          <div class="figurejoistick">
              <img src="./imagens/joystick-svgrepo-com 1.png" alt="joystick-svgrepo-com">
          </div>
          <div class="todo">
              <h2>${jogo.nome}</h2>
              <p>${jogo.descricao}</p>
          </div>
          </div>
        </div>
          <div>
          <div class="lixeira">
              <button class="remove-todo" type="button" style="background-color:#10086A; all:unset; onclick ="removeGame(this)>
                  <img src="./imagens/trash.png" alt="lixeira" class = "imgLixeira" onclick = "deletarClick(${index})" ></button>
          </div>
          <div class="favoritIcon">
              <button class="favorict-todo" type="button" style="background-color:#10086A; all:unset;">
                  <img src="${jogo.favorito ? './imagens/Estrela-preenchida.png' : './imagens/estrela_vazia.png'}" class="imgEstrela" alt="estrela" 
                  onclick = "atualizarClickFavoritos(${index})" ></button>
          </div>
          </div>
      </div>
    `;
    return cardHTML;
  }
  function renderGameCards() {
    const cardsContainer = document.querySelector('.roll');
  
    // Limpa os cards existentes
    cardsContainer.innerHTML = '';
  
    // Percorre a lista de jogos e cria um card para cada um

    lista.forEach((jogo, index) => {
      const card = createGameCard(jogo, index);
      cardsContainer.insertAdjacentHTML('beforeend', card);
    });
  }
  
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
    renderGameCards();
    cards.innerHTML = 'teste'
}
getValues();
renderGameCards();


function atualizarClickFavoritos(index){
    const jogoClick = lista[index];
    lista[index].favorito = jogoClick.favorito ? false : true

    const favoritos = [];
    const naoFavoritos = [];
    let listaJogos = [];

    lista.map((value)=> {
        if(value.favorito){
            favoritos.push(value);
        }else {
            naoFavoritos.push(value);
        }
    })
    listaJogos = [...favoritos,...naoFavoritos];

    lista.length = 0;
    lista = [...listaJogos]
    saveValues();
    renderGameCards();
}

function deletarClick(index){
    lista.splice(index,1);

    saveValues();
    renderGameCards();
}
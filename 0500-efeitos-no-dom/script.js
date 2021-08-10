/* dataset é uma propriedade do construtor HTMLElement. Facilita a comunicacao entre o DOM, o JS e o CSS
   Ex de aplicacao no 1o h1
   <h1 class="titulo" data-cor="azul">Animais Fantásticos</h1>
*/
//selecione o dataset de h1 de 3 maneiras, atribuir um novo data-font e deletar
const h1 = document.querySelector('h1');
h1.dataset.cor; // "azul"
const h1_ = document.querySelector('[data-cor]');
h1_.dataset.cor; // "azul"
const _h1 = document.querySelector('[data-cor="azul"]');
_h1.dataset.cor;  // "azul"

h1.dataset.font = "bold";  // inserido no element

//delete h1.dataset.font;  // deletou do element

/**
 * data atributes
 * Seleciona uma lista de divs com o atributo [data-anima], faz um foreach adicionando uma classe com o conteudo do data-anima
 */
const divs = document.querySelectorAll("[data-anima]");
  divs.forEach((item) => {
    item.classList.add(item.dataset.anima);
});


/*** Exercicios ***/
// 1) Adicione um atributo data-anime="show-down" e data-anime="show-right", randomicamente, a todos as section's com descricão dos animais.

// Resposta -> linha 18 em animacoes.js e linha 253 a 281 em style.css 


// 2) Utilizando estes atributos, adicione a classe show-down ou show-right a sua respectiva section assim que a mesma aparecer na tela (animacao tab)

// Resposta-> linha 18 em animacoes.js

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.

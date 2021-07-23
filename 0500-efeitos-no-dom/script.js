/**
 * 
   <div data-cor="azul" data-width="500">TESTE DATASET</div>
   <div data-anima="left" data-tempo="1000">Div 1</div>
   <div data-anima="right" data-tempo="2000">Div 2</div>

 * Seleciona um elemento, adiciona um atributo com o dataset e remove o atributo com delete
 * daí lá no css pode selecionar o atributo [data-font] { ... }
 * O dataset tb aceita composto tipo data-scroll-up mas tem que definir com camelCase
 */
//const div = document.querySelector("div");
//div.dataset.cor;   //azul
//div.dataset.font = "arial";
//delete div.dataset.font;
//div.dataset.scrollUp = "up";

/**
 * data atributes
 * Seleciona uma lista de divs com o atributo [data-anima], faz um foreach adicionando uma classe com o
 * conteudo do data-anima
 */

//const divs = document.querySelectorAll("[data-anima]");
//divs.forEach((item) => {
//  item.classList.add(item.dataset.anima);
//});

/**
 * Exercicios
 */

// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Resposta-> inserir manualmente o data-anime nas sections

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// Resposta-> no animacoes.js

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.

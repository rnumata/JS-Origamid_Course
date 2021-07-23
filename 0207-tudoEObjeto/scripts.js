var nomeMaisculo = "REGIS";

var nomeMinusculo = nomeMaisculo.toLowerCase(nomeMaisculo);

/**
 * document é o html inteiro. do <html> ao </html>
 * .querySelector(".btn") é um metodo dodocumente que seleciona a tag que tem esta classe
 * se digitar botao no console trará a tag <a href="#" class="btn">clicar</a>
 */
var botao = document.querySelector(".btn");

//Agora o botao pode usar os metodos do document. Pex o addEventListener
botao.addEventListener("click", function () {
  console.log("Clicou no botao");
});

// Podemos inserir uma classe na tag
botao.classList.add("novaClasse");

//Descobrir o id da tag selecionada
botao.id;

/**
 * Exercicios
 */

// nomeie 3 propriedades ou métodos de strings
var nome = "teste";
console.log(typeof nome);
nome.toLowerCase;
nome.toUpperCase;
nome.length;

// nomeie 5 propriedades ou métodos de elementos do DOM
var elementosDOM = document.querySelector(".btn");
/**
 * elementosDOM.addEventListener();
 * elementosDOM.appendChild();
 *  elementosDOM.id
 */

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

var clip = document.querySelector(".clip");
clip.addEventListener("click", function () {
  document.execCommand("copy");
});

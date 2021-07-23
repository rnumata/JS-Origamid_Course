const h1selecionado = document.querySelector("h1");

// A partir de agora pode ser acessado os metodos e propriedades de h1selesionado

console.log(h1selecionado.classList); // Lista todas as classes no objeto
console.log(h1selecionado.innerText); // lista o que está esxcrito na tag

const classesnoH1 = h1selecionado.classList; //Posso atribuir a uma variavel
console.log(classesnoH1);

//
h1selecionado.addEventListener("click", function () {
  console.log("Clicou em", h1selecionado.innerText);
});

//
function callBackh1() {
  console.log("Clicou em", h1selecionado.className);
}
h1selecionado.addEventListener("click", callBackh1);

/*
 * Exercicios
 */
// Retorne o url da página atual utilizando o objeto window
const exe1 = window.location.href;
console.log("url => ", exe1);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const exe2 = document.querySelector(".ativo");
console.log("1o elemento que tem a classe ativo => ", exe2);
console.log("e tem como texto => ", exe2.innerText);
// Retorne a linguagem do navegador
const exe3 = window.navigator.language;
console.log("Linguagem do navegador => ", exe3);
// Retorne a largura da janela
console.log(window.screen.width);
console.log(window.innerWidth);

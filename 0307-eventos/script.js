// Selecionar a 1a imagem, adicionar um evento de mouseover nela e ativar a function anonima de console.log
const onMouseImg = document.querySelector("img");
onMouseImg.addEventListener("mouseover", function () {
  console.log("passou mouse");
});
//ou com a function declarada separadamente
const h2 = document.querySelector("h2");
function name() {
  window.alert("Clicou no h2");
}
h2.addEventListener("click", name);

//parametro event é um Obj do evento que tem propriedades e metodos
//Adcionar um evento e mostrar a tecla acionada no teclado
function tecla(event) {
  console.log(`Apertou a tecla ${event.key}`);
}
window.addEventListener("keydown", tecla);

//Adicionar um evento no window e mostrar a classe do elemento que foi clicado
//Clique num elemento que tenha classe pex
function elemento(e){
  console.log(e.srcElement.className);
}
window.addEventListener('click', elemento);


//Selecionar o p do elemento com a classe .copy e mostrar no console o objeto event (tem suas propriedades e metodos)
const p = document.querySelector(".copy p");
function evento(event) {
  console.log(`innerText do p : ${event.srcElement.innerText}`);
}
p.addEventListener("click", evento);

// Selecionar o elemento com a classe .animais-lista (que é a ul com as lis) e mostrar qual imagem clicou
const imagens = document.querySelector(".animais-lista");
function evento2(event) {
  console.log("target =>", event.target);
}
imagens.addEventListener("click", evento2);

// PreventDefault nao deixa o link a href sair da página e retorna um objeto
const linkExterno = document.querySelector("a[href^='http']");
function handle(event) {
  event.preventDefault();
  console.log(event);
}
linkExterno.addEventListener("click", handle);

/*
 * O addeventListener só é aplicado a um item.
 * quando tem uma lista é necessário fazer um foreach pelos itens para aplicar o addeventlistener
 */
const todasImgs = document.querySelectorAll("img");
function callback(event) {
  const src = event.currentTarget.getAttribute("src");
  console.log("src =>", src);
}
todasImgs.forEach((img) => {
  img.addEventListener("click", callback);
});

const paragrafos = document.querySelectorAll("p");
paragrafos.forEach((p)=> {
  p.addEventListener("click", cliqueNoP);
})
function cliqueNoP(e){
  const conteudo = e.srcElement.innerText;
  console.log(conteudo);
}

//Exercicios
console.log("----Exercicios------");

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll("a[href^='#']");
function clickLinkInterno(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.toggle("ativo");
}
linksInternos.forEach((link) => {
  link.addEventListener("click", clickLinkInterno);
});
// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosItens = document.querySelectorAll("body *");
function verificador(event) {
  console.log(event.target);
  //event.target.remove();
}
todosItens.forEach((item) => {
  item.addEventListener("click", verificador);
});
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
/**
 * resposta na linha 79
 */

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function teclapressionada(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}
window.addEventListener("keydown", teclapressionada);

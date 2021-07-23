const menu = document.querySelector(".menu"); //seleciona o elemento com a classe menu

console.log("menu :", menu);
console.log("menu.className : ",menu.className);
console.log("menu.classList : ",menu.classList);

menu.classList.add("ativo"); //adiciona uma classe
menu.classList.add("azul", "vermelho"); //adiciona duas classes
menu.classList.remove("azul", "vermelho"); //remove
menu.classList.toggle("mobile"); //se tiver mobile ele retira. Se não tiver ele adiciona
menu.classList.toggle("mobile"); //se tiver mobile ele retira. Se não tiver ele adiciona

if (menu.classList.contains("ativo")) {
  menu.classList.add("marinho");
}
menu.classList.replace("ativo", "inativo");

//
console.log("----");

const animais = document.querySelector(".animais");
console.log("querySelector .animais :", animais);

const todosAtributos = animais.attributes;
const primeiroAtributo = animais.attributes[0];
const segundoAtributo = animais.attributes[1];
console.log(todosAtributos); //imprime todos os atributos
console.log(primeiroAtributo); //imprime o 1o atributo: class="grid-section animais"
console.log(segundoAtributo); //imprime o 2o atributo: id="animais"

//
console.log("----");

const img = document.querySelector("img");
const srcImg = img.getAttribute("src");
console.log(srcImg);
img.setAttribute("Alt", "foto raposa"); //parametros (atributo e valor)

console.log("-----");

//Exercicios
// Adicione a classe ativo a todos os itens do menu
const todosItensdoMenu = document.querySelectorAll(".menu a");
todosItensdoMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
todosItensdoMenu.forEach((item) => {
  item.classList.remove("ativo");
});
todosItensdoMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const listaImagem = document.querySelectorAll("img");
listaImagem.forEach((item) => {
  if (item.hasAttribute("Alt")) {
    console.log("=>", item);
  }
});
// Modifique o href do link externo no menu
const selector = document.querySelector('a[href^="http"]');
selector.setAttribute("href", "https://www.google.com");

console.log("--------------");

const animais2 = document.querySelector("section");

animais2.attributes; // retorna todos os atributos
animais2.attributes[0]; // retorna o primeiro atributo

// selecionar o elemento pelo id
const elementoById = document.getElementById("animais");
console.log("getElementById animais =>", elementoById);
// selecionar o elemento pela classe. Retorna um htmlCollection
const elementoByClass = document.getElementsByClassName("copy");
console.log("getElementByClass copy =>", elementoByClass);
// selecionar o elemento pela tag. Retorna uum htmlCollection
const ul = document.getElementsByTagName("ul");
console.log("getElementByTagName => ", ul);
// pode aceesar o array pelo index
console.log("item do array por TagName => ",ul[2]);

//qyerySelector : Retorna o 1o elemento do document
//1o seletor CSS
const animais = document.querySelector("#animais");
console.log("animais=>", animais);
//1a lista UL
const primeiraUl = document.querySelector("ul");
console.log("querySelector 1a UL =>", primeiraUl);
//
const seletorCss = document.querySelector('[href^="css"]');
console.log("linkCss=>", seletorCss);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);
// Selecione a 1a .grid-section e desta o 1o li  !!!!!!!!
const primeiraGridSection = document.querySelector(".grid-section");
console.log("querySelector 1a .grid-section => ", primeiraGridSection);
const primeiraLi = primeiraGridSection.querySelector("li");
console.log("querySelector .grid-section 1a li =>", primeiraLi);
// Selecione todas as sections de <div class="animais-descricao">
const todasSections = document.querySelectorAll('.animais-descricao section');
// Selecione todos LIs de <ul class="animais-lista">
const todosLis = document.querySelectorAll('.animais-lista li');


// Exercicios //
// Retorne no console todas as imagens do site
const todasImg = document.querySelectorAll("img");
console.log("todas imgs", todasImg);
console.log("img index [1] ",todasImg[1]);
// Retorna todas as imagens que estao dentro da classe animais
const animaisImg = document.querySelectorAll(".animais img");
console.log("querySelectorAll imgs em .animais =>", animaisImg[1]);
// Retorne no console apenas as imagens que começaram com a palavra imagem (^ é o começa com)
const imgComPrimeira = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgComPrimeira);
// Selecione todos os links internos (onde o href começa ^ com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log("linkInterno=>", linkInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2naClasse = document.querySelector(".animais-descricao h2");
console.log("1o h2 na classe .animais-descricao => ", primeiroH2naClasse);
// Selecione todos os ps do documente e imprima o de index [2]
const terceiroP = document.querySelectorAll("p");
console.log("terceiro p", terceiroP[2]);
// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);
// Seleciona o elemento com a class
const menu = document.querySelector(".faq");

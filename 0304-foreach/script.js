//query para selecionar todas as img do site e retorna um array
const imagens = document.querySelectorAll("img");
console.log(imagens);

//1a forma de foreach com funcao anonima
imagens.forEach(function (item) {
  console.log(item);
});

//2a forma de foreach com arrow function
imagens.forEach((item) => {
  console.log(item);
});

//3a forma de foreach com um unico argumento e uma linha de codigo
imagens.forEach((item) => console.log(item));

//query usando html collection
const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos); // => transforma o html collection em array

titulosArray.forEach(function (item) {
  console.log(item);
});
titulosArray.forEach((item)=>{
  console.log(item);
})
titulosArray.forEach((item)=>console.log(item));

//Exercicios
// Mostre no console cada parágrado do site
console.log("// Mostre no console cada parágrado do site");
const todosParagrafos = document.querySelectorAll("p");
todosParagrafos.forEach((item) => console.log(item));
// Mostre o texto dos parágrafos no console
todosParagrafos.forEach((item) => console.log(item.innerText));
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

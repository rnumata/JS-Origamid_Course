const animaisLista = document.querySelector(".animais-lista");
console.log(animaisLista);
const ultimoLista = animaisLista.querySelector("li:last-child");
console.log(ultimoLista); //Selecionado o elemento .animais-lista, deste seleciona o ultimo filho

const contato = document.querySelector(".contato");
console.log(contato);
const titulo = contato.querySelector(".titulo"); //Selecionado o elemento .contato, deste seleciona o titulo(l15)
console.log(titulo);

const footer = document.querySelector(".copy");
console.log(footer);
//Mover o const titulo para após último filho de footer
footer.appendChild(titulo);

//Selecionar o h2 de .animais-descricao
const h2animaisdescricao = document.querySelector(".animais-descricao");
console.log(h2animaisdescricao);
const primeiroh2 = h2animaisdescricao.querySelector("h2");
console.log(primeiroh2);
// Selecionar o elemento faq
const faq = document.querySelector(".faq");
console.log(faq);
const faqlista = faq.querySelector(".faq-lista");
//Mover o primeiroh2 para faq antes do .faq-lista
faq.insertBefore(primeiroh2, faqlista);

/**
 * Criar elemento no DOM e inseri-lo
 */
const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo h1";
const dados = contato.querySelector(".dados");
contato.insertBefore(novoH1, dados);

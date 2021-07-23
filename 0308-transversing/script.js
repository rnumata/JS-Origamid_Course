// innerHtml, outerHtml e innerText
const h1 = document.querySelector('h1');
console.log('innerHtml :', h1.innerHTML);
console.log('outerHtml :', h1.outerHTML);
console.log('innerText :', h1.innerText);

// Transversing é navegar pelo DOM

//Selecionar a lista de animais e :
//o elemento pai dela (no caso a <section>)
const lista = document.querySelector('.animais-lista');
console.log('parent do elemento .animais-lista :', lista.parentElement);
//o proximo elemento a ela (no caso a Div )
console.log('elemento apos a lista :', lista.nextElementSibling);
//o elemento anterior a ela (no caso o h1)
console.log('elemento anterior a lista :', lista.previousElementSibling);
//os filhos da lista (no caso os Lis)
console.log('elemento(s) filho(s) da lista :', lista.children); //traz uma htmlcollection
//acessar o ultimo elemento
console.log('ultimo elemento :', lista.children[lista.children.length - 1]);
//ou com seletor css
console.log('ultimo elemento com seletor css :', lista.querySelector('li:last-child'));

// metodo appendChild move um elemento no DOM
// ex: mover o <h1 class="titulo">Contato</h1> que está em <section class="grid-section contato" id="contato"> para o ultimo filho de
//<section class="grid-section animais" id="animais">

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const animais1 = document.querySelector('.animais');
animais1.appendChild(titulo);
animais1.removeChild(titulo);//remove

//Create Element - cria um elemento
//Ex criar um elemento h1, definir um texto, adicionar uma Classe e inserir no .animais-descricao
const novoh1 = document.createElement('p');
novoh1.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
novoh1.classList.add('novoH1');
const animaisDescricao = document.querySelector('.animais-descricao');
animaisDescricao.appendChild(novoh1);


// 1- Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);
// 2- Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq .faq-lista dt");
//ou
const faq2 = document.querySelector(".faq");
const primeiraDt = faq2.querySelector("dt");
// 3- Selecione o DD referente ao primeiro DT
const primeiroDD = primeiraDt.nextElementSibling;
// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais");
faq.innerHTML = animais.innerHTML;

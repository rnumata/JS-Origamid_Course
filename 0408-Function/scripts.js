// 1- Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll("p");

// 1.1- com call
const totalCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  },
  0
);
console.log(totalCaracteres);

// 1.2 transformando o array-like em array
const paragrafosList = Array.from(paragrafos);
const totalCaracteres2 = paragrafosList.reduce((acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);
console.log(totalCaracteres2);

/**
 *  ----------------- IMPORTANTE !!! -----------------------
 */
// 2- Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  elemento.classList.add(classe);
  elemento.innerHTML = conteudo;
  return elemento;
}

const pAtivo = criarElemento("p", "ativo", "Este eh um teste"); //<p class="ativo">Este eh um teste</p>
console.log(pAtivo);

//  2.1- Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, "h1", "titulo"); //<h1 class="titulo"></h1>

const cursoJS = h1Titulo("cursos de Javascript"); //<h1 class="titulo">cursos de Javascript</h1>
console.log(cursoJS);

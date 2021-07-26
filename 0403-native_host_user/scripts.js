function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

//Forma para add funcao ao construtor
Pessoa.prototype.andar = function andar() {
  console.log(this.nome + " andou");
};

const teste = new Pessoa("Regis", 46);

//apos linha 7 o novo objeto pode acessar o metodo do construtor
teste.andar();

const Carro = {
  marca: "fiat",
  nome: "ideal",
  nadar: function () {
    return true;
  },
};

/**
 * Exercicios
 */

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
Pessoas.prototype.retornar = function () {
  return this.nome + " " + this.sobrenome;
};
const p1 = new Pessoas("Regis", "Numata", 46);
// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li;
console.log("constructor.name => " + li.constructor.name); //é um HTMLLIElement
console.log(HTMLLIElement.prototype); //acessa todos as propriedades e metodos que li pode usar

li.click;
console.log("constructor.name => " + li.click.constructor.name); //é uma funcao

li.innerText;
console.log("constructor.name => " + li.innerText.constructor.name); // é uma string
console.log("String => " + li.innerText.toUpperCase());

li.value;
console.log("constructor.name => " + li.value.constructor.name); //number

li.hidden;
console.log("constructor.name => " + li.hidden.constructor.name); //Boolean

li.offsetLeft; //number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //"Boolean" -> Logo é uma String.. e pode usar propriedades e metodos de String

const testeLiHidden = li.hidden.constructor.name;
console.log(testeLiHidden.constructor.name);

/**
 * Exercicios objetos nativos, host, user
 */

// Liste 5 objetos nativos
console.log(Object, String, Array, Function, Number);
// Liste 5 objetos do browser
console.log(Window, NodeList, HTMLCollection, Document, History);

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

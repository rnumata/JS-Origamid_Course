// Transforme o objeto abaixo em uma Constructor Function
function pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos
const pessoa1 = new pessoa("Joao", 20);
const pessoa2 = new pessoa("Maria", 25);
const pessoa3 = new pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.element = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((item) => {
      item.classList.toggle(classe);
    });
  };
}

const test = new Dom("li");
test.addClass("ativo");
test.removeClass("ativo");

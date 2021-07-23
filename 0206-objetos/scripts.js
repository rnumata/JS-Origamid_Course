//Objeto Pessoa
var pessoa = {
  nome: "Regis",
  sobrenome: "Numata",
};

console.log(typeof pessoa);
console.log(pessoa.sobrenome);

//Objeto calculos:  com uma propriedade e dois metodos 
var calculos = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return lado * this.lados;
  },
};
console.log(calculos.area(4));
console.log(calculos.perimetro(2));

//Objeto calculo com uma propriedade e dois metodos com outra sintaxe
var calculo = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return lado * this.lados;
  },
};

//Objeto
var menu = {
  tamanho: 100,
  cor: "preto",
};
//Atribuir a outra variavel a propriedade cor de menu
var color = menu.cor;
console.log(color);
//Adicionar propriedade ao objeto menu
menu.altura = 10;
console.log(menu);
//Adicionar uma funcao ao objeto
menu.mostrar = function () {
  console.log("Mostrando");
};

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var person = {
  nome: "Regis",
  sobrenome: "Numata",
  pai: true,
};

// Crie um método no objeto anterior, que mostre o seu nome completo
person.estudar = function () {
  console.log("estudando");
};
person.mostar = function () {
  console.log(this.nome + this.sobrenome);
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "Labrador",
  cor: "preto",
  idade: 10,
  latir(sexo) {
    if (sexo === "M") {
      return console.log("Latindo");
    } else {
      return console.log("deitado");
    }
  },
};

cachorro.latir('M');
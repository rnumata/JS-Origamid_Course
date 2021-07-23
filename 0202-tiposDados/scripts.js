var nome = "Regis";
var sobrenome = "Numata";
var idade = 46;
/*
typeof verifica o tipo do dado
Vai ser usado como uma validacao do input do usuario
*/
console.log(typeof nome);
console.log(typeof idade);

var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

var nomeIdade = nome + idade;
console.log(nomeIdade);

var frase = "O Aluno " + nomeCompleto + " tem " + idade;
console.log(frase);

//Template String
var frase1 = `O Aluno ${nomeCompleto} tem ${idade} ou ${40 + 6} anos`;
console.log(frase1);

var fraseComslash = "O Aluno é o \"melhor\" ";
console.log(fraseComslash);

// Declare uma variável contendo uma string
var nome2 = "Regis";
// Declare uma variável contendo um número dentro de uma string
var idade2 = "46";
// Declare uma variável com a sua idade
var idade3 = 46;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nomeTotal = nome2 + idade3;
// Coloque a seguinte frase em uma variável: It's time
var frase2 = "It's time";
var frase3 = "It's time";
var frase4 = `It's time`;
// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome2);

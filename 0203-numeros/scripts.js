var numero = 2e10;
var numeroDecimal = 2e-2; //0.02
console.log(numero);

var expoente = 2 ** 4;
console.log(expoente);

var divisaoDeString = "100" / 2;
console.log(divisaoDeString);

//NaN
var notaNumber = "O numero 10" / 2;
console.log(notaNumber);
console.log(isNaN(notaNumber));

var dvi = (20 / 2) * 5;
console.log(dvi);

//Operadores Unarios

var incMais = 1;
console.log(incMais++);
console.log(incMais);

var inc = 1;
inc++;
console.log("inc++ = " + inc);

var maisInc = 1;
console.log(++maisInc);
console.log(maisInc);

//Conversao de String para numero

var idade = +"28";
console.log("Se colocar um + na frente de um numero converte = >"+ typeof idade);

var valor = "10";
var valor2 = 10;
console.log("Concatena= " + valor + valor2);
console.log(+valor + valor2);

var valor3 = +"10";
console.log(valor3);
console.log(typeof valor3);

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(35);
// Crie duas expressões que retornem NaN
var naoNumero = "O Num 10" / 2;
console.log(naoNumero);
console.log(isNaN(naoNumero));

var naoNumero2 = 100 / "qtde de emb 2";
console.log(naoNumero);
console.log(isNaN(naoNumero2));
// Somar a string '200' com o número 50 e retornar 250
var vlrSrting = "200";
var vlrNumero = 50;
console.log(+vlrSrting + vlrNumero);

// Incremente o número 5 e retorne o seu valor incrementado
var inc2 = 5;
++inc2;
console.log(inc2);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
var pesoPorDois = +numero / 2;
console.log(pesoPorDois);

//parseFloat e parseInt (converte string em number)
const valorFloat = '100.10';
console.log(Number.parseFloat(valorFloat)); //100.1
console.log(+valorFloat); //100.1
const valorReais = '100.1 reais';
console.log(parseFloat(valorReais)); //100.1

const valorInt = '100.1';
console.log(parseInt(valorInt)); //100

//toFixed (arredonda com base no total de casas decimais do argumento)
const precoArredondado = 10.66542;
console.log(+precoArredondado.toFixed(2)); //10.67 tem que converter para float pois retorna uma string
console.log(+precoArredondado.toFixed()); //11

//toLocaleString(lang,{style: , currency : })
const preco = 59.49;
const dolar = preco.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
}); 
console.log(dolar); // $59.49 string

const real = preco.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
}); 
console.log(real); // R$ 59,49 string


// OBJETO Math
//Sorteia numeros randomicos de 0 a 1000
const valorRandom = Math.random() * 1000;
console.log(parseInt(valorRandom));

Math.ceil(4.3); // 5
Math.floor(4.8); // 4

Math.max(5, 3, 10, 42, 2); // 42
Math.min(5, 3, 10, 42, 2); // 2

Math.random(); // 0.XXX aleatorio de 0 a 1
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

// Número random entre 50 e 10
//Math.floor(Math.random() * (max - min + 1)) + min;
const maxEntre = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
console.log(maxEntre);



/**
 * Exercícios
 */

//1- Retorne um número aleatório
// entre 1050 e 2000
const entreNumeros = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(`Numero entre 1050 e 2000 => ${entreNumeros}`);

//2- Retorne o maior número da lista abaixo
const numeros = "64, 5, 50, 8, 9";
const numerosLista = numeros.split(", ");
const numeroMax = Math.max(...numerosLista); // !!! IMPORTANTE. Transforma array de stirng em numeros
console.log(numeroMax);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPrecos(preco) {
  preco = +preco.toUpperCase().replace(",", ".").replace("R$", "").trim();
  preco = +preco.toFixed(2);
  return preco;
}
limparPrecos(listaPrecos[3]);

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPrecos(preco);
});
console.log(
  "Total => " +
    soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);

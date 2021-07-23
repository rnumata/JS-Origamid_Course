const preco = 59.49;
const dolar = preco.toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
}); // $59.49
const real = preco.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
}); // R$ 59,49
console.log(dolar, real);

//Sorteia numeros randomicos de 0 a 1000
const valorRandom = Math.random() * 1000;
console.log(parseInt(valorRandom));

Math.max(5, 3, 10, 42, 2); // 42
Math.min(5, 3, 10, 42, 2); // 2

Math.random(); // 0.XXX
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

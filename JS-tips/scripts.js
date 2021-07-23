/*
 * Exemplo 1 => shift()
 */

const frutas = ["Maçã", "Uva", "Banana", "Mamão"];
console.log(`array original => ${frutas}`);

//uso do shift retira o primeiro item do array
const primeiroItem = frutas.shift();
console.log(`array aplicado shift() ${frutas}`);

/**
 * Exemplo 2 => pop()
 */

const frutas2 = ["Maçã", "Uva", "Banana", "Mamão"];
console.log(`array original => ${frutas2}`);

//uso do pop retira ultimo item do array
const ultimoItem = frutas2.pop();
console.log(`array aplicado pop() ${frutas2}`);

/**
 * Exemplo 3 => splice()
 * remove o item do index e + quantos itens for passado de parametro. Nesta caso, somente + 1
 */
const frutas3 = ["Maçã", "Uva", "Banana", "Mamão"];
console.log(`array original => ${frutas3}`);
const indexDoItem = frutas3.indexOf("Banana");
const removeItemdoIndex = frutas3.splice(indexDoItem, 1);
console.log(`array aplicado splice no item escolhido => ${frutas3}`);

/**
 * Exemplo 4 => slice() que cria outro array baseado nos parametros
 * vai copiar da uva(indexdaUva) até o mamão(indexdaUva+3)
 */

const frutas4 = ["Maçã", "Uva", "Banana", "Mamão"];
console.log(`array original ${frutas4}`);
const indexdaUva = frutas4.indexOf("Uva");
const removeItem = frutas4.slice(indexdaUva, indexdaUva + 3);
console.log(`array aplicado o slice ${removeItem}`);

/**
 * Exemplo 5 => console.time mede o tempo da execução de um loop ou .map()
 */

function temporizador() {
  for (let index = 0; index < 10; index++) {
    console.log(index);
  }
}
console.time("temporizador");
temporizador();
console.timeEnd("temporizador");

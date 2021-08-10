/*
 * Aula 0406 - Array1
 */

//metodo de array
const arrayTeste = [];
console.log(Array.isArray(arrayTeste));// true

//Metodos de Array Modificadores (shift, pop, push, unshift)
const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// shift() - Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValorRemovido = comidas.shift();
console.log(primeiroValorRemovido); //pizza
// pop() - Remova o último valor de comidas e coloque em uma variável
const ultimoValorRemovido = comidas.pop(); 
console.log(ultimoValorRemovido); //Macarrao
// push() - Adicione 'Arroz' ao final da array
comidas.push("Arroz");
console.log(comidas);
// unshift() - Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");
console.log(comidas);

//Metodos de Array Modificadores (sort, reverse)
const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana")); //true
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana")); //false

/*
 * Aula 0406 - Array2
 */

//Metodos de Array Modificadores 
//[].splice(a partir de qual item, quantos itens quer remover, item1 a add, item2 a add, ...)
const marcas = ["Ford", "Fiat", "VW", "Honda"];
marcas.splice(2, 0, 'Nissan', 'Renault'); //["Ford","Fiat","Nissan","Renault","VW","Honda"]
marcas.splice(1,3); //["Ford","VW","Honda"]

// Metodos de Acesso 
//[].concat() concatena duas arrays
const transportes1 = ["Barco","Aviao"];
const transportes2 = ["Carro","Moto"];
const transportes1e2 = transportes1.concat(transportes2); //["Barco","Aviao","Carro","Moto"]
const transportes3 = ["Caminhao"];
const transportes1_2_3 = [].concat(transportes1,transportes2,transportes3); //["Barco","Aviao","Carro","Moto","Caminhao"]

//[].includes(valor) verifica se a array possui o valor e retorna um boolean
const linguagens = ["html","css","js","php","Java","js"];
linguagens.includes("js"); //true

//[].indexof(valor) verifica se a array possui o valor e retorna o index do 1o item ou -1 se nao achar
linguagens.indexOf("js"); //2
linguagens.indexOf("C#"); //-1

//[].lastindexof(valor) verifica se a array possui o valor e retorna o index do ultimo item ou -1 se nao achar
linguagens.lastIndexOf("js"); //5

//[].join() junta todos os valores e retorna uma string. Pode passar parametro da maneira que quer separar os itens
linguagens.join('-'); //"html-css-js-php-Java-js"

//[].slice(a partir de qual item, ate qual item deseja) retorna um array com o resultado
linguagens.slice(3); //["php","Java","js"]
linguagens.slice(2,4); //["js","php"]
linguagens.slice(); //["html","css","js","php","Java","js"] Muito usado para clonar um array

// Exemplo - Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carros = ["Ford", "Fiat", "VW", "Honda"];
const novoCarros = carros.slice();
console.log(novoCarros);
carros.pop();
console.log(carros);

// Exemplo - Substitua section por ul e div com li,
// utilizando split e join
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;

html = html.split("section");
html = html.join("ul");
html = html.split("div");
html = html.join("li");
console.log(html);

/*
 * Aula 0406 - Array3
 */

// Metodos de Acesso 
//[].find() retorna o valor no primeiro que for true
const decimais = [6,43,22,88,101,29];
const decimalMaior80 = decimais.find(x => x > 80); //88

//[].findIndex() retorna o index que está o valor
const frutas = ['Banana','Pera','Uva','Laranja'];
const indexUva = frutas.findIndex((fruta)=>{
  return fruta === 'Uva';
}) // 2

//[].filter() retorna um novo array com os valores true encontrados durante o loop
//Ex-1
const arraySuja = ['Banana','',undefined,null,'Uva',0,'Laranja'];
const arrayDeFrutas = arraySuja.filter((fruta)=>{
  return fruta;
}); //['Banana','Uva','Laranja'];
//Ex-2
const numerosII = [6,46,22,88,101,29,10];
const numerosMenorQue80 = numerosII.filter((menor)=>{
  return menor < 80;
}); // [6,46,22,29,10]
//Ex-3 
const linguagensAula = [
  {
    nome: 'php',
    min: 10
  },
  {
    nome: 'C#',
    min: 20
  },
  {
    nome: 'Java',
    min: 15
  },
  {
    nome: 'JS',
    min: 35
  }
];
const maioresQue20 = linguagensAula.filter((duracao)=>{
  return duracao.min > 10;
}) // retornou um array com os objetos maiores que 10 a propriedade min

/*
 * Aula 0407 Map 
 */

//[].map retorna um novo array com o resultado da funcao. Nao altera o array original
const carrosII = ["Ford", "Fiat", "VW", "Honda"];
const carrosLista = carrosII.map((item) => {
  item = "Carro " + item;
  return item;
});
//ou
const carrolista = carros.map((item) => "Carro " + item);
//['Carro Ford','Carro Fiat','Carro VW','Carro Honda'];

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];
const aulasNova = aulas.map((item) => {
  return item.min;
}); //[15,10,20,25]

const pares = [2,4,6,8,10];
const dobroDePares = pares.map((item)=>{
  return item * 2;
}); //[4,8,12,16,20];

//[].reduce((total, currentValue, currentIndex, arr), initialValue) retorna um acumulador cfe parametros
const arrayDeValores = [15,10,20,25];
const somaArrayDeValores = arrayDeValores.reduce((acumulador, item) => {
  return acumulador + item;
}, 0); // 70

// acumulado partindo do valor de 100 
const somaArrayDeValoresAPartirDe100 = arrayDeValores.reduce((acumulador, item) => {
  return acumulador + item;
}, 100);
console.log(somaArrayDeValoresAPartirDe100); // 170

//function.apply()
const listaNumeros = [1,2,3,4,5];
Math.max.apply(null, listaNumeros); //5
//function.call()
Math.max.call(null, 1,2,3,4,5); //5

/* ---EXERCICIOS--- */

// 1 - Selecione cada curso e retorne uma array    (retornar array usa-se map)
// com objetos contendo o título, descricao,aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);
const cursosMap = arrayCursos.map((item) => {
  const titulo = item.querySelector("h1").innerText;
  const descricao = item.querySelector("p").innerText;
  const aulas = item.querySelector(".aulas").innerText;
  const horas = item.querySelector(".horas").innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
}); 
/* retorno
[
  {
    titulo: "web Design completo",
    descricao: "Este curso....",
    aulas: "80",
    horas: "22"
  },
  ...
]
*/
/* Importante: No ES6 se a chave do obj tiver o mesmo nome da variavel, pode simplificar (Exemplo no return acima)
   Poderia ser escrito:
 {
   titulo: titulo,
   descricao: descricao,
   aulas: aulas,
   horas: horas
 }
*/

// 2- Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numerosLista = numeros.filter((item) => {
  return item > 100;
}); //[333,122,322]

// 3- Verifique se "Baixo" faz parte da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const baixo = instrumentos.includes("Baixo"); //true

// 4- Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const precoLista = compras.map((item) => {
  return item.preco;
}); //["R$ 4,99", "R$ 2,99", "R$ 25,49", "R$ 5,35", "R$ 10,60"]

const precoListaLimpo = precoLista.map((item) => {
  return +item.replace("R$", "").replace(",", ".").trim();
}); //[4.99,2.99,25.49,5.35,10.60]

const total = precoListaLimpo.reduce((acumulador, item) => {
  return acumulador + item;
});
console.log(total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })); // R$ 49,42

// ** Forma otimizada do exercicio acima
const totalOtimizado = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace("R$ ", "").replace(",", ".");
  return acumulador + precoLimpo;
}, 0);
console.log(totalOtimizado.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })); //R$ 49,42

// Populando array com objeto
const listaNumero = [];
for (let index = 0; index < 5; index++) {
  let soma = index;
  listaNumero.push({
    nome: index,
    idade: soma++
  });
};
console.log(listaNumero);



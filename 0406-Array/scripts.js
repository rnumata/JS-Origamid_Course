//1-
const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValorRemovido = comidas.shift();
console.log(primeiroValorRemovido);
// Remova o último valor de comidas e coloque em uma variável
const ultimoValorRemovido = comidas.pop();
console.log(ultimoValorRemovido);
// Adicione 'Arroz' ao final da array
comidas.push("Arroz");
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("Peixe", "Batata");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);
// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana"));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana"));

//2-
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split("section");
html = html.join("ul");
html = html.split("div");
html = html.join("li");
console.log(html);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const novoCarros = carros.slice();
console.log(novoCarros);
carros.pop();
console.log(carros);

// Aula 0407 map
const carrosLista = carros.map((item) => {
  item = "Carro " + item;
  return item;
});
console.log(carrosLista);
//ou
const carrolista = carros.map((item) => "Carro " + item);
console.log(carrolista);

//Iteracao com map
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
});
console.log("array aulasNova =>", aulasNova);

/**
 * Reduce  !!! Com acumulador na própria iteracao
 */
const aulasNovaTotal = aulasNova.reduce((acumulador, item) => {
  return acumulador + item;
}, 0);
console.log("aulasNovaTotal =>", aulasNovaTotal);

// Mais exemplos de reduce
const aulas1 = [10, 25, 30];
const totalAulas1 = aulas1.reduce((acumulador, item) => {
  return acumulador + item;
}, 0);
console.log(totalAulas1); // 65

// Agora partindo de 100 o acumulador
const total2Aulas1 = aulas1.reduce((acumulador, item) => {
  return acumulador + item;
}, 100);
console.log(total2Aulas1); // 165

// findIndex
const indexFiat = carros.findIndex((item) => {
  return item === "Fiat";
});
console.log("Index Fiat => ", indexFiat);

/**
 *
 * EXERCICIOS
 *
 */
console.log("------------------- Exercicios ---------------");

// 1 - Selecione cada curso e retorne uma array    (retornar array usa-se map)
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

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
console.log(cursosMap);

// 2- Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numerosLista = numeros.filter((item) => {
  return item > 100;
});
console.log("array com filter > 100 = ", numerosLista);

// 3- Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const baixo = instrumentos.some((item) => {
  return item === "Baixo";
});
console.log("usando o some: ", baixo);

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
});
console.log("array item.preco = ", precoLista);

const precoListaLimpo = precoLista.map((item) => {
  return +item.replace("R$", "").replace(",", ".").trim();
});
console.log("array de String para Number = ", precoListaLimpo);

const total = precoListaLimpo.reduce((acumulador, item) => {
  return acumulador + item;
});
console.log(
  total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);

// forma otimizada do exercicio acima
const totalOtimizado = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace("R$ ", "").replace(",", ".");
  return acumulador + precoLimpo;
}, 0);
console.log(totalOtimizado);

const carros1 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros1.splice(1, 0, 'Kia', 'Mustang'); // []
console.log(carros1); // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros1.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
console.log(carros1); // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']





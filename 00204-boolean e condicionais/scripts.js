var condicao = false;

if (condicao) {
  console.log("Ok");
} else {
  console.log("Nok");
}

var nome = "Tiago";

if (nome) {
  console.log("O nome é: " + nome);
} else {
  console.log("Nao existe");
}

var nome2 = "";

if (nome2) {
  console.log(nome2);
} else {
  console.log("Nao existe");
}

var x = "10";
console.log(x !== 10);

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log("-> ", expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("nao é");
} else if (brasil < china) {
  console.log("é menor");
} else {
  console.log("nenhuma opcao");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}

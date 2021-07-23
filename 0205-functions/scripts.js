function mostranaTela(mostra) {
  console.log(mostra);
}
mostranaTela("Teste");

/* Funcao nativa do browser */
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
addEventListener("click", function () {
  console.log("Clicou");
});

addEventListener("click", () => {
  console.log("Clicou");
});

/* Funcao Anomina eh aquela sem nome definido (ex acima)
  Sintaxes:
  function(){}  ou  () => {}
*/



function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a idade em numeral";
  } else if (idade > 60) {
    return "Idoso";
  } else {
    return "Jovem";
  }
}
console.log(terceiraIdade(50));

function templateString(numero) {
  return `Usando o template string para calculo no return ${10 - numero} !`;
}

console.log(templateString(5));

/* Exercicio */
var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;
  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro

// Crie uma função para verificar se um valor é Truthy
function verificarSetrue(idade) {
  if (!!idade) {
    console.log("É true");
  } else {
    console.log("É false");
  }
}
var touF = 1;
verificarSetrue(touF);

// Crie uma função matemática que retorne o perímetro de um quadrado

function perimetro(lado) {
  return lado + lado + lado + lado;
}
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
function nomeCompleto(nome, sobrenome) {
  return `${nome}  ${sobrenome}`;
}

// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par
function par(numeropoui) {
  var modulo = numeropoui % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado) {
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener("click", function () {
  console.log("RN");
});

addEventListener("scroll", function(){
  console.log("callback");
})


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

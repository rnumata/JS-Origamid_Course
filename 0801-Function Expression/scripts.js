//Function expression... não leva pra cima com o hoisting
const somar = function(a,b){
  return a+b;
}

//Function declaration.. leva pra cima pelo hoisting
function subtrair(a,b) {
  return a-b;
}

//Evolucao da Funcion expression é a arrow function
const multiplicar = (a,b) => a*b;

//IIFE - Funçao declarada e ativada no mesmo momento
(function(){
  const instrumento = 'Violao';
  console.log(instrumento);
})();
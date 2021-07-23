var lista = ["A", "B", "C"];

lista.push("D");
lista.pop();

for (var i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

//for com break
for (var i = 0; i < lista.length; i++) {
  console.log(lista[i]);
  if (lista[i] === "B") {
    break;
  }
}

//Foreach

var frutass = ["Maçã", "Uva", "Banana", "Mamão"];

frutass.forEach(function (fruta) {
  console.log(fruta);
});

frutass.forEach(function (fruta, index) {
  console.log(fruta, index);
});

//Foreach => Outro exemplo de foreach com objetos no array

 var pessoas = [
   {
   nome : "Titi",
   idade : 15
  },
  {
    nome : "Peypa",
    idade : 47
  },
  {
    nome : "Meyma",
    idade : 46
  }
]; 

pessoas.forEach(function(pessoa){
  console.log(`Nome da pessoa: ${pessoa.nome} e idade: ${pessoa.idade}`);
})
//Ou com arrow function
pessoas.forEach((pessoa)=>{
  console.log(`Nome da pessoa: ${pessoa.nome} e idade: ${pessoa.idade}`);
})


// for e while

for (var index = 0; index < 3; index++) {
  console.log(index);
}

var i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

//Execicios

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copaMund0 = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

copaMund0.forEach(function (ano) {
  console.log(`O Brasil ganhou a copa de: ${ano}`);
});

for (var i = 0; i < copaMund0.length; i++) {
  console.log("O Brasil ganhou a copa de =>" + copaMund0[i]);
}

for (var i = 0; i < copaMund0.length; i++) {
  console.log(
    `O Brasil ganhou a copa de => ${copaMund0[i]} com template String`
  );
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log("A ultima fruta => " + ultimaFruta);

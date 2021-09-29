// -- Selecionar forms --
//traz um html collection com todos os forms do document
const allForms = document.forms;

// seleciona um formulario especifico da lista
const firstForm = document.forms[0];

//seleciona o formulario especifico pelo name. 
const formByName = document.forms.contato; 

//seleciona o formulario especifico pelo id
const formContato = document.querySelector("#contato"); 

// -- Selecionar os campos dos forms --
//traz um html collection com todos os campos (de inputs) do form
const elementsDoForm = formContato.elements;  

//seleciona o 1o componente editavel do formulario (<input name="nome" />)
const firstElementForm = formContato.elements[0]; 

//selecionar o input pelo name do objeto (Pex: nome)
const formElementByName = formContato.elements.nome; 

/* Exercicio */
//Selecionar o form, adicionar um evento nele e atraves da funcao pegar os valores quando change (troca o campo)
const formulario = document.querySelector('#contato');

//qdo troca de campo o valor é capturado
// formulario.addEventListener("change", hanldeFormChange);
// function hanldeFormChange(event) {
//   console.log("value: " + event.target.value); 
// }

// funcao checkValidity() valida se o input está conforme o tipo do campo
// function handleForm(event) {
//   const target = event.target;
//   console.log(target.value);
//   if (!target.checkValidity()) {
//     target.classList.add("invalido");
//     target.nextElementSibling.innerText = target.validationMessage; // nextElementsibling é o elemento logo apos o target(no caso span)
//   } else {
//     target.classList.remove("invalido");
//     target.nextElementSibling.innerText = "";
//   }
// }

// formulario.addEventListener("change", handleForm);


/* Exercicio validacao de input de cpf com numeros */
const formExercise = document.querySelector("#contato"); 

const formElementCpf = formExercise.elements.cpf;

formElementCpf.addEventListener("change", validaInput);

function validaInput(event) {
  const targetInput = event.target;
  const targetSpan = targetInput.nextElementSibling;

  const targetValue = event.target.value;
  const cpfLimpo = targetValue.replace(/\D/g, "");

  const validacep = /^[0-9]{11}$/;
  !validacep.test(cpfLimpo) ? targetSpan.innerText = "CPF errado" : targetSpan.innerText = "";
  
   salvarLocalstorage(cpfLimpo);
}

function salvarLocalstorage(cpf) {
  localStorage.cpf = cpf;
}


console.log("CPF no localStorage  :" + localStorage.cpf);
console.log(Object.keys(localStorage)); // !!!! devolve um array com todos os objetos do localStorage


//Conhecimentos Gerais
let x = 10;
const y = (x++,x); //le os operandos da esq para dir e retorna o ultimo operando
console.log(y); //11

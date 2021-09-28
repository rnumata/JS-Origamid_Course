// -- Selecionar forms --

//traz um html collection com todos os forms do document
console.log(document.forms); 

// seleciona um formulario especifico da lista
console.log(document.forms[0]); 

//seleciona o formulario especifico pelo name. Traz os inputs apenas
const formContatoByName = document.forms.contato; 
console.log(formContatoByName);

//seleciona o formulario especifico pelo id
const formContato = document.querySelector("#contato"); 
console.log(formContato);

// -- Selecionar os campos dos forms
//traz um html collection com todos os campos do form
const elementsDoForm = formContato.elements;  
console.log(elementsDoForm); 

//seleciona o 1o componente do formulario (<input name="nome" />)
const formContatoNome = formContato.elements[0]; 
console.log(formContatoNome);

// tb é possivel selecionar pelo name (Pex: nome) do objeto
const formContatoNomeII = formContato.elements.nome; 
console.log("nome", formContatoNomeII);

/* Exercicio */
//Selecionar o form, adicionar um evento nele e atraves da funcao pegar os valores quando change (troca o campo)
const formulario = document.querySelector('#contato');

//qdo troca de campo o valor é capturado
// formulario.addEventListener("change", hanldeFormChange);
// function hanldeFormChange(event) {
//   console.log("value: " + event.target.value); 
// }

// funcao checkValidity() valida se o input está conforme o tipo do campo
function handleForm(event) {
  const target = event.target;
  console.log(target.value);
  if (!target.checkValidity()) {
    target.classList.add("invalido");
    target.nextElementSibling.innerText = target.validationMessage; // nextElementsibling é o elemento logo apos o target(no caso span)
  } else {
    target.classList.remove("invalido");
    target.nextElementSibling.innerText = "";
  }
}

formulario.addEventListener("change", handleForm);

/**
 *
 * Exercicio validacao de input de cpf com numeros
 *
 *  */

const formularioCpf = formulario.elements.cpf;

formularioCpf.addEventListener("change", validaInput);

function validaInput(event) {
  const targetValue = event.target.value;
  const cpfLimpo = targetValue.replace(/\D/g, "");
  const validacep = /^[0-9]{11}$/;
  const retorno = validacep.test(cpfLimpo)
    ? alert("CPF Ok!!")
    : alert("CPF NAO ok..");

  salvarLocalstorage(cpfLimpo);
}

function salvarLocalstorage(cpf) {
  localStorage.cpf = cpf;
}

console.log("CPF no localStorage  :" + localStorage.cpf);
console.log(Object.keys(localStorage)); // devolve um array com todos os objetos do localStorage

console.log(document.forms); //traz um html collection com todos os forms do document

console.log(document.forms[0]); // seleciona um formulario especifico da lista

const formContato = document.querySelector("#contato"); //seleciona o formulario especifico pelo id
console.log(formContato);

// --

console.log(formContato.elements); //traz um html collection com todos os campos do form

const formContatoNome = formContato.elements[0]; //seleciona o 1o componente do formulario (<input name="nome")
console.log(formContatoNome);

const formContatoNomeII = formContato.elements.nome; // tb é possivel selecionar pelo nome (name) do objeto
console.log("nome", formContatoNomeII);

// --

//Selecionei o form, adicionei um evento nele e atraves da funcao pego os valores quando keyup ou change campo
const form = document.getElementById("contato");

form.addEventListener("keyup", handleForm);
function handleForm(event) {
  console.log(event.target.value); //a cada letra digitada é capturada
}

form.addEventListener("change", hanldeFormChange);
function hanldeFormChange(event) {
  //console.log(event.target.value); //qdo troca de campo o valor é capturado
}

// funcao checkValidity() valida se o input está conforme o tipo do campo
const formulario = document.querySelector("#contato");

function handleFormEmail(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    target.classList.add("invalido");
    target.nextElementSibling.innerText = target.validationMessage; // uma forma de mostrar erro. Vale para todos
    formulario.elements.email.setCustomValidity("email importante"); // falando com um campo específico (formulario.email)
  } else {
    target.classList.remove("invalido");
    target.nextElementSibling.innerText = "";
  }
}

formulario.addEventListener("change", handleFormEmail);

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

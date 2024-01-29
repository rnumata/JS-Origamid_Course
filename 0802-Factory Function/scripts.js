// Factory Function são funções que retornam um objeto sem a necessidade de "new"
//Ex1
function createObj(text){
  return {
    text: text,
  }
}
const objetoRetorno = createObj("valor da chave");
console.log(objetoRetorno.text); //Acessa os atributos do objeto.. valor da chave

//Ex2
function createButton(text){
  function element(){
    const buttonElement = document.createElement('button');  //criou o botao
    buttonElement.innerText = text;  //atribui o texto ao button
    return buttonElement;
  }
  return {
    text,
    element
  }
}
const btnConcluir = createButton("Concluir");
console.log(btnConcluir.text);  //Concluir
btnConcluir.element();

//Ex3
function criarPessoa(nome, sobrenome){
  function concatenar(){
    return nome + sobrenome;
  }
  return{
    valor: concatenar(),
  }
}

const gerarPessoa = criarPessoa('Tiago','Numata');
console.log(gerarPessoa); //{valor: 'TiagoNumata'}
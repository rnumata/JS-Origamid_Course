// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

/*const form = document.getElementById("contato");  ou*/
const form = document.querySelector("#contato");
form.addEventListener("change", handleForm);
function handleForm(event) {
  buscaCep(event.target.value);
}
function buscaCep(cep) {
  const caixaPostal = fetch(`https://viacep.com.br/ws/` + cep + `/json/`);
  caixaPostal
    .then((r) => {
      return r.json();
    })
    .then((body) => {
      /* document.getElementById("endereco").value = body.logradouro;  ou */
      form.elements.endereco.value = body.logradouro;
      form.elements.bairro.value = body.bairro;
      form.elements.localidade.value = body.localidade;
      form.elements.uf.value = body.uf;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const realCompra = document.querySelector(".realCompra");
const realVenda = document.querySelector(".realVenda");
function buscaBitcion() {
  const bitcoin = fetch("https://blockchain.info/ticker");
  bitcoin
    .then((r) => {
      return r.json();
    })
    .then((body) => {
      realCompra.innerText = body.BRL.buy;
      realVenda.innerText = body.BRL.sell;
    });
}
setInterval(() => {
  buscaBitcion();
}, 3000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const paragrafo = document.querySelector(".piada");
const btn = document.querySelector("button");
btn.addEventListener("click", handleBtn);
function handleBtn(event) {
  event.preventDefault();
  fetch("https://api.chucknorris.io/jokes/random")
    .then((r) => {
      return r.json();
    })
    .then((body) => {
      paragrafo.innerText = body.value;
    });
}

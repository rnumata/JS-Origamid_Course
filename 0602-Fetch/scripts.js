/**
 * 1- consumindo uma api doc.txt e inserindo num h1
 * Convertendo a promise em text
 */
const doc = fetch("./doc.txt");
doc
  .then((r) => {
    return r.text();
  })
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerText = body;
  });

/**
 * 2- Consumindo a api via cep
 * Convertendo a promise em json
 */
const cep = fetch("https://viacep.com.br/ws/82015620/json/");
cep
  .then((r) => {
    return r.json();
  })
  .then((body) => {
    const conteudo = document.querySelector(".cep");
    conteudo.innerText = body.logradouro;
  });

/**
 * 3- agora injetando um elemento h1 e inserindo o json nele
 */
const localidade = fetch("https://viacep.com.br/ws/82015620/json/");
localidade
  .then((r) => {
    return r.json();
  })
  .then((body) => {
    const h2 = document.createElement("h2");
    h2.innerText = body.localidade;
    document.body.appendChild(h2);
    console.log(body);
  });

/**
 * 4- Consumindo imagem e transformando usando o blob()
 */
const imagem = fetch("./imagem1.jpg");
imagem
  .then((r) => {
    return r.blob();
  })
  .then((body) => {
    const blobUrl = URL.createObjectURL(body);
    const imagemDom = document.querySelector("img");
    imagemDom.src = blobUrl;
  });

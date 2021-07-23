/*
 * Transforma um objeto JS em uma string no formato json pelo metodo JSON.stringfy
 */
const enderecoOBJ = {
  cidade: "Rio de Janeiro",
  rua: "Ali Perto",
  pais: "Brasil",
  numero: 50,
};
const enderecoJSON = JSON.stringify(enderecoOBJ);
console.log("Objeto JS convertido em string no formato json");
console.log(enderecoJSON);

/**
 * Transforma uma string no formato json em objeto JS pelo metodo JSON.parse ( é o mesmo que o json() da promisse)
 */
const enderecoJSONemObjeto = JSON.parse(enderecoJSON);
console.log("String no formato json convertido para objeto JS");
console.log(enderecoJSONemObjeto);

const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo": "25min"}';
const textoOBJ = JSON.parse(textoJSON);

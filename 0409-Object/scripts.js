/**
 * 0bject.create
 * linha 20 retorna um novo objeto (no caso honda) e que terá como protótipo o objeto do primeiro argumento (no caso carro).
 *  Todas as prorpiedades e metodos que o objeto carro tiver, agora o objeto honda também terá
 */

const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};
const honda = Object.create(carro); // -> aqui ele criou um objeto honda com tudo de carro no protótipo

console.log(honda.rodas); // 4
honda.init("Honda").acelerar();

/**
 * Object.assign()
 * O metodo inseri no objeto alvo (no caso moto e carro) as propiedades e metodos do objeto selecionado (no caso funcaoAutomovel)
 */

const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

const carrinho = {
  rodas: 4,
  mala: true,
};

Object.assign(moto, funcaoAutomovel); // -> aqui ele inseriu em moto as propriedades e metodos de funcaoAutomovel
moto.acelerar(); // posso acessar o metodo acelerar que agora tb está em moto

Object.assign(carrinho, funcaoAutomovel); // -> aqui ele inseriu em carinho as propriedades e metodos de funcaoAutomovel

console.log("-------------------- Exercicios ---------------");
/**
 * Exercicios
 */

// 1- Crie uma função que verifique
// corretamente o tipo de dado
function verificar(dado) {
  return Object.prototype.toString.call(dado);
}
console.log(verificar("oi"));

// 2- Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {
  lados: 4,
};
Object.freeze(quadrado);
console.log(Object.isFrozen(quadrado)); // true

// 3- Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};
Object.seal(configuracao);
console.log(Object.isSealed(configuracao));

// 4- Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));

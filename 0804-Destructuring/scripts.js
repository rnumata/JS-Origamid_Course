
//Permmite a desestruturacao de arrays e objetos.. atribuindo suas propriedades a novas variáveis

//Objeto
const carro = {
  marca: "Fiat",
  ano: 2014,
  modelo: "Idea",
  portas: 4,
  motor: {
    cilindro: 4,
    combustivel: "gasolina"
  },
  cambio: {
    manual: {
      marcha: 4
    },
    automatico: {
      tipo: ["CVT", "normal"]
    }
  }
}

const {marca, modelo} = carro;  //atribui a variavel o valor da chave do obj
console.log(marca);  //"Fiat"
console.log(modelo); //"Idea"

const {cilindro, combustivel} = carro.motor;
console.log(cilindro); //4
console.log(combustivel);  //"gasolina"

//aninhando


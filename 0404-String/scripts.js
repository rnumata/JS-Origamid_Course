const frase1 = "regis";

//Transformar 1a letra em maiuscula

const novaFrase = frase1.replace(frase1[0], frase1[0].toUpperCase());
console.log(novaFrase);

/**
 * Exercicios
 */

//1-  Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];
//Variaveis para fazer a somatoria
let somaTaxa = 0;
let somaRec = 0;
transacoes.forEach((item) => {
  const valorLimpo = +item.valor.replace("R$ ", ""); //IMPORTANTE: O + transforma a String em number
  if (item.descricao.startsWith("Taxa")) {
    somaTaxa = somaTaxa + valorLimpo;
  } else if (item.descricao.startsWith("Rec")) {
    somaRec = somaRec + valorLimpo;
  }
});
console.log("Taxa => " + somaTaxa);
console.log("Rec => " + somaRec);

//2- Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransportes = transportes.split(";");
console.log("split => "+ arrayTransportes);

//3-  Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split("span").join("a"); // Só funciona se a variavel for let

const htmlArray = html.split("span"); // Se a variavel html for const
const novoHtml = htmlArray.join("a");
console.log(novoHtml);

//4-  Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase.slice(-1));

//5-  Retorne o total de taxas
const transacoes1 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
let totalTaxas = 0;
transacoes1.forEach((item) => {
  item = item.toLowerCase().trim();
  if (item.startsWith("taxa")) {
    totalTaxas += 1;
  }
  console.log(item);
});
console.log("Total de taxas => " + totalTaxas);

const listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens.split(' ');
console.log("split=> "+ arrayItens);


// selecionar o primeiro h2
const section = document.querySelector("h2");
// resgatar as medidas que envolvem o objeto h2
const rect = section.getBoundingClientRect();
console.log("obj getBoundingClientRect", rect);
// medida do elemento para o topo
const h2Top = rect.top;
console.log("distancia do H2 para o topo :", h2Top);
//Alerta para distancia do scroll caso o h2 tenha passado do topo ficando negativo
if (rect.top < 0) {
  window.alert("passou");
}
//window
//pega o tamanho da tela
console.log("innner width :", window.innerWidth); 

//Se tela do usuario é mobile usando o matchMedia
const tela = window.matchMedia('(max-width: 600px)'); //retorna um obj com propriedades e metodos
const tipoTela = tela.matches; //.matches pode ser continuacao acima ou tratado separado
console.log(tipoTela ? "Mobile" : "Desktop"); //ternario se mobile ou desktop

//distancia que já aplicou o scroll
const distScroll = window.pageYOffset;
console.log(distScroll);

/**
 * Exercicios
 */
console.log("--Exercicios--");

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector("img");
const distanciaPrimeiraImg = primeiraImg.offsetTop;
console.log("Distancia da 1a img para o topo da pag => ", distanciaPrimeiraImg);

// Retorne a soma da largura de todas as imagens
function somaImgs() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((item) => {
    soma += item.offsetWidth;
  });
  console.log("Soma das larguras => ", soma);
}

window.onload = function () {
  somaImgs();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const linkInterno = document.querySelectorAll("a");
linkInterno.forEach((item) => {
  const linkWidth = item.offsetWidth;
  const linkHeight = item.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(item, "Maior que 48px x 48px");
  } else {
    console.log(item, "Menor que 48px x 48px");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const tamBrowser = window.matchMedia("(max-width: 720px)").matches;
const menu = document.querySelector(".menu");
if (tamBrowser) {
  menu.classList.add("menu-mobile");
}
console.log(menu);

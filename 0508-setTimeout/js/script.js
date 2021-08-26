// ---- Duas declaracoes de setTimeout ----
//1-
function esperaTresSegundos(texto){
  console.log(texto);
}
setTimeout(esperaTresSegundos, 3000, 'Ocorre o setTimeout após 3 segundos');

//2-
setTimeout(() => {
  console.log("Ocorre o setTimeout após 5 segundos");
}, 5000);

// Ex- Selecionar um btn, adicionar um evento de add class ativo após 3s do clique no btn
const btn = document.querySelector("button");
btn.addEventListener("click", handleClick);
function handleClick() {
  setTimeout(() => {
    this.classList.add("active");
  }, 3000);
}

// Ex- Fazer um loop em contagem progressiva até 20 de 1 em 1 seg
for (let index = 0; index < 20; index++) {
  setTimeout(() => {
    console.log(`Numero ${index}`);
  }, 1000 * index);
}


// ---- Declaracao de setInterval ----
// 1-
setInterval(() => {
  console.log('Ocorre o setInterval a cada 10s');
}, 10000);

// Ex- selecionar o h1 com classe setInterval e adicionar e tirar classe ativo a cada 3s
const h1 = document.querySelector(".setInterval");
setInterval(() => {
  h1.classList.toggle("ativo");
}, 3000);


//--- Duas Declaracoes de clearInterval para parar um setInterval----
// 1-
const contarAte10 = setInterval(callback,1000);
let i = 0;
function callback(){
  console.log(i++);
  if(i > 10){
    clearInterval(contarAte10);
  }
}

// 2- 
let a = 0;
const MetodoclearInterval = setInterval(() => {
  console.log(a++)
  if(a > 20){
    clearInterval(MetodoclearInterval);
  }
}, 1000);

/** EXERCICIOS **/
//1- Mude a cor da tela para azul e depois para vermelho a cada 2s.
// setInterval(() => {
//   document.body.classList.toggle("ativo");
// }, 2000);

// 2- Crie um cronometro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar).
// const btnIniciar = document.querySelector('.btn-iniciar');
// const btnPausar = document.querySelector('.btn-pausar');
// const cronometro = document.querySelector('.cronometro');

// btnIniciar.addEventListener('click', iniciarCronometro);
// btnPausar.addEventListener('click',pausarCronometro);
// btnPausar.addEventListener('dblclick', resetarCronometro);

// let contador = 0;
// let timer;

// function iniciarCronometro(){
//       timer = setInterval(() => {
//         contador++;
//         cronometro.innerText = contador;
//       }, 1000);
//       btnIniciar.setAttribute('disabled','');
// }

// function pausarCronometro(){
//   clearInterval(timer);
// }

// function resetarCronometro(){
//   cronometro.innerText = 0;
//   contador = 0;
//   btnIniciar.removeAttribute('disabled');
// }




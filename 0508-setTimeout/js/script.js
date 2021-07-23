//Teste de import
import * as configs from "./modules/config.js";
console.log(configs.ano);
console.log(configs.obj.nome);
//

// ---- Pratica com o setTimeout ----

for (let index = 0; index < 20; index++) {
  console.log(index);
}
setTimeout(() => {
  console.log("setTimeout após 3s");
}, 5000);

//Selecionar um btn, adicionar um evento de add class ativo após 3s do clique no btn
const btn = document.querySelector("button");
btn.addEventListener("click", handleClick);
function handleClick() {
  setTimeout(() => {
    this.classList.add("ativo");
  }, 3000);
}

//selecionar o h1 com classe setInterval e adicionar e tirar classe ativo a cada 3s
const h1 = document.querySelector(".setInterval");
setInterval(() => {
  h1.classList.toggle("ativo");
}, 3000);

/**
 * EXERCICIOS
 */
// Mude a cor da tela para azul e depois para vermelho a cada 2s.

setInterval(() => {
  document.body.classList.toggle("ativo");
}, 2000);
// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

export default function initModal() {
  // 1- selecionar os elementos que irao interagir com o modal
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  // 2- só ocorrerao os eventos se true para os elementos
  if(botaoAbrir && botaoFechar && containerModal){

    // 3- adiciona/retira a classe ativo do modal
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    // 4- se clicar no container do modal parte cinza (no modal nao acontece nada) chama a funcao de adicionar/retirar classe ativo
    function cliqueForaModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    // 2.1- adicionar eventos aos elementos
    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);

  }
}

/* Primeiros passos
*  1- Criar a section com o modal no index.html
*  2- estilizar o modal sem/com a classe ativo 
*/
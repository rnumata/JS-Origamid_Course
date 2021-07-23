export default function initTabNav() {
  //Selecionar os li como lista de tab
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  //Selecionar as sections para correlacionar com a lista de tab
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  //if opcional para rodar a animacao so se tiver o tabMenu e tabContent
  if (tabMenu.length && tabContent.length) {
    // Iadd a classe ativo para toda vez que abrir o html a classe seja adicionada
    tabContent[0].classList.add("ativo");
    // 2- function para retirar as classes ativo e add na section conforme o index
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }
    // 1-Forecah para adicionar evento a cada item do tabMenu(que são os lis)
    tabMenu.forEach((item, index) => {
      item.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}

/**
 * Navegacao por tab
 */
function initTabNav() {
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
      const direcao = tabContent[index].dataset.anime; // Exercicio 1 resgata o conteudo de data-anime que é ou show-down ou show-right
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
initTabNav();

/**
 * Accordion list
 */
function initAccordion() {
  // 1-
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");
    // 3-
    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }
    // 2-
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

/**
 * Scroll suave nos links internos
 */
function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    /*
      const topo = section.offsetTop;
      window.scrollTo({
        top: topo,
        behavior: "smooth",
      }); 
      */
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

/**
 * Animação ao scroll
 */
function initAnimacaoScroll() {
  const sectionsList = document.querySelectorAll("[data-anime='scroll']");
  if (sectionsList.length) {
    const windowMetade = window.innerHeight * 0.5;
    function animaScroll() {
      sectionsList.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    window.addEventListener("scroll", animaScroll);
    animaScroll(); //Ativa a funcao para add ativo na 1a section ao entrar no site. Senao nao aparece
  }
}
initAnimacaoScroll();

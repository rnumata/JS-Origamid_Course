export default function initAnimacaoScroll() {
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

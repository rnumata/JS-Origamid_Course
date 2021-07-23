export default function initAccordion() {
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

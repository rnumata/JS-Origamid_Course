import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");


  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userevent) => {
      menu.addEventListener(userevent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    console.log(this);
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}

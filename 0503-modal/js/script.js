import initScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();

//Teste de import
import * as configs from "./modules/config.js";
console.log(configs.ano);
console.log(configs.obj.nome);
//

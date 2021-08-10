import initScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();

/*
* Importante
* o import (linha 1 a 5) é o meio de importar quando tem apenas uma funcao no js do modules
* Quando tem mais de uma funcao no arquivo js é desta forma
*/
import { funcao1, funcao2 } from "./modules/scroll.js"
funcao1();
funcao2();

//Teste de import de todos os js no modules
import * as configs from "./modules/config.js";
console.log(configs.ano);
console.log(configs.obj.nome);
//


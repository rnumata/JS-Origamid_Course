export default function initTooltip() {
  // 1- seleciona todos os elementos com [data-tootip]
  const tooltips = document.querySelectorAll("[data-tooltip]");

  // 2- aplica o evento de mouseover em todos
  tooltips.forEach((item)=>{
    item.addEventListener("mouseover", onMouseOver);
  })

  // 3- declarar na funcao todos os eventos que irao ocorrer
  function onMouseOver(event){

    // 3.1- chama a funcao de criar a div do toolTip (passando como parametro a div do mapa) e a atribui na const tooltipBox
    const tooltipBox = criarTooltipBox(this);

    // 3.2- adiciona o evento mousemove no elemento this e passa como callback uma propriedade do obj onMouseMove(neste ex nao é funcao)
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    // 3.3- adiciona o evento mouseleave para não mais aparecer a tooltip qdo sair do elemento this
    //      passando a tooltip e o elemento this que o mouse está over
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  function criarTooltipBox(element){
    // 3.1.1- resgata o texto do [aria-label] e o atribui a text
    const text = element.getAttribute('aria-label');
    
    // 3.1.2- cria a div do tooltip, adiciona a classe,atribui o text,posiciona como ultimo element de body e retorna a div de tooltip
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  // 3.3.1- remove a div do tooltip e remove do chrome os eventos mouseleave e mousemove (acessorio)
  const onMouseLeave = {
    tooltipBox: '',
    element: '',
    handleEvent(){
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    } 
  }

  // 3.2.1- nesta funcao é atualizada a coordenada do mouse e a atribui ao top e left da tooltip. Isto faz com que a tooltip siga o mouse. O + 20 é para tirar a tooltip debaixo do mouse.
  const onMouseMove = {
    tooltipBox: '',
    handleEvent(event){    
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  }
}



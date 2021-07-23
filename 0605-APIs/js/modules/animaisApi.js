

  const img = document.querySelector(".imagem img");
  const btn = document.querySelector("button");
  btn.addEventListener("click", buscaAnimal);

  async function buscaAnimal(event){
    event.preventDefault;  
    const imgPromise = await fetch('https://dog.ceo/api/breeds/image/random');
    const imgresponse = await imgPromise.json();
    img.setAttribute("src", imgresponse.message);
  }
  






  



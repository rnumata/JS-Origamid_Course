export default function initCepApi(){

  const form = document.querySelector(".contato");

  form.addEventListener("change", handleForm);

  function handleForm(event) {
    event.preventDefault;
    const cepLimpo = event.target.value.replace(/\D/g, "");
    if (cepLimpo != "") {
      const validacep = /^[0-9]{8}$/;
        if (validacep.test(cepLimpo)) {
          buscaCep(cepLimpo);
        } else {
          alert("CEP inválido");
          clearFields();
        }
    } else {
        alert("Informe o CEP");
        clearFields();
    }
  }

    function clearFields(){
      form.elements.cep.value = "";
      form.elements.endereco.value = "";
      form.elements.bairro.value = "";
      form.elements.localidade.value = "";
      form.elements.uf.value = "";
    }

    // ----------------------------- fetch e then ----------------------------
    // function buscaCep(cep) {
    //   const caixaPostal = fetch(`https://viacep.com.br/ws/` + cep + `/json/`);
    //   caixaPostal
    //     .then((r) => {
    //       return r.json();
    //     })
    //     .then((body) => {
    //       /* document.getElementById("endereco").value = body.logradouro;  ou */
    //       form.elements.endereco.value = body.logradouro;
    //       form.elements.bairro.value = body.bairro;
    //       form.elements.localidade.value = body.localidade;
    //       form.elements.uf.value = body.uf;
    //     });
    // }
    // ----------------------------- fetch e async await ----------------------------

    async function buscaCep(cep) {
      const promiseCep = await fetch(`https://viacep.com.br/ws/` + cep + `/json/`);
      const responseCep = await promiseCep.json();  
      if(!responseCep.erro){
        form.elements.endereco.value = responseCep.logradouro;
        form.elements.bairro.value = responseCep.bairro;
        form.elements.localidade.value = responseCep.localidade;
        form.elements.uf.value = responseCep.uf;  
      } else {
        alert("CEP Não encontrado");
        clearFields();
      }
    };
    
}



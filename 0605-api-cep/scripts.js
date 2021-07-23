function pesquisaCep(valor) {
  const cepLimpo = valor.replace(/\D/g, "");
  if (cepLimpo != "") {
    const validacep = /^[0-9]{8}$/;
    if (validacep.test(cepLimpo)) {
      const script = document.createElement("script");
      script.src =
        "https://viacep.com.br/ws/" + cepLimpo + "/json/?callback=atualiza_cep";
      document.body.appendChild(script);
    } else {
      const span = document.querySelector("span");
      span.innerText = "CEP Invalido";
      alert("CEP invalido");
    }
  } else {
    alert("CEP em branco");
  }
}

function atualiza_cep(conteudo) {
  if (!conteudo.erro) {
    document.getElementById("rua").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    document.getElementById("cidade").value = conteudo.localidade;
    document.getElementById("estado").value = conteudo.uf;
    document.getElementById("ibge").value = conteudo.ibge;
  } else {
    alert("CEP nao encontrado");
  }
}

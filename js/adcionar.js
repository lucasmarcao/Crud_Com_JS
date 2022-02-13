function adcionarBotao() {
  //controla os botãoes que podem aparecer.
  buscar.style.display = "none";
  adcionar.style.display = "none";
  salvar.style.display = "inline";
  cancelar.style.display = "inline";

  //controla os inputs que podem ser digitados.
  entradaId.disabled = true;
  cargo.disabled = false;
  nome.disabled = false;
  genero.disabled = false;
  salario.disabled = false;
  situacao.disabled = false;

  // Estiliza os inputs.
  entradaId.style.color = "white";
  cargo.style.backgroundColor = "limegreen";
  nome.style.backgroundColor = "limegreen";
  genero.style.backgroundColor = "limegreen";
  salario.style.backgroundColor = "limegreen";
  situacao.style.backgroundColor = "limegreen";

  //reabilita o botão Salvar.
  salvar.removeAttribute("disabled");

  //mostra o tipo de jeito que a informação vai ser salva.
  atualizaOuAdciona = "adciona";
  console.log(atualizaOuAdciona);
}

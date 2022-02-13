function cancelarBotao() {
  // controla o comportamento dos botões.
  buscar.style.display = "inline";
  salvar.style.display = "none";
  cancelar.style.display = "none";

  // desabilita o botão Salvar.
  salvar.setAttribute("disabled", "true");

  // controla o comportamento dos Inputs.
  entradaId.disabled = false;
  cargo.disabled = true;
  nome.disabled = true;
  genero.disabled = true;
  salario.disabled = true;
  situacao.disabled = true;

  // Os inputs voltam ao seu valor Padrão (vazios).
  entradaId.value = "";
  cargo.value = "vazio";
  nome.value = "";
  genero.value = "";
  salario.value = "";
  situacao.value = "vazio-situacao";

  // estiliza os Inputs.
  entradaId.style.color = "black";
  cargo.style.backgroundColor = "grey";
  nome.style.backgroundColor = "grey";
  genero.style.backgroundColor = "grey";
  salario.style.backgroundColor = "grey";
  situacao.style.backgroundColor = "grey";
}

function cancelarBotao() {
  buscar.style.display = "inline"
  salvar.style.display = "none"
  cancelar.style.display = "none"

  entradaId.disabled = false;
  cargo.disabled = true;
  nome.disabled = true;
  genero.disabled = true;
  salario.disabled = true;
  situacao.disabled = true;

  entradaId.value = "";
  cargo.value = "vazio";
  nome.value = "";
  genero.value = "";
  salario.value = "";
  situacao.value = "vazio-situacao";

  entradaId.style.color = "black"
  cargo.style.backgroundColor = "grey";
  nome.style.backgroundColor = "grey";
  genero.style.backgroundColor = "grey";
  salario.style.backgroundColor = "grey";
  situacao.style.backgroundColor = "grey";

}
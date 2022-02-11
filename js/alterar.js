function alterarBotao() {
  buscar.style.display = "none"
  alterar.style.display = "none"
  salvar.style.display = "inline"
  cancelar.style.display = "inline"
  excluir.style.display = "none" // botão excluir some

  entradaId.disabled = true;
  cargo.disabled = false;
  nome.disabled = false;
  genero.disabled = false;
  salario.disabled = false;
  situacao.disabled = false;

  entradaId.style.color = "white"
  cargo.style.backgroundColor = "limegreen";
  nome.style.backgroundColor = "limegreen";
  genero.style.backgroundColor = "limegreen";
  salario.style.backgroundColor = "limegreen";
  situacao.style.backgroundColor = "limegreen";

}
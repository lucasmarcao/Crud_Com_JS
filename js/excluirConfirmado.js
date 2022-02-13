function confirmadoExluir() {
  // controla o comportamento dos botões.
  excluir.style.display = "none";
  alterar.style.display = "none";

  // Avisa qual foi usuario excluido.
  console.warn("Você excluiu o Funcionario : -->", nome.value);

  // Os inputs voltam ao seu valor Padrão (vazios).
  entradaId.value = "";
  cargo.value = "vazio";
  nome.value = "";
  genero.value = "";
  salario.value = "";
  situacao.value = "vazio-situacao";

  //basicamente exclui quem voce escolheu.
  deletarClient(guardaIndexDeBusca);
}

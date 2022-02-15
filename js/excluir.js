function excluirBotao() {
  // essa constante é o texto do MODAL.
  const textoExclui = document.getElementById("texto-exclusao");

  // Mensagem enviada para o texto do modal.
  textoExclui.innerHTML =
    "Deseja excluir o item de id  : <br> [ " +
    entradaId.value +
    " ]. E de nome : <br> {  " +
    nome.value +
    "  } ?";
}

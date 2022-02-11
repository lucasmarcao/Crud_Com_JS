function buscarBotao() {
  let verificaId = entradaId.value;
  if (entradaId.value != "") {
    console.log('Voce escreveu', verificaId)   
  }
  let validaId = Number.parseInt(verificaId);
  const zap = listarClientes();
  try {
    var existe = zap[validaId];
  } catch (error) {
    console.log('Funcionario Não registrado');
  }
  if (
    existe != null
  ) {
    console.log("Usuário cadastrado. -> atualize");
    adcionar.style.display = "none"; // botão ADCIONAR some
    alterar.style.display = "inline"; // botão Alterar aparece
    excluir.style.display = "inline"; // botão excluir aparece
    try {
      console.log("id :",zap[validaId].id);
      console.log("nome :",zap[validaId].nome);
      console.log("cargo :",zap[validaId].cargo);
    } catch (error) {
      console.log('método não deu certo');
    }
  } else {
    if (entradaId.value != "") {
      console.log("{ Usuário não cadastrado. -> adcione }");
      adcionar.style.display = "inline"; // botão ADCIONAR aparece
      alterar.style.display = "none"; // botão Alterar some
      excluir.style.display = "none"; // botão excluir some
    }else{
      console.log('----> Tu nem digitou nada');
      adcionar.style.display = "none"; // botão ADCIONAR aparece
      alterar.style.display = "none"; // botão Alterar some
      excluir.style.display = "none"; // botão excluir some
    }
    cargo.value = "vazio";
    nome.value = "";
    genero.value = "";
    salario.value = "";
    situacao.value = "vazio-situacao";
  }
}

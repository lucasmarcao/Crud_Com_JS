function buscarBotao() {
  limpaLog();
  console.log("_____________________________________________");
  let comeco = [];
  let verificaId = entradaId.value;
  let validaId = Number.parseInt(verificaId);
  const dbClient = listarClientes();
  const dbDatas = getLocalDatas();
  for (let index = 0; index < dbClient.length; index++) {
    comeco.push(dbClient[index].id);
  }
  var confere = 0;
  comeco.forEach(function (item, indice) {
    console.log(" item: ", item, " | indice:", indice);
    if (validaId == item) {
      console.log(
        " Usuário: ",
        item,
        "\n de indice: ",
        indice,
        " |\n cadastrado -> atualize"
      );
      adcionar.style.display = "none"; // botão ADCIONAR some
      alterar.style.display = "inline"; // botão Alterar aparece
      excluir.style.display = "inline"; // botão excluir aparece
      let tam = Number(window.document.body.clientWidth);
      if (tam > 991.98) {
        modificacao.style.display = "inline";
        inclusao.style.display = "inline";
      } else {
        modificacao.style.display = "block";
        inclusao.style.display = "block";
      }
      confere = 1;
      cargo.value = dbClient[indice].cargo;
      nome.value = dbClient[indice].nome;
      genero.value = dbClient[indice].genero;
      salario.value = dbClient[indice].salario;
      situacao.value = dbClient[indice].situacaoAtual;
      guardaIndexDeBusca = indice;
      modificacao.innerHTML = " Data Modificação : "+ dbDatas[indice].modifica;
      inclusao.innerHTML = " Data Inclusão : "+  dbDatas[indice].inclui;
    }
  });
  if (confere != 1) {
    if (entradaId.value != "") {
      console.log("{ Usuário não cadastrado. -> adcione }");
      adcionar.style.display = "inline"; // botão ADCIONAR aparece
      alterar.style.display = "none"; // botão Alterar some
      excluir.style.display = "none"; // botão excluir some
    } else {
      console.log("----> Tu nem digitou nada");
      adcionar.style.display = "none"; // botão ADCIONAR some
      alterar.style.display = "none"; // botão Alterar some
      excluir.style.display = "none"; // botão excluir some
    }
    cargo.value = "vazio";
    nome.value = "";
    genero.value = "";
    salario.value = "";
    situacao.value = "vazio-situacao";
  }
  if (entradaId.value != "") {
    console.log("Voce escreveu", verificaId);
  }
}

function salvarBotao() {
  const dbClient = listarClientes();
  if (nome.value != "" && genero.value != "" && dbClient.length <= 100) {
    entradaId.disabled = false;
    console.clear();
    console.log("dados Salvos !!!"); // mais codigo inutil
    console.log(
      "------------------------- \n" +
        "ID :  " +
        entradaId.value +
        "\n" +
        "CARGO :  " +
        cargo.value +
        "\n" +
        "NOME :  " +
        nome.value +
        "\n" +
        "GENERO :  " +
        genero.value +
        "\n" +
        "SALARIO :  " +
        salario.value +
        "\n" +
        "SITUAÇÃO :  " +
        situacao.value +
        "\n" +
        "------------------------- "
    );
    if (atualizaOuAdciona == "adciona") {
      //caso o usuario esteja adcionando dados
      console.info("ADICIONOU");
      if (salario.value != "") {
        criarClient({
          cargo: cargo.value,
          genero: genero.value,
          id: Number(entradaId.value),
          nome: nome.value,
          salario: Number(salario.value),
          situacaoAtual: situacao.value,
        });
      } else {
        criarClient({
          cargo: cargo.value,
          genero: genero.value,
          id: Number(entradaId.value),
          nome: nome.value,
          salario: 0,
          situacaoAtual: situacao.value,
        });
      }
    }
    if (atualizaOuAdciona == "alterar") {
      //caso o usuario esteja alterando dados
      console.info("ALTEROU");
      if (salario.value != "") {
        AtualizarClient(guardaIndexDeBusca, {
          cargo: cargo.value,
          genero: genero.value,
          id: Number(entradaId.value),
          nome: nome.value,
          salario: Number(salario.value),
          situacaoAtual: situacao.value,
        });
      } else {
        AtualizarClient(guardaIndexDeBusca, {
          cargo: cargo.value,
          genero: genero.value,
          id: Number(entradaId.value),
          nome: nome.value,
          salario: 0,
          situacaoAtual: situacao.value,
        });
      }
    }
  } else {
    console.log("dados não salvos.");
  }
}

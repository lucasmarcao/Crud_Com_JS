function salvarBotao() {
  if (nome.value != "" && genero.value != "") {
    buscar.style.display = "inline";
    salvar.style.display = "none";
    cancelar.style.display = "none";
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

    entradaId.style.color = "black";
    cargo.style.backgroundColor = "grey";
    nome.style.backgroundColor = "grey";
    genero.style.backgroundColor = "grey";
    salario.style.backgroundColor = "grey";
    situacao.style.backgroundColor = "grey";
  } else {
    console.log("dados não salvos.");
  }
}

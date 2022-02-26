function salvarBotao() {
  const dbClient = listarClientes();
  const dbDatas = getLocalDatas();
  let decimal = Number(document.getElementById("salario").value);
  let stringnum = decimal.toString();
  let contador = 0;
  let guardaponto = 0;
  console.log(stringnum);
  for (var x = 0; x < stringnum.length; x++) {
    if (stringnum[x] == ".") {
      guardaponto = x;
      console.warn("o ponto esta no indice", x);
    }
  }
  console.log("ponto no indice", guardaponto);
  for (var i = 0; i < stringnum.length; i++) {
    if (i > guardaponto) {
      console.log(stringnum[i], " passou das virgula.");
      contador += 1;
    }
  }
  console.log("o numero passou da virgula ", contador, " vezes.");
  if (
    nome.value.length >= 3 &&
    genero.value.length >= 3 &&
    dbClient.length <= 100 &&
    (contador <= 2 || guardaponto==0)
  ) {
    entradaId.disabled = false;
    if (atualizaOuAdciona == "adciona") {
      //caso o usuario esteja adcionando dados
      console.info("ADICIONOU");
      if (salario.value != "") {
        criarClient({
          cargo: cargo.value,
          genero: genero.value,
          id: Number(entradaId.value),
          nome: nome.value,
          salario: Number(salario.value).toFixed(2),
          situacaoAtual: situacao.value,
        });
        criarDatas({
          inclui: imprimi,
          modifica: imprimi,
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
        criarDatas({
          inclui: imprimi,
          modifica: imprimi,
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
          salario: Number(salario.value).toFixed(2),
          situacaoAtual: situacao.value,
        });
        AtualizarDatas(guardaIndexDeBusca, {
          inclui: dbDatas[guardaIndexDeBusca].inclui,
          modifica: imprimi,
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
        AtualizarDatas(guardaIndexDeBusca, {
          inclui: dbDatas[guardaIndexDeBusca].inclui,
          modifica: imprimi,
        });
      }
    }
  } else {
    console.log("dados não salvos.");
  }
}

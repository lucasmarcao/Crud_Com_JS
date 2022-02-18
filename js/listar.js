// O html precisa ficar assim.
/* <div class="itens">
  <div class="dado-item id-item">1</div>
  <div class="dado-item">Estagiário</div>
  <div class="dado-item">Lucas Marcão</div>
  <div class="dado-item">Masculino</div>
  <div class="dado-item">200,00</div>
  <div class="dado-item">Ativo</div>
</div>; */

function listarCrud() {
  try {
    const dbClient = listarClientes();
    for (let index = 0; index < dbClient.length; index++) {
      console.log("ID : " + dbClient[index].id + " | Indice : " + index);
      let corpo = document.getElementById("corpo-lista");
      // separa os atributos do item pai.
      let itensDiv = document.createElement("div");
      itensDiv.setAttribute("class", "itens");
      // cria html tag com variaveis dos dados.
      let idItem = document.createElement("div");
      let cargoItem = document.createElement("div");
      let nomeItem = document.createElement("div");
      let salarioItem = document.createElement("div");
      let generoItem = document.createElement("div");
      let situacaoItem = document.createElement("div");

      // da as classes para os itens.
      idItem.setAttribute("class", "id-item dado-item");
      cargoItem.setAttribute("class", "dado-item");
      nomeItem.setAttribute("class", "dado-item");
      salarioItem.setAttribute("class", "dado-item");
      generoItem.setAttribute("class", "dado-item");
      situacaoItem.setAttribute("class", "dado-item");

      // da o conteudo de texto para os itens.
      idItem.innerText = dbClient[index].id;
      cargoItem.innerText = dbClient[index].cargo;
      nomeItem.innerText = dbClient[index].nome;
      salarioItem.innerText = dbClient[index].salario;
      generoItem.innerText = dbClient[index].genero;
      situacaoItem.innerText = dbClient[index].situacaoAtual;

      // insere os elementos onde deveria.
      corpo.insertAdjacentElement("beforeend", itensDiv);
      itensDiv.appendChild(idItem);
      itensDiv.appendChild(cargoItem);
      itensDiv.appendChild(nomeItem);
      itensDiv.appendChild(generoItem);
      itensDiv.appendChild(salarioItem);
      itensDiv.appendChild(situacaoItem);
    }
  } catch (e) {
    console.warn("deu merda", e);
  }
}

function fecharLista() {
  var lista = document.getElementsByClassName("itens");
  for (var i = lista.length - 1; i >= 0; i--) {
    lista[i].remove();
  }
  console.clear();
  console.log("Comandos : ");
  console.log(" buscar:    buscarPorLocalStorage(numeroquetuquer)  ");
  console.log(" newBusca:  buscarPorId() ");
  console.log(" adcionar:  criarClient(dadosClient)  ");
  console.log(" atualizar: AtualizarClient(numeroquetuquer,dadosClient)");
  console.log(" deletar:   deletarClient(numeroquetuquer)");
  console.log(" listar:    listarClientes() ");
  console.log(" Turorial:  tutorial() ");
  console.log(" clear:     limpaLog() ");

}

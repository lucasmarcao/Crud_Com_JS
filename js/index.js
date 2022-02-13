// botões
var buscar = document.getElementById("buscar");
var adcionar = document.getElementById("adcionar");
var alterar = document.getElementById("alterar");
var listar = document.getElementById("listar");
var excluir = document.getElementById("excluir");
var salvar = document.getElementById("salvar");
var cancelar = document.getElementById("cancelar");
// valor dos botões.

// Valores de entrada || dados
var entradaId = document.getElementById("id");
var cargo = document.getElementById("cargo");
var nome = document.getElementById("nome");
var genero = document.getElementById("genero");
var salario = document.getElementById("salario");
var situacao = document.getElementById("situacao");

//inicio CRUD
const dadosClient = {
  // exemplo Pronto de JSON
  id: 44,
  cargo: "dev-senior",
  nome: "Angelina Joli",
  genero: "Feminino",
  salario: 4200.25,
  situacaoAtual: "ferias",
  // Para que no terminal o usuario não precise escrever muito.
};

// Tutorial de como manipular o CRUD. (via console)
console.log("Comandos : ");
console.log(" buscar:    buscarPorLocalStorage(numeroquetuquer)  ");
console.log(" newBusca:  buscarPorId() ");
console.log(" adcionar:  criarClient(dadosClient)  ");
console.log(" atualizar: AtualizarClient(numeroquetuquer,dadosClient)");
console.log(" deletar:   deletarClient(numeroquetuquer)");
console.log(" listar:    listarClientes() ");
console.log(" Turorial:  tutorial() ");
console.log(" clear:     limpaLog() ");

// Variaveis CHAVE do localStorage
const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) =>
  localStorage.setItem("db_client", JSON.stringify(dbClient));

// Variaveis responsaveis pelo controle do CRUD
var atualizaOuAdciona = "";
var guardaIndexDeBusca = 0;

//CRUD - CREATE , READ , UPDATE , DELETE.

// Crud - Buscar
const buscarPorLocalStorage = (indice) => {
  try {
    const dbClient = listarClientes();
    console.log(dbClient[indice]);
    console.log("id: ", dbClient[indice].id);
    console.log("nome: ", dbClient[indice].nome);
    return "Funcionario encontrado...";
  } catch (error) {
    return "Funcionario não existe...";
  }
};

// Buscar por id.
const buscarPorId = () => {
  let inicio = [];
  try {
    const dbClient = listarClientes();
    for (let index = 0; index < dbClient.length; index++) {
      console.log("ID : " + dbClient[index].id + " | Indice : " + index);
      inicio.push(dbClient[index].id);
    }
    inicio.forEach(function (item, indice) {
      console.log(" item: ", item, " | indice:", indice);
    });
    return "IDS listados...";
  } catch (e) {
    return "IDS não listados..." + e;
  }
};

// Crud - Create.
const criarClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
  return "Novo Funcionário Registrado.";
};

// Crud - Read.
const listarClientes = () => getLocalStorage();

// Crud - Update.
const AtualizarClient = (indice, client) => {
  const dbClient = listarClientes();
  dbClient[indice] = client;
  setLocalStorage(dbClient);
  return "Dados do Funcionário atualizados.";
};

// Crud - Delete.
const deletarClient = (indice) => {
  const dbClient = listarClientes();
  dbClient.splice(indice, 1);
  setLocalStorage(dbClient);
};

// mostra as vezes que a tela foi limpada.
let limpezas = 0;
// Limpa a tela
const limpaLog = () => {
  limpezas += 1;
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
  return "A tela foi limpa { " + limpezas + " } vezes.";
};

//Exemplo de como Adcionar ou Alterar
const tutorial = () => {
  console.log("|{  Para Adicionar ou alterar algum arquivo :  }|");
  console.warn(
    " Para Atualizar:  \n \n AtualizarClient(4,({" +
      ' \n cargo: "vazio",' +
      ' \n genero: "EXEMPLO",' +
      " \n id: 0," +
      ' \n nome: "EXEMPLO",' +
      " \n salario: 0.00," +
      ' \n situacaoAtual: "vazio-situacao",}))'
  );
  console.log("-------------------------------------------");
  console.warn(
    " Para Adcionar:  \n \n criarClient(({" +
      ' \n cargo: "EXEMPLO",' +
      ' \n genero: "EXEMPLO",' +
      " \n id: 0," +
      ' \n nome: "EXEMPLO",' +
      " \n salario: 0.00," +
      ' \n situacaoAtual: "vazio-situacao",}))'
  );
};

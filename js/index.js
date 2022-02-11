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

// MASCARAS :--->
function mascaraId(n) {
  let c = n.value;

  if (isNaN(c[c.length - 1])) {
    // impede entrar outro caractere que não seja número
    n.value = c.substring(0, c.length - 1);
    return;
  }

  n.setAttribute("maxlength", "5");
}

function mascaraSalario(n) {
  let c = n.value;

  if (isNaN(c[c.length - 1]) && "," != c[c.length - 1]) {
    // impede entrar outro caractere que não seja número
    n.value = c.substring(0, c.length - 1);
    return;
  }

  n.setAttribute("maxlength", "15");
}
//--------------------------------------------------
//inicio CRUD

const dadosClient = {
  id: 44,
  cargo: "dev-senior",
  nome: "Angelina Joli",
  genero: "Feminino",
  salario: 4200.25,
  situacaoAtual: "ferias",
};

// Tutorial de como manipular o CRUD.
console.log('Comandos : ');
console.log(" buscar:    buscarPorLocalStorage(indice)  ");
console.log(" adcionar:  criarClient(dadosClient)  ");
console.log(" atualizar: AtualizarClient(numeroquetuquer,dadosClient)")
console.log(" deletar:   deletarClient(numeroquetuquer)")
console.log(' listar:    listarClientes() ');
console.log(' Turorial:  tutorialAdciona() ')
console.log(' clear:     limpaLog() ');



const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) =>
  localStorage.setItem("db_client", JSON.stringify(dbClient));

//CRUD - CREATE , READ , UPDATE , DELETE.

// Crud - Buscar
const buscarPorLocalStorage = (indice) => {
  try {
    const dbClient = listarClientes();
    console.log(dbClient[indice])
    console.log('id: ',dbClient[indice].id);
    console.log('nome: ',dbClient[indice].nome);
    return 'Funcionario encontrado...'
  } catch (error) {
    return 'Funcionario não existe...'
  }
};

// Crud - Create.
const criarClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

// Crud - Read.
const listarClientes = () => getLocalStorage();

// Crud - Update.
const AtualizarClient = (indice, client) => {
  const dbClient = listarClientes();
  dbClient[indice] = client;
  setLocalStorage(dbClient);
  console.log(dbClient)
};

// Crud - Delete.
const deletarClient = (indice) => {
  const dbClient = listarClientes();
  dbClient.splice(indice,1);
  setLocalStorage(dbClient);
}

// Limpa a tela
let limpezas = 0
const limpaLog = () => {
  limpezas += 1
  console.clear();
  console.log('Comandos : ');
  console.log(" buscar:    buscarPorLocalStorage(indice)  ");
  console.log(" adcionar:  criarClient(dadosClient)  ");
  console.log(" atualizar: AtualizarClient(numeroquetuquer,dadosClient)")
  console.log(" deletar:   deletarClient(numeroquetuquer)")
  console.log(' listar:    listarClientes() ');
  console.log(' Turorial:  tutorialAdciona() ')
  console.log(' clear:     limpaLog() ');
  return 'A tela foi limpa { '+ limpezas + ' } vezes.';
}

//Exemplo de como Adcionar
const tutorialAdciona = () => {
  console.log('|{  Para Adicionar ou alterar algum arquivo :  }|')
  console.log(' Para atualizar:  \n \n AtualizarClient(4,({'+
    ' \n cargo: "EXEMPLO",'+
    ' \n genero: "EXEMPLO",'+
    ' \n id: 0,'+
    ' \n nome: "EXEMPLO",'+
    ' \n salario: 0.00,'+
    ' \n situacaoAtual: "EXEMPLO",}))');
}

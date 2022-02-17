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

// Retornar Datas Inclusão // Modificação.

// variaveis Date :
var data = new Date();
var dia = data.getDate();
var mes = Number(data.getMonth() + 1);
var hora = data.getHours();
var minuto = data.getMinutes();
var ano = data.getFullYear();

var inclusao = document.getElementById("inclusao");
var modificacao = document.getElementById("modificacao");

var imprimi =
  " " +
  dia.toString() +
  "/" +
  mes.toString() +
  "/" +
  ano.toString() +
  " " +
  hora.toString() +
  ":" +
  minuto.toString();

if (mes < 10) {
  imprimi =
    " " +
    dia.toString() +
    "/0" +
    mes.toString() +
    "/" +
    ano.toString() +
    " " +
    hora.toString() +
    ":" +
    minuto.toString();
  if (minuto < 10) {
    imprimi =
      " " +
      dia.toString() +
      "/0" +
      mes.toString() +
      "/" +
      ano.toString() +
      " " +
      hora.toString() +
      ":0" +
      minuto.toString();
  }
} else {
  if (minuto < 10) {
    imprimi =
      " " +
      dia.toString() +
      "/0" +
      mes.toString() +
      "/" +
      ano.toString() +
      " " +
      hora.toString() +
      ":0" +
      minuto.toString();
  }
}

// isso deixa a var |imprimi| em tempo REAL.
setInterval(() => {
  // renova todas as var a cada 1000 milisegundos.
  let dateforma = new Date();
  dia = dateforma.getDate();
  mes = Number(dateforma.getMonth() + 1);
  hora = dateforma.getHours();
  minuto = dateforma.getMinutes();
  ano = dateforma.getFullYear();
  imprimi =
    " " +
    dia.toString() +
    "/" +
    mes.toString() +
    "/" +
    ano.toString() +
    " " +
    hora.toString() +
    ":" +
    minuto.toString();

  if (mes < 10) {
    imprimi =
      " " +
      dia.toString() +
      "/0" +
      mes.toString() +
      "/" +
      ano.toString() +
      " " +
      hora.toString() +
      ":" +
      minuto.toString();
    if (minuto < 10) {
      imprimi =
        " " +
        dia.toString() +
        "/0" +
        mes.toString() +
        "/" +
        ano.toString() +
        " " +
        hora.toString() +
        ":0" +
        minuto.toString();
    }
  } else {
    if (minuto < 10) {
      imprimi =
        " " +
        dia.toString() +
        "/0" +
        mes.toString() +
        "/" +
        ano.toString() +
        " " +
        hora.toString() +
        ":0" +
        minuto.toString();
    }
  }
  // renova todas as var a cada 1000 milisegundos.
}, 1000);

// cria o localStorage com nome DATAS.
const getLocalDatas = () => JSON.parse(localStorage.getItem("data")) ?? [];
const setLocalDatas = (dbDatas) =>
  localStorage.setItem("data", JSON.stringify(dbDatas));

// data -  Buscar por id.
const buscarPorIdDatas = () => {
  let inicio = [];
  try {
    const dbDatas = listarDatas();
    for (let index = 0; index < dbDatas.length; index++) {
      console.log("ID : " + dbDatas[index].id + " | Indice : " + index);
      inicio.push(dbDatas[index].id);
    }
    inicio.forEach(function (item, indice) {
      console.log(" item: ", item, " | indice:", indice);
    });
    return "IDS listados...";
  } catch (e) {
    return "IDS não listados..." + e;
  }
};

// data - Create.
const criarDatas = (client) => {
  const dbDatas = getLocalDatas();
  dbDatas.push(client);
  setLocalDatas(dbDatas);
  return "Novo Funcionário Registrado.";
};

// data - Read.
const listarDatas = () => getLocalDatas();

// data - Update.
const AtualizarDatas = (indice, client) => {
  const dbDatas = listarDatas();
  dbDatas[indice] = client;
  setLocalDatas(dbDatas);
  return "Dados do Funcionário atualizados.";
};

// data - Delete.
const deletarDatas = (indice) => {
  const dbDatas = listarDatas();
  dbDatas.splice(indice, 1);
  setLocalDatas(dbDatas);
};

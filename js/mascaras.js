// MASCARAS :--->

// pega o valor do input Id.
let enter = document.getElementById("id");

document.getElementById("id").onkeypress = function(e) {
  var chr = String.fromCharCode(e.which);
  if ("1234567890".indexOf(chr) < 0)
    return false;
};

document.getElementById("salario").onkeypress = function(e) {
  var chr = String.fromCharCode(e.which);
  if ("1234567890,".indexOf(chr) < 0){
    return false;
  }

};
//deixa digitar apenas numeros.
function mascaraId(n) {
  let c = n.value;

  if (
    "0" != c[c.length - 1] && "1" != c[c.length - 1] &&
    "2" != c[c.length - 1] && "3" != c[c.length - 1] &&
    "4" != c[c.length - 1] && "5" != c[c.length - 1] &&
    "6" != c[c.length - 1] && "7" != c[c.length - 1] &&
    "8" != c[c.length - 1] && "9" != c[c.length - 1]
     ) {
    // impede entrar outro caractere que não seja número
    n.value = c.substring(0, c.length - 1);
    return;
  }
  // delimita o maximo de caracteres no Input.
  enter.removeAttribute("readonly"); // o botão pode ser editado.
  n.setAttribute("maxlength", "5");
}

// controla uma possivel vulnerabilidade do Sistema.
function controlaFalhasInputId() {
  adcionar.style.display = "none"; // botão ADCIONAR some
  alterar.style.display = "none"; // botão Alterar some
  excluir.style.display = "none"; // botão excluir some
  enter.removeAttribute("readonly"); // o botão pode ser editado.
  salvar.setAttribute("disabled", "true"); // desativa o botão salvar.
  modificacao.style.display = "none";
  inclusao.style.display = "none";
}

//essa função pesquisa quando eu aperto ENTER.

enter.addEventListener("keypress", function (e) {
  var key = e.which || e.keyCode;
  if (key == 13 || key == 16) {
    // codigo da tecla enter

    if (enter.value != "") {
      buscarBotao(); // executa a função que pesquisa.
      enter.setAttribute("readonly", "true"); // o botão NÃO pode ser editado.
    }
  }
});

// deixa digitar apenas numeros e o ponto final.
function mascaraSalario(n) {
  let c = n.value;
  if (
    "0" != c[c.length - 1] && "1" != c[c.length - 1] &&
    "2" != c[c.length - 1] && "3" != c[c.length - 1] &&
    "4" != c[c.length - 1] && "5" != c[c.length - 1] &&
    "6" != c[c.length - 1] && "7" != c[c.length - 1] &&
    "8" != c[c.length - 1] && "9" != c[c.length - 1] ||
    n.value > 9999999
     ) {
    // impede entrar outro caractere que não seja número
    n.value = c.substring(0, c.length - 1);
    return;
  }
}

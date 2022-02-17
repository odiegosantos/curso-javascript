var itens = [];
var inPizza = document.getElementById("inPizza");
var inBebida = document.getElementById("inBebida");

function trocarItem() {
  if (rbPizza.checked) {
    inBebida.className = "oculta";
    inPizza.className = "exibe";
  } else {
    inPizza.className = "oculta";
    inBebida.className = "exibe";
  }
}
var rbPizza = document.getElementById("rbPizza");
rbPizza.addEventListener("change", trocarItem);

var rbBebida = document.getElementById("rbBebida");
rbBebida.addEventListener("change", trocarItem);

function mostrarSabores() {
  if (rbPizza.checked) {
    var pizza = inPizza.value;
    var num = (pizza === "media") ? 2 : (pizza === "grande") ? 3 : 4;
    var mostrar = `Até ${num} sabores`;
    inDetalhes.placeholder = `${mostrar}`;
  }
}
var inDetalhes = document.getElementById("inDetalhes");
inDetalhes.addEventListener("focus", mostrarSabores);

inDetalhes.addEventListener("blur", function () {
  inDetalhes.placeholder = "";
});

inDetalhes.addEventListener("keypress", function (tecla) {
  if (tecla === 13) {
    adicionarItem();
  }
});

function adicionarItem() {
  var inPizza = document.getElementById("inPizza");
  var inBebida = document.getElementById("inBebida");
  var outPedido = document.getElementById("outPedido");

  if (rbPizza.checked) {
    var num = inPizza.selectedIndex;
    var produto = inPizza.options[num].text;
  } else {
    var num = inBebida.selectedIndex;
    var produto = inBebida.options[num].text;
  }
  var detalhes = inDetalhes.value;
  itens.push(produto + " (" + detalhes + ")");
  outPedido.textContent = itens.join("\n");
  limparCampos();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarItem);

function limparCampos() {
  rbPizza.checked = true;
  inBebida.className = "oculta";
  inPizza.className = "exibe";
  inPizza.selectedIndex = 0;
  inDetalhes.value = "";
  rbPizza.focus();
}
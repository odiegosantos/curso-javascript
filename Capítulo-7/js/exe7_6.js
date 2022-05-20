function calcularVacina() {
  var valor = document.getElementById("inValor").value;
  var convenio = document.getElementById("inConvenio");

  if (valor == 0 || isNaN(valor)) {
    alert("Informe apenas números");
    return;
  }

  var desconto;

  if (rbSim.checked) {
    if (convenio.value == "amigo") {
      desconto = calcularDesconto(valor, 20);
    } else {
      desconto = calcularDesconto(valor, 50);
    }
  } else {
    desconto = calcularDesconto(valor, 10);
  }
  valorDesconto = valor - desconto;
  textoDesconto = `Desconto R$: ${desconto.toFixed(2)}`;
  textoPagar = `Valor R$: ${valorDesconto.toFixed(2)}`;

  outDesconto.textContent = `${textoDesconto}`;
  outPagar.textContent = `${textoPagar}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularVacina);

function calcularDesconto(valor, taxa) {
  return valor * (taxa / 100);
}

// var rbSim = document.getElementById("rbSim");
// rbSim.addEventListener("change", function () {
//   var pConvenio = document.getElementById("pConvenio");
//   pConvenio.className = "exibeLinha";
// });
//
// var rbNao = document.getElementById("rbNao");
// rbNao.addEventListener("change", function () {
//   var pConvenio = document.getElementById("pConvenio");
//   pConvenio.className = "oculta";
// });
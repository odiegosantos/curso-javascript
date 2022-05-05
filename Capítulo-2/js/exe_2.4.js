function calcularPreco() {
  var quilo = document.getElementById("inQuilo").value;
  var consumo = document.getElementById("inConsumo").value;

  var valor = (quilo / 1000) * consumo;
  var valorPagar = `Valor a Pagar R$: ${valor.toFixed(2)}`;

  document.getElementById("outValor")
    .textContent = `${valorPagar}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);
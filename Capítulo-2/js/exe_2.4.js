function calcularPreco() {
  var inQuilo = document.getElementById("inQuilo");
  var inConsumo = document.getElementById("inConsumo");
  var outValor = document.getElementById("outValor");

  var quilo = Number(inQuilo.value);
  var consumo = Number(inConsumo.value);

  var valor = (quilo / 1000) * consumo;
  var valorPagar = 'Valor a Pagar R$:';

  outValor.textContent = `${valorPagar} ${valor.toFixed(2)}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);
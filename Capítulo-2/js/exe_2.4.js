function calcularPreco() {
  var inQuilo = document.getElementById("inQuilo");
  var inConsumo = document.getElementById("inConsumo");

  var quilo = Number(inQuilo.value);
  var consumo = Number(inConsumo.value);

  var valor = (quilo / 1000) * consumo;
  var valorPagar = `Valor a Pagar R$: ${valor.toFixed(2)}`;

  document.getElementById("outValor")
    .textContent = `${valorPagar}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);
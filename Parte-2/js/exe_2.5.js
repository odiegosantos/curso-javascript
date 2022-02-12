function calcularPreco() {
  var inValor = document.getElementById("inValor");
  var inTempo = document.getElementById("inTempo");
  var outValor = document.getElementById("outValor");

  var valor = Number(inValor.value);
  var tempo = Number(inTempo.value);

  var minutos = Math.ceil(tempo / 15);
  var pagar = Number(valor * minutos);

  outValor.textContent = `Valor a Pagar R$: ${pagar.toFixed(2)}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);
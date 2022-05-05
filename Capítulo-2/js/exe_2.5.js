function calcularPreco() {
  var valor = document.getElementById("inValor").value;
  var tempo = document.getElementById("inTempo").value;

  var minutos = Math.ceil(tempo / 15);
  var pagar = Number(valor * minutos);
  var valorPagar = `Valor a Pagar R$: ${pagar.toFixed(2)}`;

  document.getElementById("outValor")
    .textContent = `${valorPagar}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);
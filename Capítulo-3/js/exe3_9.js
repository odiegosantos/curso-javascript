function verificar() {
  var inValor = document.getElementById("inValor");
  var outTempo = document.getElementById("outTempo");
  var outTroco = document.getElementById("outTroco");

  var valor = Number(inValor.value);

  if (valor == 0 || isNaN(valor)) {
    alert("Informe um valor válido de moedas");
    inValor.focus();
    return;
  }

  if (valor < 1.00) {
    alert("Valor insuficiente (no mínimo R$: 1.00)");
    inValor.focus();
    return;
  }

  var tempo;
  var troco;

  if (valor >= 3.00) {
    tempo = 120;
    troco = valor - 3.00;
  } else if (valor >= 1.75) {
    tempo = 60;
    troco = valor - 1.75;
  } else {
    tempo = 30;
    troco = valor - 1.00;
  }

  outTempo.textContent = `Tempo: ${tempo} min`;
  if (troco > 0) {
    outTroco.textContent = `Troco R$: ${troco.toFixed(2)}`;
  }
}
var btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click", verificar);
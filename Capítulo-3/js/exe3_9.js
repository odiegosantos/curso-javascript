function condicao() {
  var inValor = document.getElementById("inValor");
  var valor = Number(inValor.value);

  let tempo;
  let troco;

  if (valor == 0 || valor < 1.0 || isNaN(valor)) {
    alert("Informe um valor válido de moedas");
    inValor.focus();
    return;
  }
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

  var menssagemTempo = `Tempo: ${tempo} min`;
  var menssagemTroco = `Troco R$: ${troco.toFixed(2)}`;

  outTempo.textContent = `${menssagemTempo}`;
  if (troco > 0) {
    outTroco
      .textContent = `${menssagemTroco}`;
  }
}

function verificar() {
  condicao();
}
var btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click", verificar);
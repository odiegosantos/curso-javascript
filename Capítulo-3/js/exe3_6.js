function calcularNotas() {
  var inSaque = document.getElementById("inSaque");
  var saque = Number(inSaque.value);

  if (saque == 0 || saque % 2 != 0 || isNaN(saque)) {
    document.getElementById("saida")
    .textContent = "Valores 2, 10, 20, 50, 100"
    inSaque.focus();
    return;
  }

  var notasCem = Math.floor(saque / 100);
  var notasCinquenta = Math.floor(saque / 50);
  var notasVinte = Math.floor(saque / 20);
  var notasDez = Math.floor(saque / 10);
  var notasDois = Math.floor(saque / 2);

  var menssagemNota100 = "Notas de R$: 100";
  var menssagemNota50 = "Notas de R$: 50";
  var menssagemNota20 = "Notas de R$: 20";
  var menssagemNota10 = "Notas de R$: 10";
  var menssagemNota2 = "Notas de R$: 2";

  if (notasCem > 0) {
    document.getElementById("outNotasCem")
      .textContent = `${notasCem} ${menssagemNota100}`;
  }
  if (notasCinquenta > 0) {
    outNotasCinquenta.textContent =
      `${notasCinquenta} ${menssagemNota50}`;
  }

  if (notasVinte > 0) {
    outNotasVinte.textContent =
      `${notasVinte} ${menssagemNota20}`;
  }

  if (notasDez > 0) {
    outNotasDez.textContent =
      `${notasDez} ${menssagemNota10}`;
  }
  if (notasDois > 0) {
    outNotasDois.textContent =
      `${notasDois} ${menssagemNota2}`;
  }
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularNotas);
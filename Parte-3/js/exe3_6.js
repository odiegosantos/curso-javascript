function calcularNotas() {
  var inSaque = document.getElementById("inSaque");
  var outNotasCem = document.getElementById("outNotasCem");
  var outNotasCinquenta = document.getElementById("outNotasCinquenta");
  var outNotasVinte = document.getElementById("outNotasVinte");
  var outNotasDez = document.getElementById("outNotasDez");
  var outNotasDois = document.getElementById("outNotasDois");

  outNotasCem.textContent = "";
  outNotasCinquenta.textContent = "";
  outNotasVinte.textContent = "";
  outNotasDez.textContent = "";
  outNotasDois.textContent = "";

  var saque = Number(inSaque.value);

  if (saque == 0 || isNaN(saque)) {
    alert("Informe Valor Correatamente");
    inSaque.focus();
    return;
  }

  if (saque % 2 != 0) {
    alert("Valor inválido para notas disponiveis ( R$ 2, 10, 20, 50, 100)");
    inSaque.focus;
    return;
  }
  var notasCem = Math.floor(saque / 100);
  var notasCinquenta = Math.floor(saque / 50);
  var notasVinte = Math.floor(saque / 20);
  var notasDez = Math.floor(saque / 10);
  var notasDois = Math.floor(saque / 2);

  if (notasCem > 0) {
    outNotasCem.textContent = `${notasCem} Notas de R$ 100`;
  }
  if (notasCinquenta > 0) {
    outNotasCinquenta.textContent = `${notasCinquenta} Notas de R$ 50`;
  }

  if (notasVinte > 0) {
    outNotasVinte.textContent = `${notasVinte} Notas de R$ 20`;
  }

  if (notasDez > 0) {
    outNotasDez.textContent = `${notasDez} Notas de R$ 10`;
  }
  if (notasDois > 0) {
    outNotasDois.textContent = `${notasDois} Notas de R$ 2`;
  }
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularNotas);
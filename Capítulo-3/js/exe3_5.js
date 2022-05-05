function condicao() {
  var numero = document.getElementById("inNumero").value;

  var raiz = Math.sqrt(numero);
  var textoRaiz = `A Raiz de ${numero} é ${raiz}`;
  var textoNaoRaiz = `Não há raiz exata para ${numero}`;

  if (raiz === Math.floor(raiz)) {
    outSaida.textContent = `${textoRaiz}`;
  } else {
    outSaida.textContent = `${textoNaoRaiz}`;
  }
}

function calcularRaiz() {
  condicao();
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularRaiz);
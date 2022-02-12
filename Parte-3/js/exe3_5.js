function calcularRaiz() {
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");
  var numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido...");
    inNumero.focus();
    return;
  }

  var raiz = Math.sqrt(numero);
  if (raiz == Math.floor(raiz)) {
    outResposta.textContent = "Raiz: " + raiz;
  } else {
    outResposta.textContent = `Não há raiz exata para ${numero}`;
  }
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularRaiz);
function numeroImparPar() {
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var numero = Number(inNumero.value);

  if (numero % 2 == 0) {
    outResposta.textContent = `O Número: ${numero}  é Par!`;
  } else {
    outResposta.textContent = `O Número: ${numero}  é Ímpar!`;
  }
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", numeroImparPar);
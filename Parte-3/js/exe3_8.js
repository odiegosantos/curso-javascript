function calcularSituacao() {
  var inVelMax = document.getElementById("inVelMax");
  var inVelCond = document.getElementById("inVelCond");
  var outSituacao = document.getElementById("outSituacao");

  var velMax = Number(inVelMax.value);
  var velCond = Number(inVelCond.value);

  if (velCond <= velMax) {
    outSituacao.textContent = "Situação: Sem Multa ";
  } else {
    var maisVinte = velMax * 1.20;
    if (velCond <= maisVinte) {
      outSituacao.textContent = "Situação: Multa Leve ";
    } else {
      outSituacao.textContent = "Situação: Multa Grave ";
    }
  }
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", calcularSituacao);
function condicao() {
  var inVelMax = document.getElementById("inVelMax");
  var inVelCond = document.getElementById("inVelCond");

  var velMaxima = Number(inVelMax.value);
  var velCondutor = Number(inVelCond.value);

  var semMulta = "Situação: Sem Multa";
  var multaLeve = "Situação: Multa Leve";
  var multaGrave = "Situação: Multa Grave";
  var maisVinte = velMaxima * 1.20;

  if (velCondutor <= velMaxima) {
    outSituacao.textContent = `${semMulta}`;
  }
  else {
    if (velCondutor <= maisVinte) {
      outSituacao.textContent = `${multaLeve}`;
    } else {
      outSituacao.textContent = `${multaGrave}`;
    }
  }
}
function situacao() {
  condicao();
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", situacao);
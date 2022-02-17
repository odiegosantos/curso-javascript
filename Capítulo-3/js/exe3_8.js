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
    document.getElementById("situacao").textContent = `${semMulta}`;
  }
  else {
    if (velCondutor <= maisVinte) {
      document.getElementById("situacao").textContent = `${multaLeve}`;
    } else {
      document.getElementById("situacao").textContent = `${multaGrave}`;
    }
  }
}
function situacao() {
  condicao();
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", situacao);
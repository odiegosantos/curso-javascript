function condicao() {
  var velocidadeMaxima = document.getElementById("inVelocidadeMaxima").value;
  var velocidadeCondutor = document.getElementById("inVelocidadeCondutor").value;


  var semMulta = "Situação: Sem Multa";
  var multaLeve = "Situação: Multa Leve";
  var multaGrave = "Situação: Multa Grave";
  var maisVinte = velocidadeMaxima * 1.20;

  if (velocidadeCondutor <= velocidadeMaxima) {
    outSituacao.textContent = `${semMulta}`;
  }
  else {
    if (velocidadeCondutor <= maisVinte) {
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
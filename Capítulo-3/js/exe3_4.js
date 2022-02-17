function condicao() {
  var inHoraBrasil = document.getElementById("inHoraBrasil");
  var horaBrasil = Number(inHoraBrasil.value);

  var horaNY = horaBrasil - 2;
  if (horaNY > 24) {
    horaNY = horaNY - 24;
  }
  
  var menssagem = `Hora em New York: ${horaNY.toFixed(2)}`;
  document.getElementById("outHoraNY")
    .textContent = `${menssagem}`;
}

function calcularFuso() {
  condicao();
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso);
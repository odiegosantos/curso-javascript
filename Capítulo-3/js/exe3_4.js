function calcularFuso() {
  var inHoraBrasil = document.getElementById("inHoraBrasil");
  var outHoraNY = document.getElementById("outHoraNY");

  var horaBrasil = Number(inHoraBrasil.value);

  if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
    alert("Informe Hora Corretamente");
    inHoraBrasil.focus();
    return;
  }
  var horaNY = horaBrasil - 2;

  if (horaNY > 24) {
    horaNY = horaNY - 24;
  }
  outHoraNY.textContent = `Hora em New York: ${horaNY.toFixed(2)}`;
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso);
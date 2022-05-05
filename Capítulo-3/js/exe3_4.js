function condicao() {
  var horaBrasil = document.getElementById("inHoraBrasil").value;

  var horaNewYork = horaBrasil - 2;
  if (horaNewYork > 24) {
    horaNewYork = horaNewYork - 24;
  }

  var mensagem = `Hora em New York: ${horaNewYork.toFixed(2)}`;
  outHoraNewYork.textContent = `${mensagem}`;
}

function calcularFuso() {
  condicao();
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso);
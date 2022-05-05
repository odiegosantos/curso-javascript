function converterDuracao() {
  var titulo = document.getElementById("inTitulo").value;
  var duracao = document.getElementById("inDuracao").value;

  var horas = Math.floor(duracao / 60);
  var minutos = duracao % 60;

  var outTitulo = `Duração de ${titulo}`;
  var outDuracao = `${horas} hora(s) ${minutos} minuto(s)`;

  document.getElementById("outTitulo")
    .textContent = `${outTitulo}`;
  document.getElementById("outResposta")
    .textContent = `${outDuracao}`;
}
var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", converterDuracao);

function converterDuracao() {

  var inTitulo = document.getElementById("inTitulo");
  var inDuracao = document.getElementById("inDuracao");
  var outTitulo = document.getElementById("outTitulo");
  var outResposta = document.getElementById("outResposta");

  var titulo = inTitulo.value;
  var duracao = Number(inDuracao.value);

  var horas = Math.floor(duracao / 60);
  var minutos = duracao % 60;

  outTitulo.textContent = ` O Filme ${titulo} Tem`;
  outResposta.textContent = `${horas} Hora(s)`;
  outResposta.textContent = `${minutos} Minutos(s)`;
}
var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", converterDuracao);

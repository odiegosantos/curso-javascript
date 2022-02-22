var times = [];

function adicionarClube() {
  var inClube = document.getElementById("inTime");
  var nome = inClube.value;

  if (nome == "") {
    alert("Informe um Clube!!!");
    inClube.focus();
    return;
  }
  times.push(nome);
  listarTimes();

  inClube.value = "";
  inClube.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClube);

function listarTimes() {
  if (times.length == 0) {
    alert("Não há times na lista");
    inClube.focus();
    return;
  }
  var lista = "";

  for (i = 0; i < times.length; i++) {
    lista += `${(i + 1)}.  ${times[i]} \n`;
  }
  outLista.textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarTimes);

function montarJogos() {
  var tam = times.length;

  if (tam == 0 || (tam % 2 == 1)) {
    alert("Deve Haver números pares de times");
    inClube.focus();
    return;
  }

  var jogos = "";
  var ultimo = tam - 1;

  for (i = 0; i < tam / 2; i++) {
    jogos += `${times[i]} x ${times[ultimo - i]} \n`;
  }

  outLista.textContent = jogos;
}
var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarJogos);
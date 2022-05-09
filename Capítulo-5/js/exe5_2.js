var noticias = [];

function adicionarNoticias() {
  var noticia = document.getElementById("inNoticia").value;

  if (noticia === "") {
    alert("Informe a notícia a ser incluída");
    noticia.focus();
    return;
  }
  noticias.push(noticia);
  outNumero.textContent = noticias.length;

  noticia.value = "";
  noticia.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNoticias);

function listarUltimas() {
  var quantidade = Number(prompt("Listar quantas notícias?"));
  var total = noticias.length;

  if (quantidade === 0 || isNaN(quantidade) || quantidade > total) {
    alert("Número inválido");
    return;
  }
  var ultimas = ` ${quantidade} Últimas Notícias\n-----------------------------------------------------\n`;
  for (var i = total - 1; i >= total - quantidade; i--) {
    ultimas += (i + 1) + "º) " + noticias[i] + "\n";
  }

  outLista.textContent = ultimas;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarUltimas);
function montarDica() {
  var inNome = document.getElementById("inNome");
  var outDica = document.getElementById("outDica");

  var fruta = inNome.value.toUpperCase();

  if (fruta == "") {
    alert("Informe um nome...");
    inNome.focus();
    return;
  }

  var resposta = fruta.charAt(0);
  var estrelas = "*";
  var tam = fruta.length;

  for (var i = 1; i < tam; i++) {
    if (fruta.charAt(i) == fruta.charAt(0)) {
      resposta += fruta.charAt(0);
    } else {
      resposta += "_";
    }
    estrelas += "*";
  }
  outDica.textContent = resposta;
  inNome.value = estrelas;
}
var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarDica);
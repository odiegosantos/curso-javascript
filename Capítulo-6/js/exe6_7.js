function gerarReferencia() {
  var inNome = document.getElementById("inNome");
  var outReferencia = document.getElementById("outReferencia");

  var autor = inNome.value;

  if (autor === "" || autor.indexOf(" ") === -1) {
    alert("Informe o nome completo do Autor");
    inNome.focus();
    return;
  }

  var partesNome = autor = autor.toUpperCase().split(" ");
  var tamanhoNome = partesNome.length;

  var citacao = partesNome[tamanhoNome - 1] + ", ";

  for (var i = 0; i < tamanhoNome - 1; i++) {
    citacao += partesNome[i].charAt(0) + ". ";
  }
  outReferencia.textContent = `Citação Bibliográfica: ${citacao}`;
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarReferencia);
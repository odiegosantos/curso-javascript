function gerarReferencia() {
  var autor = document.getElementById("inNome").value;

  if (autor === "" || autor.indexOf(" ") === -1) {
    alert("Informe o nome completo do Autor");
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
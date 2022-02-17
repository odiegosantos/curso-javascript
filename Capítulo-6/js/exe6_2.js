function gerarCracha() {
  var inNome = document.getElementById("inNome");
  var outCracha = document.getElementById("outCracha");

  var nome = inNome.value;

  if (nome == "" || nome.indexOf(" ") == -1) {
    alert("Informe os dados corretamente");
    inNome.focus();
    return;
  }

  var priEspaco = nome.indexOf(" "); // Posição do primeiro espaço
  var ultEspaco = nome.lastIndexOf(" "); // Posição do ultimo espaço

  // Copia o nome e sobrenome usando os parâmentros substr()
  var cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

  // Altera o texto identificado na página 
  outCracha.textContent = "Crachá: " + cracha;
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarCracha);
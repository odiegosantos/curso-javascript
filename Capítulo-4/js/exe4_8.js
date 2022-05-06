function imprimir() {
  var nome = document.getElementById("inNome").value;
  var numero = document.getElementById("inNumero").value;

  if (nome === "" || numero === '' || isNaN(numero)) {
    alert("Informe corretamente os dados");
    return;
  }

  var resposta = "";

  for (var i = 1; i < numero; i++) {
    resposta = resposta + nome + " * ";
  }
  resposta = resposta + nome;
  outResposta.textContent = resposta;
}
var btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", imprimir);
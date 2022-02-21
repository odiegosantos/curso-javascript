function imprimir() {
  var inNome = document.getElementById("inNome");
  var inNumero = document.getElementById("inNumero");

  var nome = inNome.value;
  var num = Number(inNumero.value);

  if (nome == "" || num == 0 || isNaN(num)) {
    alert("Informe corretamente os dados");
    inNome.focus();
    return;
  }

  var resposta = "";

  for (var i = 1; i < num; i++) {
    resposta = resposta + nome + " * ";
  }
  resposta = resposta + nome;
  outResposta.textContent = resposta;
}
var btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", imprimir);
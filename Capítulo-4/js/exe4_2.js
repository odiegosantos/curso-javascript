function listarNumeros() {
  var inNumero = document.getElementById("inNumero");
  var numero = Number(inNumero.value);

  var resposta = "Entre " + numero + " e 1: ";

  if (numero == 0 || isNaN(numero)) {
    alert("Digite um Número");
    inNumero.focus();
    return;
  }

  for (var i = numero; i > 1; i--) {
    resposta = resposta + i + ", ";
  }
  resposta = resposta + i + ".";
  saida.textContent = resposta;
}
var btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", listarNumeros);
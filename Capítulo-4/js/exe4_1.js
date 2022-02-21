const mult = 10;
var inNumero = document.getElementById("inNumero");

function mostrarTabuada() {
  var numero = Number(inNumero.value);
  if (numero === 0 || isNaN(numero)) {
    alert("Informe uma número válido...");
    inNumero.focus();
    return;
  }

  let resposta = "";

  for (let i = 1; i <= mult; i++) {
    resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
  }
  outTabuada.textContent = resposta;
}
let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarTabuada);
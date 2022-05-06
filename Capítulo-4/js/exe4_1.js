const mult = 10;

function mostrarTabuada() {
  var numero = document.getElementById("inNumero").value;
  if (numero === 0 || isNaN(numero)) {
    console.log("Informe uma número válido...");
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
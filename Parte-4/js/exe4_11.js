function verificarPerfeito() {
  var inNumero = document.getElementById("inNumero");
  var outDivisores = document.getElementById("outDivisores");
  var outResposta = document.getElementById("outResposta");

  var numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido...");
    inNumero.focus();
    return;
  }

  var divisores = `divisores de ${numero} são: 1`;
  var soma = 1;

  for (var i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      divisores = divisores + ", " + i;
      soma = soma + i
    }
  }
  divisores = `${divisores} (Soma: ${soma} )`;

  outDivisores.textContent = divisores;

  if (numero == soma) {
    outResposta.textContent = `${numero} - é um Número Perfeito`;
  } else {
    outResposta.textContent = `${numero} - Não é um Número Perfeito`;
  }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPerfeito);
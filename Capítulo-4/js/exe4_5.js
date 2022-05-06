function verificarPerfeito() {
  var numero = document.getElementById("inNumero").value;

  if (numero === 0 || isNaN(numero)) {
    alert("Informe um número válido...");
    return;
  }

  var divisores = `divisores de ${numero} são: 1`;
  var soma = 1;

  for (var i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      divisores = divisores + ", " + i;
      soma = soma + i
    }
  }
  divisores = `${divisores} (Soma: ${soma} )`;

  var simPerfeito = `${numero} - é um Número Perfeito`;
  var naoPerfeito = `${numero} - Não é um Número Perfeito`;

  if (numero === soma) {
    outResposta.textContent = `${simPerfeito}`;
  } else {
    outResposta.textContent = `${naoPerfeito}`;
  }
  outDivisores.textContent = divisores;
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPerfeito);
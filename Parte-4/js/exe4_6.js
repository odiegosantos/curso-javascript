function verificarPrimo() {
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var num = Number(inNumero.value);

  if (num === 0 || isNaN(num)) {
    alert("Número Inválido");
    inNumero.focus();
    return;
  }

  var temDivisor = 0;

  for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      temDivisor = 1;
      break;
    }
  }

  if (num > 1 && !temDivisor) {
    outResposta.textContent = `${num} é  Primo`;
  } else {
    outResposta.textContent = `${num} Não é Primo`;
  }

// Outras formas de resolver o mesmo problema
//   var numDivisores = 0;
//   for (var i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       numDivisores++;
//     }
//   }
// 
//   if (numDivisores == 2) {
//     outResposta.textContent = `${num} É  Primo`;
//   } else {
//     outResposta.textContent = `${num} Não é Primo`;
//   }
}
var btVerificarPrimo = document.getElementById("btVerificarPrimo");
btVerificarPrimo.addEventListener("click", verificarPrimo);
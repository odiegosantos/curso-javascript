function verificar() {
  var numero = document.getElementById("inNumero").value;

  if (numero === 0 || isNaN(numero)) {
    alert("Número Inválido");
    return;
  }

  var temDivisor = 0;

  for (var i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      temDivisor = 1;
      break;
    }
  }

  var simPrimo = `${numero} é  Primo`;
  var naoPrimo = `${numero} Não é Primo`;
  
  if (numero > 1 && !temDivisor) {
    outResposta.textContent = `${simPrimo}`;
  } else {
    outResposta.textContent = `${naoPrimo}`;
  }

// Outras formas de resolver o mesmo problema
//   var numeroDivisores = 0;
//   for (var i = 1; i <= numero; i++) {
//     if (numero % i == 0) {
//       numeroDivisores++;
//     }
//   }
// 
//   if (numeroDivisores == 2) {
//     outResposta.textContent = `${numero} É  Primo`;
//   } else {
//     outResposta.textContent = `${numero} Não é Primo`;
//   }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificar);
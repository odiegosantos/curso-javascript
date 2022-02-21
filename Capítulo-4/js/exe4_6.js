function verificar() {
  var inNumero = document.getElementById("inNumero");
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

  var simPrimo = `${num} é  Primo`;
  var naoPrimo = `${num} Não é Primo`;
  
  if (num > 1 && !temDivisor) {
    outResposta.textContent = `${simPrimo}`;
  } else {
    outResposta.textContent = `${naoPrimo}`;
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
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificar);
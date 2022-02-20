function verificarParImpar() {
  let inNumero = document.getElementById("inNumero");
  let numero = Number(inNumero.value);

  let menssagemPar = `O Número: ${numero}  é Par!`;
  let menssagemImpar = `O Número: ${numero}  é Impar!`;

  if (numero % 2 == 0) {
    outResposta
      .textContent = `${menssagemPar}`;
  } else {
    outResposta
      .textContent = `${menssagemImpar}`;
  }
}

function numeroImparPar() {
  verificarParImpar();
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", numeroImparPar);
function verificarPalidromo() {
  var inFrase = document.getElementById("inFrase");
  var outResposta = document.getElementById("outResposta");

  var frase = inFrase.value.toLocaleUpperCase();

  if (frase === "" || frase.indexOf(" ") === - 1) {
    alert("Informe, por favor, uma frase");
    inFrase.focus();
    return;
  }

  var segundaPalavra = frase.replace(/ /g, "");
  var tamanhoPalavra = segundaPalavra.length;

  var iguais = true;

  for (var i = 0; i < tamanhoPalavra / 2; i++) {
    if (segundaPalavra[i] != segundaPalavra[tamanhoPalavra - 1 - i]) {
      iguais = false;
      break;
    }
  }

  if (iguais) {
    outResposta.textContent = `${frase}: é um Palídromo`;
  } else {
    outResposta.textContent = `${frase}: não é um Palídromo`;
  }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPalidromo);
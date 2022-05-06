function criarEstrelas() {
  var numero = document.getElementById("inNumero").value;

  if (numero === 0 || numero > 50 || isNaN(numero)) {
    alert("Digite um número válido!!!");
    return;
  }

  var estrelas = "";

  for (var i = 1; i <= numero; i++) {
    for (var j = 1; j <= i; j++) {
      estrelas = estrelas + "*"
    }
    estrelas = `${estrelas} \n`;
  }
  outResposta.textContent = estrelas;
}
var btCriar = document.getElementById("btCriar");
btCriar.addEventListener("click", criarEstrelas);
function criarEstrelas() {
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var num = Number(inNumero.value);

  if (num == 0 || isNaN(num)) {
    alert("Digite um número válido!!!");
    inNumero.focus();
    return;
  }

  var estrelas = "";

  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
      estrelas = estrelas + "*"
    }
    estrelas = `${estrelas} \n`;
  }
  outResposta.textContent = estrelas;
}
var btCriar = document.getElementById("btCriar");
btCriar.addEventListener("click", criarEstrelas);
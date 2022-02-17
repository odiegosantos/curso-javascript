function mostrarEvolucao() {
  var inCoelho = document.getElementById("inCoelho");
  var inAnos = document.getElementById("inAnos");
  var outEvolucao = document.getElementById("outEvolucao");

  var chinc = inCoelho.value;
  var anos = Number(inAnos.value);

  if (chinc < 2 || isNaN(chinc) || anos == 0 || isNaN(anos)) {
    alert("Deve haver ao menos Dois Coelhos, e um período de no mínimo um Ano!");
    inCoelho.focus();
    return;
  }

  var resposta = "";
  var total = chinc;

  for (var i = 1; i <= anos; i++) {
    resposta = `${i} º Ano: ${total} Coelhos`;
    total = total * 120;
  }

  outEvolucao.textContent = resposta;
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarEvolucao);
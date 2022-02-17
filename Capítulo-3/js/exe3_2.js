function verificarTriangulo() {
  var inLadoA = document.getElementById("inLadoA");
  var inLadoB = document.getElementById("inLadoB");
  var inLadoC = document.getElementById("inLadoC");
  var outSimNao = document.getElementById("outSimNao");
  var outTipo = document.getElementById("outTipo");

  var ladoA = Number(inLadoA.value);
  var ladoB = Number(inLadoB.value);
  var ladoC = Number(inLadoC.value);
  var informeDados = `Informe lados válidos para o Triângulo`;

  if (ladoA === 0 || ladoB === 0 || ladoC === 0 || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    alert(`${informeDados}`);
    inLadoA.focus();
    return;
  }

  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    outSimNao.textContent = "Lados não podem formar um Triângulo";
  } else {
    outSimNao.textContent = "Lados podem formar um Triângulo";
    if (ladoA === ladoB && ladoA === ladoC) {
      outTipo.textContent = "Tipo: Equilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      outTipo.textContent = "Tipo: Isóceles";
    } else {
      outTipo.textContent = "Tipo: Escaleno";
    }
  }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarTriangulo);
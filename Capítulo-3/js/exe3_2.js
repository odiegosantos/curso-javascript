function condicao() {
  var inLadoA = document.getElementById("inLadoA");
  var inLadoB = document.getElementById("inLadoB");
  var inLadoC = document.getElementById("inLadoC");

  var ladoA = Number(inLadoA.value);
  var ladoB = Number(inLadoB.value);
  var ladoC = Number(inLadoC.value);
  var informeDados = `Informe apenas numeros`;

  if (ladoA === 0 || ladoB === 0 || ladoC === 0 || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    alert(`${informeDados}`);
    inLadoA.focus();
    return;
  }

  var naoTriagulo = `Lados não podem formar um Triângulo`;
  var simTriangulo = `Lados podem formar um Triângulo`;
  var equilatero = `Tipo: Equilátero`;
  var isoceles = `Tipo: Isóceles`;
  var escaleno = `Tipo: Escaleno`;

  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    outSimNao.textContent = `${naoTriagulo}`;
  } else {
    outSimNao.textContent = `${simTriangulo}`;
    if (ladoA === ladoB && ladoA === ladoC) {
      outTipo.textContent = `${equilatero}`;
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      outTipo.textContent = `${isoceles}`;
    } else {
      outTipo.textContent = `${escaleno}`;
    }
  }
}

function verificarTriangulo() {
  condicao();
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarTriangulo);
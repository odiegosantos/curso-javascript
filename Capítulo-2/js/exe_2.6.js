function mostrarPromocao() {
  var inMedicamento = document.getElementById("inMedicamento");
  var outMedicamento = document.getElementById("outMedicamento");
  var inPreco = document.getElementById("inPreco");
  var outValor = document.getElementById("outValor");

  var medicamento = inMedicamento.value;
  var preco = Number(inPreco.value);

  var promocao = Math.floor(preco * 2);

  var titlePromocao = 'Promoção de';
  var titleLeve2 = 'Leve 2 por';

  outMedicamento.textContent = `${titlePromocao} ${medicamento}`;
  outValor.textContent = `${titleLeve2} ${promocao.toFixed(2)}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarPromocao);
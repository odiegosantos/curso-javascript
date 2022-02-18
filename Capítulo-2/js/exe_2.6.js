function mostrarPromocao() {
  var inMedicamento = document.getElementById("inMedicamento");
  var inPreco = document.getElementById("inPreco");

  var medicamento = inMedicamento.value;
  var preco = Number(inPreco.value);

  var promocao = Math.floor(preco * 2);

  var titlePromocao = `Promoção de ${medicamento}`;
  var titleLeve2 = `Leve 2 por ${promocao.toFixed(2)}`;

  document.getElementById("outMedicamento")
    .textContent = `${titlePromocao}`;
  document.getElementById("outValor")
    .textContent = `${titleLeve2}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarPromocao);
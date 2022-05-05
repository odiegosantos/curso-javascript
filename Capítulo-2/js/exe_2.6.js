function mostrarPromocao() {
  var medicamento = document.getElementById("inMedicamento").value;
  var preco = document.getElementById("inPreco").value;

  var promocao = Math.floor(preco * 2);

  var outPromocao = `Promoção de ${medicamento}`;
  var outLeve2 = `Leve 2 por ${promocao.toFixed(2)}`;

  document.getElementById("outMedicamento")
    .textContent = `${outPromocao}`;
  document.getElementById("outValor")
    .textContent = `${outLeve2}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarPromocao);
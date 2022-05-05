function mostrarPromocao() {
  var preco = document.getElementById("inPreco").value;
  var veiculo = document.getElementById("inVeiculo").value;

  var entrada = preco * 0.50;
  var parcela = (preco * 0.50) / 12;

  var outVeiculo = `Promoção: ${veiculo}`;
  var outEntrada = `Entrada de R$: ${entrada.toFixed(2)}`;
  var outParcela = `+ 12 Parcelas de R$: ${parcela.toFixed(2)}`;

  document.getElementById("outVeiculo")
    .textContent = `${outVeiculo}`;
  document.getElementById("outEntrada")
    .textContent = `${outEntrada}`;
  document.getElementById("outParcela")
    .textContent = `${outParcela}`;
}
var btVerPromocao = document.getElementById("btVerPromocao");
btVerPromocao.addEventListener("click", mostrarPromocao);
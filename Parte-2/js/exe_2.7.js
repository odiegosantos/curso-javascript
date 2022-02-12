function mostrarPromocao() {
  var inProduto = document.getElementById("inProduto");
  var inPreco = document.getElementById("inPreco");
  var outPromocao = document.getElementById("outPromocao");
  var outPrecoTerceiro = document.getElementById("outPrecoTerceiro");

  var produto = inProduto.value;
  var preco = Number(inPreco.value);

  var terceiro = preco / 2;
  var total = (preco * 2) + terceiro;

  outPromocao.textContent = produto + ` Promoção: Leve 3 por R$: ${total.toFixed(2)}`;
  outPrecoTerceiro.textContent = `O 3º produto custa apenas R$: ${terceiro.toFixed(2)}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarPromocao);
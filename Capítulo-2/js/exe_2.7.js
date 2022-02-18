function mostrarPromocao() {
  var inProduto = document.getElementById("inProduto");
  var inPreco = document.getElementById("inPreco");

  var produto = inProduto.value;
  var preco = Number(inPreco.value);

  var terceiro = preco / 2;
  var total = (preco * 2) + terceiro;

  var leve3 = `${produto} na promoção leve 3 por R$: ${total.toFixed(2)}`;
  var terceiro = `O 3º produto custa apenas R$: ${terceiro.toFixed(2)}`;

  document.getElementById("outPromocao")
    .textContent = `${leve3}`;
  document.getElementById("outPrecoTerceiro")
    .textContent = `${terceiro}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarPromocao);
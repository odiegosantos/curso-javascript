function mostrarPromocao() {
  var produto = document.getElementById("inProduto").value;
  var preco = document.getElementById("inPreco").value;

  var terceiro = preco / 2;
  var total = (preco * 2) + terceiro;

  var leve3 = `${produto} Na promoção leve 3 por R$: ${total.toFixed(2)}`;
  var terceiro = `O 3º produto custa apenas R$: ${terceiro.toFixed(2)}`;

  document.getElementById("outPromocao")
    .textContent = `${leve3}`;
  document.getElementById("outPrecoTerceiro")
    .textContent = `${terceiro}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarPromocao);
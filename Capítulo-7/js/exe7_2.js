var btExibir = document.getElementById("btExibir");

btExibir.addEventListener("click", function () {
  var preco = document.getElementById("inPreco").value;

  var lista = "";
  var textoOpcaoPagamento = `Opções de Pagamento`;
  var opcaoPagamento = `x de R$:`;

  for (var i = 1; i <= 10; i++) {
    lista += `${i} ${opcaoPagamento} ${(preco / i).toFixed(2)}\n`;
  }
  outParcelas.textContent = `${textoOpcaoPagamento}
  ${lista}`;
});
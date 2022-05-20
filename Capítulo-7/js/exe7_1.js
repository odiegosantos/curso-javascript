function mostrarDados() {
  var modelo = document.getElementById("inModelo").value;
  var ano = document.getElementById("inAno").value;
  var preco = document.getElementById("inPreco").value;

  if (modelo === "" || ano === 0 || isNaN(ano) || isNaN(preco)) {
    alert("Infrome corretamente os dados do veículo");
    return;
  }

  var classificacao = classificarVeiculo(ano);
  var precoVenda = calcularVenda(preco, classificacao);
  var textoPrecoVenda = `Preço de venda R$:`;

  outClassif.textContent = `${modelo} - ${classificacao}`;
  outPrecoVenda.textContent = `${textoPrecoVenda} ${precoVenda.toFixed(2)}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarDados);

function classificarVeiculo(ano) {
  var anoAtual = new Date().getFullYear();
  var classif;
  if (ano === anoAtual) {
    classif = "Novo";
  } else if (ano === anoAtual - 1 || ano === anoAtual - 2) {
    classif = "Seminovo";
  } else {
    classif = "Usado";
  }
  return classif;
}

function calcularVenda(valor, status) {
  var prVenda = (status === "Novo")
    ? valor * 1.08
    : valor * 1.10;
  return prVenda;
}
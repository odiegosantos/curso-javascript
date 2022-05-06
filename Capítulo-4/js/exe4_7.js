function preencherEstrelas() {
  var numero = document.getElementById("inNumero").value;

  var estrelas = "";

  if (numero === 0 || isNaN(numero)) {
    alert("Insira um número válido");
    return;
  }

  for (var i = 1; i <= numero; i++) {
    if (i % 2 === 1) {
      estrelas = `${estrelas} *`;
    } else {
      estrelas = `${estrelas} -`;
    }
  }
  outEstrelas.textContent = estrelas;
}
var btPreencher = document.getElementById("btPreencher");
btPreencher.addEventListener("click", preencherEstrelas);

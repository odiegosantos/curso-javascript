function preencherEstrelas() {
  var inNumero = document.getElementById("inNumero");
  var outEstrelas = document.getElementById("outEstrelas");

  var num = Number(inNumero.value);
  var estrelas = "";

  if (num == 0 || isNaN(num)) {
    alert("Insira um número válido");
    inNumero.focus();
    return;
  }

  for (var i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      estrelas = `${estrelas} *`;
    } else {
      estrelas = `${estrelas} -`;
    }
  }
  outEstrelas.textContent = estrelas;
}
var btPreencher = document.getElementById("btPreencher");
btPreencher.addEventListener("click", preencherEstrelas);

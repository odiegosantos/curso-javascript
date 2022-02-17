function condicao() {
  var inNumero = document.getElementById("inNumero");
  var numero = Number(inNumero.value);
  
  var raiz = Math.sqrt(numero);
  var texto1 = `Raiz ${raiz}`;
  var texto2 = `Não há raiz exata para ${numero}`;

  if (raiz === Math.floor(raiz)) {
    document.getElementById("outSaida").textContent = `${texto1}`;
  } else {
    document.getElementById("outSaida").textContent = `${texto2}`;
  }
}

function calcularRaiz() {
  condicao();
}
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularRaiz);
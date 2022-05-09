var numeros = [];

function adicionarNumero() {
  var inNumero = document.getElementById("inNumero");

  var num = Number(inNumero.value);

  if (num == 0 || isNaN(num) || numeros.indexOf(num) >= 0) {
    alert("Informe um número válido ou inexistente na lista");
    inNumero.focus();
    return;
  }

  numeros.push(num);
  outLista.textContent = `Números: ${numeros.join(", ")}`;
  outOrdem.textContent = "";

  inNumero.value = "";
  inNumero.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNumero);

function verificarOrdem() {
  if (numeros.length == 0) {
    alert("Não há números na lista");
    return;
  }
  var outOrdem = document.getElementById("outOrdem");
  var ordem = true;

  for (i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      ordem = false;
      break;
    }
  }

  outOrdem.textContent = ordem
    ? "Ok! Números estão em ordem crescente"
    : "Atenção... Números não estão em ordem crescente";
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarOrdem);
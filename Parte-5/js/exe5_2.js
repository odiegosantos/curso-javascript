const CHANCES = 5;

var erros = [];
var sorteado = Math.floor(Math.random() * 100) + 1;

function apostarNumero() {

  var inNumero = document.getElementById("inNumero");
  var numero = Number(inNumero.value);

  if (numero <= 0 || numero > 100 || isNaN(numero)) {
    alert("Informe um Número válido...");
    inNumero.focus();
    return;
  }

  var outDica = document.getElementById("outDica");
  var outErros = document.getElementById("outErros");
  var outChances = document.getElementById("outChances");

  if (numero == sorteado) {
    alert("Parabéns você Acertou!!!");

    btApostar.disabled = true;
    btJogar.className = "exibe";
    outDica.textContent = `Parabéns !! Número sorteado: ${sorteado}`;
  } else {
    if (erros.indexOf(numero) >= 0) {
      alert(`Você já apostou o Número ${numero}. Tente outro...`);
    } else {
      erros.push(numero);
      var numErros = erros.length;
      var numChances = CHANCES - numErros;
      outErros.textContent = `${numErros} ( ${erros.join(", ")})`;
      outChances.textContent = numChances;
      if (numChances == 0) {
        alert("Suas Chances acabaram...");
        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = `Game Over!! Número Sorteado: ${sorteado}`;
      } else {
        var dica = numero < sorteado ? "maior" : "menor";
        outDica.textContent = `Dica: Tente um Número ${dica} que ${numero}`;
      }
    }
  }
  inNumero.value = "";
  inNumero.focus();
}
var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", apostarNumero);

var btJogar = document.getElementById("btJogar");
btJogar.addEventListener("click", jogarNovamente);

function jogarNovamente() {
  location.reload();
}
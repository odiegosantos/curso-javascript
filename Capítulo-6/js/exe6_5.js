const MULTA = 2 / 100;
const JUROS = 0.33 / 100;

function calcularMultaJuros() {
  var inData = document.getElementById("inData");
  var inValor = document.getElementById("inValor");
  var outMulta = document.getElementById("outMulta");
  var outJuros = document.getElementById("outJuros");
  var outTotal = document.getElementById("outTotal");

  var dataVencimento = inData.value;
  var valor = Number(inValor.value);

  if (dataVencimento == "" || valor == 0 || isNaN(valor)) {
    alert("Informe os dados!")
    inData.focus();
    return;
  }

  var hoje = new Date();
  var vencimento = new Date();

  var partes = dataVencimento.split("-");
  vencimento.setDate(Number(partes[2]));
  vencimento.setMonth(Number(partes[1]) - 1);
  vencimento.setFullYear(Number(partes[0]));

  var atraso = hoje - vencimento;

  var multa = 0;
  var juros = 0;

  if (atraso > 0) {
    // Converte milissegundos equivalente a 24horas
    // (1 dia 24horas x 60min x 60seg x 1000mseg: 86400000)
    // round(): necessário para períodos envolvendo horário de verão
    var dias = Math.round(atraso / 86400000);

    multa = valor * 
  MULTA;
    juros = (valor * JUROS) * dias;
  }

  var total = valor + multa + juros;

  outMulta.value = multa.toFixed(2);
  outJuros.value = juros.toFixed(2);
  outTotal.value = total.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMultaJuros);

function limparCampos() {
  location.reload();
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", limparCampos);
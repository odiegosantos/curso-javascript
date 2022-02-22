function calcularDataLimite() {
  var inData = document.getElementById("inData");
  var inValor = document.getElementById("inValor");

  var data = inData.value;
  var valor = Number(inValor.value);

  if (data === "" || valor === 0 || isNaN(valor)) {
    alert("Informe a data e o valor");
    inData.focus();
    return;
  }

  var dataLimite = new Date();

  var partes = data.split("-");

  dataLimite.setDate(Number(partes[2]));
  dataLimite.setMonth(Number(partes[1]) - 1);
  dataLimite.setFullYear(Number(partes[0]));

  var dia = dataLimite.getDate();

  dataLimite.setDate(dia + 90);

  var dia = dataLimite.getDate();
  var mes = dataLimite.getMonth() + 1;
  var ano = dataLimite.getFullYear();

  var desconto = valor * 0.80;
  var dataLimite = 'Data para Pagamento com Desconto:';
  var valorDesconto = 'Valor com Desconto R$:';

  outDataLimite.textContent = `
    ${dataLimite}
    ${(dia < 10 ? "0" + dia : dia)} / 
    ${(mes < 10 ? "0" + mes : mes)} / 
    ${ano}`;
  outDesconto.textContent = `${valorDesconto} ${desconto.toFixed(2)}`;
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularDataLimite);
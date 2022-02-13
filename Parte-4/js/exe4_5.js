var numContas = 0;
var valTotal = 0;
var resposta = "";

function registrarConta() {
  var inDescricao = document.getElementById("inDescricao");
  var inValor = document.getElementById("inValor");
  var outListaContas = document.getElementById("outListaContas");
  var outTotal = document.getElementById("outTotal");

  var descricao = inDescricao.value;
  var valor = Number(inValor.value);

  if (descricao === "" || 0 || isNaN(valor)) {
    alert("Informe os dados corretamente...");
    inDescricao.focus;
    return;
  }

  numContas++;
  valTotal = valTotal + valor;

  resposta = `${resposta} 
  ${descricao} R$: ${valor.toFixed(2)}`;

  outListaContas.textContent = `${resposta}`;
  outTotal.textContent = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`;

  inDescricao.value = "";
  inValor.value = "";
  inDescricao.focus();

}
var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", registrarConta);
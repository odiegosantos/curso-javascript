var pacientes = [];
function adicionarPaciente() {
  var inPaciente = document.getElementById("inPaciente");
  var outLista = document.getElementById("outLista");
  var nome = inPaciente.value;

  if (nome == "") {
    alert("Informe o nome do Paciente");
    inPaciente.focus;
    return;
  }

  pacientes.push(nome);

  var lista = "";

  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }

  outLista.textContent = lista;

  inPaciente.value = "";
  inPaciente.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);

function atendimentoUrgencia() {
  var inPaciente = document.getElementById("inPaciente");
  var outLista = document.getElementById("outLista");
  var nome = inPaciente.value;

  if (nome == "") {
    alert("Informe o nome do Paciente");
    inPaciente.focus();
    return;
  }
  pacientes.shift(nome);

  outAtendimento.textContent = nome;

  var lista = "";

  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }

  outLista.textContent = lista;

  inPaciente.value = "";
  inPaciente.focus();
}
var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", atendimentoUrgencia);

function atenderPaciente() {

  if (pacientes.length == 0) {
    alert("Não há Pacientes na lista de espera");
    inPaciente.focus();
    return;
  }

  var outAtendimento = document.getElementById("outAtendimento");
  var outLista = document.getElementById("outLista");

  var atender = pacientes.shift();

  outAtendimento.textContent = atender;

  var lista = "";

  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }

  outLista.textContent = lista;
}
var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);
function gerarEmail() {
  var inFuncionario = document.getElementById("inFuncionario");

  var funcionario = inFuncionario.value;

  if (funcionario == "" || funcionario.indexOf(" ") == -1) {
    alert("Informe o nome completo do Funcionário");
    inFuncionario.focus();
    return;
  }

  var partes = funcionario.split(" ");
  var email = "";
  var tam = partes.length;

  for (var i = 0; i < tam - 1; i++) {
    email += partes[i].charAt(0);   // Obtem a letra inicial de cada item
  }

  email += partes[tam - 1] + "@empresa.com.br";
  outEmail.textContent = "Email: " + email.toLowerCase();
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarEmail);
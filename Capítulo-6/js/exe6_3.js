function gerarEmail() {
  var funcionario = document.getElementById("inFuncionario").value;

  if (funcionario === "" || funcionario.indexOf(" ") === -1) {
    alert("Informe o nome completo do Funcionário");
    return;
  }

  var partes = funcionario.split(" ");
  var email = "";
  var tam = partes.length;

  for (var i = 0; i < tam - 1; i++) {
    email += partes[i].charAt(0);  
  }
  email += partes[tam - 1] + "@empresa.com.br";

  outEmail.textContent = "Email: " + email.toLowerCase();
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarEmail);
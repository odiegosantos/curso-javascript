function gerarSenha() {
  var inNome = document.getElementById("inNome");
  var aluno = inNome.value;

  if (aluno == "" || !validarNome(aluno)) {
    alert("Informe o nome completo do Aluno");
    inNome.focus();
    return;
  }
  var senhaFinal = `Senha Inicial: 
  ${obterSobrenome(aluno)} 
  ${contarVogais(aluno)}`;
  document.getElementById("outSenha").textContent = `${senhaFinal}`;
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarSenha);

function validarNome(nome) {
  if (nome.indexOf(" ") >= 1) {
    return true;
  } else {
    return false;
  }
}

function obterSobrenome(nome) {
  var ultimoEspaco = nome.lastIndexOf(" ");
  return nome.substr(ultimoEspaco + 1).toLowerCase();
}

function contarVogais(nome) {
  var num = 0;
  var letra;
  for (var i = 0; i < nome.length; i++) {
    letra = nome.charAt(i).toUpperCase();
    if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
      num++;
    }
  }
  return num < 10 ? "0" + num : num;
}